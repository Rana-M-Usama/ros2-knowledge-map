export const nodeConfig = {
  main: {
    radius: 18,
    color: '#34495e',
    hoverColor: '#2c3e50',
    selectedColor: '#2ecc71',
    fontSize: 14
  },
  course: {
    radius: 12,
    color: '#7f8c8d',
    hoverColor: '#95a5a6',
    selectedColor: '#2ecc71',
    fontSize: 12
  }
}

export const edgeConfig = {
  normal: {
    width: 1,
    color: '#95a5a6',
    opacity: 0.6
  },
  selected: {
    width: 2,
    color: '#2ecc71',
    opacity: 1
  }
}

export const simulationConfig = {
  force: {
    link: {
      distance: 80
    },
    charge: {
      strength: -200,
      distanceMax: 300
    },
    collision: {
      radius: 60
    },
    center: {
      strength: 0.1
    }
  }
} 