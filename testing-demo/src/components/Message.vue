<template>
    <div>
      <h1>{{ msg }}</h1>
    </div>
  </template>
  
  <script>
  export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Message',
    props: {
      msg: String
    },
  };
  </script>
  