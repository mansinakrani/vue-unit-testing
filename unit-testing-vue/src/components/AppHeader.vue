<template>
  <div>
    <!-- Output => Input false : no output, Input true: output-->
    <button v-show="loggedIn">Logout</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loggedIn: false, //Input
    }
  },
}
</script>
