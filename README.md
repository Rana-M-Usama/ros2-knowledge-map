# ROS2 Knowledge Map Visualization

An interactive knowledge graph visualization web portal specifically designed for mapping ROS2 (Robot Operating System 2) learning paths and relationships between different concepts and courses.

## Features

### Current Implementation
- **Interactive Visualization**: Force-directed graph layout using D3.js
- **Node Highlighting**: Click nodes to highlight connected relationships
- **Dynamic Node Addition**: Add new nodes and connections through UI
- **Draggable Nodes**: Interact with nodes to reorganize the layout
- **Directed Relationships**: Arrow indicators show learning path direction


## Technical Stack

- **Frontend**: Vue.js 3
- **Visualization**: D3.js
- **State Management**: Vue Composition API
- **Styling**: CSS3 with Scoped Styles

## Project Structure

```
src/
├── components/
│   ├── KnowledgeGraph.vue    # Main visualization component
│   └── NodeCreationForm.vue  # Node addition interface
├── composables/
│   ├── useForceSimulation.js # D3 force simulation logic
│   └── useGraphStyles.js     # Styling configurations
├── data/
│   └── graph.js             # ROS2 graph data
├── App.vue                  # Root component
└── main.js                 # Application entry point
```

## Installation

1. Clone the repository:
```bash
git clone https://github.com/rana-m-usama/ros2-knowledge-map.git
cd ros2-knowledge-map
```

2. Install dependencies:
```bash
npm install
```

3. Run development server:
```bash
npm run serve
```

4. Build for production:
```bash
npm run build
```

5. Lint and fix files:
```bash
npm run lint
```

## Usage

### Data Format
```javascript
const graphData = {
  nodes: [
    { id: "1", label: "ROS2 Basics", type: "main" },
    { id: "2", label: "Navigation", type: "course" }
  ],
  edges: [
    { source: "1", target: "2" }
  ]
}
```

### Adding New Nodes
1. Click the "Add Node" button in the bottom right corner
2. Fill in the node details:
   - Node Name: The concept/course title
   - Node Type: Main (core concept) or Course (learning module)
   - Connect to: Select an existing node to connect to
3. Submit to add the node to the graph

### Interacting with the Graph
- **Drag Nodes**: Click and drag to reposition
- **Highlight Connections**: Click a node to highlight related nodes

## Future Enhancements

- **Backend Integration**: 
  - REST/GraphQL API for data persistence
  - User authentication and authorization
  - Real-time updates



## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

