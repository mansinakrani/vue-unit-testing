<template>
    <div>
        <div v-for="todo in todos" :key="todo.id" data-test="todo">
            {{ todo.text }}
        </div>
    </div>
  </template>
  
  <script>
  export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'TodoApp',
    data() {
        return {
            todos: [
                {
                    id: 1,
                    text: "Learn Vue Testing",
                    completed: false,
                }
            ]
        }
    }
  };
  </script>
  