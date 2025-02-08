export function useGraphStyles() {
  const nodeStyles = {
    main: {
      radius: 20,
      color: '#34495e',
      selectedColor: '#2ecc71',
      fontSize: 14
    },
    course: {
      radius: 15,
      color: '#7f8c8d',
      selectedColor: '#2ecc71',
      fontSize: 12
    }
  }

  const edgeStyles = {
    color: '#999',
    opacity: 0.6,
    width: 1
  }

  const getNodeRadius = (type) => nodeStyles[type].radius
  const getNodeColor = (type, isSelected) => 
    isSelected ? nodeStyles[type].selectedColor : nodeStyles[type].color
  const getNodeFontSize = (type) => nodeStyles[type].fontSize

  return {
    nodeStyles,
    edgeStyles,
    getNodeRadius,
    getNodeColor,
    getNodeFontSize
  }
} 