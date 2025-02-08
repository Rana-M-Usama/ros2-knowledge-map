import * as d3 from 'd3'

export function useForceSimulation() {
  const createSimulation = (nodes, width, height) => {
    return d3.forceSimulation(nodes)
      .force('link', d3.forceLink()
        .id(d => d.id)
        .distance(100))
      .force('charge', d3.forceManyBody().strength(-1000))
      .force('center', d3.forceCenter(width / 2, height / 2))
      .force('collision', d3.forceCollide().radius(50))
      .force('x', d3.forceX(width / 2).strength(0.1))
      .force('y', d3.forceY(height / 2).strength(0.1))
  }

  const createDragBehavior = (simulation) => {
    return d3.drag()
      .on('start', (event) => {
        if (!event.active) simulation.alphaTarget(0.3).restart()
        event.subject.fx = event.subject.x
        event.subject.fy = event.subject.y
      })
      .on('drag', (event) => {
        event.subject.fx = event.x
        event.subject.fy = event.y
      })
      .on('end', (event) => {
        if (!event.active) simulation.alphaTarget(0)
        event.subject.fx = null
        event.subject.fy = null
      })
  }

  return {
    createSimulation,
    createDragBehavior
  }
} 