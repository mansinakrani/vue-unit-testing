<template>
    <nav>
      <a id="home">Home</a>
      <a v-if="isLoggedIn" id="profile">Profile</a>
    </nav>
</template>
  
<script>
export default {
    name: 'NavBar',
    data() {
       return {
        isLoggedIn: false
       } 
    }
};
</script>