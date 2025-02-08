<template>
  <div class="node-form-overlay" v-if="isOpen">
    <div class="node-form">
      <h3>Add New Node</h3>
      <form @submit.prevent="handleSubmit">
        <div class="form-group">
          <label>Node Name:</label>
          <input 
            v-model="formData.label" 
            type="text" 
            required
            placeholder="Enter node name"
          />
        </div>
        <div class="form-group">
          <label>Node Type:</label>
          <select v-model="formData.type" required>
            <option value="main">Main</option>
            <option value="course">Course</option>
          </select>
        </div>
        <div class="form-group">
          <label>Connect to Node:</label>
          <select v-model="formData.connectTo" required>
            <option value="">Select a node</option>
            <option 
              v-for="node in existingNodes" 
              :key="node.id" 
              :value="node.id"
            >
              {{ node.label }}
            </option>
          </select>
        </div>
        <div class="form-actions">
          <button type="submit">Add Node</button>
          <button type="button" @click="$emit('close')">Cancel</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { defineComponent, reactive } from 'vue'

export default defineComponent({
  name: 'NodeCreationForm',
  props: {
    isOpen: Boolean,
    existingNodes: {
      type: Array,
      required: true
    }
  },
  emits: ['close', 'create'],
  setup(props, { emit }) {
    const formData = reactive({
      label: '',
      type: 'course',
      connectTo: ''
    })

    const handleSubmit = () => {
      emit('create', { ...formData })
      formData.label = ''
      formData.type = 'course'
      formData.connectTo = ''
      emit('close')
    }

    return {
      formData,
      handleSubmit
    }
  }
})
</script>

<style scoped>
.node-form-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.node-form {
  background: white;
  padding: 2rem;
  border-radius: 8px;
  width: 400px;
  max-width: 90%;
}

.form-group {
  margin-bottom: 1rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: bold;
}

.form-group input,
.form-group select {
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.form-actions {
  display: flex;
  gap: 1rem;
  margin-top: 1.5rem;
}

button {
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button[type="submit"] {
  background: #2ecc71;
  color: white;
}

button[type="button"] {
  background: #e74c3c;
  color: white;
}
</style> 