<template>
  <div class="graph-container">
    <svg ref="svgRef"></svg>
    <div v-if="!isDataReady" class="loading">Loading...</div>
    <button class="add-node-btn" @click="showNodeForm = true">
      Add Node
    </button>
    <NodeCreationForm
      :is-open="showNodeForm"
      :existing-nodes="graphData.nodes"
      @close="showNodeForm = false"
      @create="handleNodeCreate"
    />
  </div>
</template>

<script>
import { defineComponent, ref, onMounted, onBeforeUnmount } from 'vue'
import * as d3 from 'd3'
import { graphData } from '../data/graph'
import { useForceSimulation } from '../composables/useForceSimulation'
import { useGraphStyles } from '../composables/useGraphStyles'
import NodeCreationForm from './NodeCreationForm.vue'

export default defineComponent({
  name: 'KnowledgeGraph',
  components: {
    NodeCreationForm
  },
  setup() {
    const svgRef = ref(null)
    const isDataReady = ref(false)
    const simulation = ref(null)
    const { createSimulation, createDragBehavior } = useForceSimulation()
    const { getNodeRadius, getNodeColor, getNodeFontSize, edgeStyles } = useGraphStyles()
    const showNodeForm = ref(false)

    const initializeGraph = () => {
      const svg = d3.select(svgRef.value)
      const width = window.innerWidth
      const height = window.innerHeight
      
      svg.attr('width', width).attr('height', height)
      const container = svg.append('g')

      initializeMarkers(svg)
      simulation.value = createSimulation(graphData.nodes, width, height)
      renderGraph(container)
      
      isDataReady.value = true
    }

    const initializeMarkers = (svg) => {
      svg.append('defs').append('marker')
        .attr('id', 'arrowhead')
        .attr('viewBox', '-0 -5 10 10')
        .attr('refX', 20)
        .attr('refY', 0)
        .attr('orient', 'auto')
        .attr('markerWidth', 6)
        .attr('markerHeight', 6)
        .append('path')
        .attr('d', 'M0,-5L10,0L0,5')
        .attr('fill', edgeStyles.color)
    }

    const renderGraph = (container) => {
      // Create edges
      const edges = container.append('g')
        .selectAll('line')
        .data(graphData.edges)
        .join('line')
        .attr('stroke', edgeStyles.color)
        .attr('stroke-opacity', edgeStyles.opacity)
        .attr('stroke-width', edgeStyles.width)
        .attr('marker-end', 'url(#arrowhead)')

      // Create node groups
      const nodes = container.append('g')
        .selectAll('g')
        .data(graphData.nodes)
        .join('g')
        .attr('class', 'node')
        .call(createDragBehavior(simulation.value))
        .on('click', handleNodeClick)

      // Add circles to nodes
      nodes.append('circle')
        .attr('r', d => getNodeRadius(d.type))
        .attr('fill', d => getNodeColor(d.type, false))
        .attr('stroke', '#fff')
        .attr('stroke-width', 2)

      // Add labels to nodes
      nodes.append('text')
        .text(d => d.label)
        .attr('dy', 30)
        .attr('text-anchor', 'middle')
        .attr('fill', '#2c3e50')
        .attr('font-size', d => getNodeFontSize(d.type))

      simulation.value.nodes(graphData.nodes)
      simulation.value.force('link').links(graphData.edges)

      simulation.value.on('tick', () => {
        nodes.attr('transform', d => {
          d.x = Math.max(100, Math.min(window.innerWidth - 100, d.x))
          d.y = Math.max(100, Math.min(window.innerHeight - 100, d.y))
          return `translate(${d.x},${d.y})`
        })

        edges
          .attr('x1', d => d.source.x)
          .attr('y1', d => d.source.y)
          .attr('x2', d => d.target.x)
          .attr('y2', d => d.target.y)
      })
    }

    const handleNodeClick = (event, d) => {
      const connected = new Set([d.id])
      graphData.edges.forEach(edge => {
        if (edge.source.id === d.id) connected.add(edge.target.id)
        if (edge.target.id === d.id) connected.add(edge.source.id)
      })
      
      d3.selectAll('.node circle')
        .attr('fill', node => getNodeColor(node.type, connected.has(node.id)))
    }

    const handleNodeCreate = (newNodeData) => {
      // Generate a unique ID for the new node
      const newNodeId = `node_${Date.now()}`
      
      // Create the new node
      const newNode = {
        id: newNodeId,
        label: newNodeData.label,
        type: newNodeData.type
      }

      // Create the new edge with proper source/target references
      const newEdge = {
        source: newNodeData.connectTo,  // ID of existing node
        target: newNodeId              // ID of new node
      }

      // Clear the SVG before adding new nodes
      d3.select(svgRef.value).selectAll('*').remove()
      
      // Add new node and edge to the graph data
      graphData.nodes.push(newNode)
      graphData.edges.push(newEdge)

      // Reinitialize the simulation with updated data
      simulation.value = null // Clear existing simulation
      initializeGraph()
    }

    onMounted(() => {
      initializeGraph()
      window.addEventListener('resize', initializeGraph)
    })

    onBeforeUnmount(() => {
      if (simulation.value) simulation.value.stop()
      window.removeEventListener('resize', initializeGraph)
    })

    return {
      svgRef,
      isDataReady,
      showNodeForm,
      handleNodeCreate,
      graphData
    }
  }
})
</script>

<style scoped>
.graph-container {
  width: 100%;
  height: 100vh;
  background: #ffffff;
  position: relative;
  overflow: hidden;
}

.loading {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 16px;
  color: #666;
}

:deep(.node) {
  cursor: pointer;
}

:deep(.node text) {
  pointer-events: none;
  user-select: none;
  font-family: Arial, sans-serif;
}

:deep(.node-label-background) {
  fill: white;
  fill-opacity: 0.9;
}

:deep(.edge) {
  stroke-linecap: round;
}

.add-node-btn {
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  padding: 0.75rem 1.5rem;
  background: #2ecc71;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 100;
}

.add-node-btn:hover {
  background: #27ae60;
}
</style> 