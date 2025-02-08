<template>
  <div id="app">
    <KnowledgeGraph />
  </div>
</template>

<script>
import KnowledgeGraph from './components/KnowledgeGraph.vue'

export default {
  name: 'App',
  components: {
    KnowledgeGraph
  }
}
</script>

<style>
#app {
  font-family: Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100%;
  height: 100vh;
  margin: 0;
  padding: 0;
}
</style> 