<template>
  <div>
    <!-- OUTPUT -->
    <span>{{ randomNumber }}</span>
    <button @click="getRandomNumber">Generate Random Number</button>
  </div>
</template>
<script>
export default {
  props: {
    // INPUTS : if button is clicked, randomNumber should be between 1(min) and 10(max)
    min: {
      type: Number,
      default: 1,
    },
    max: {
      type: Number,
      default: 10,
    },
  },
  data() {
    return {
      randomNumber: 0, //By default, randomNumber data value should be 0
    }
  },
  methods: {
    getRandomNumber() {
      this.randomNumber =
        Math.floor(Math.random() * (this.max - this.min + 1)) + this.min
    },
  },
}
</script>
