<template>
  <!-- The call fails and the error is displayed -->
  <p v-if="error" data-testid="message-error">{{ error }}</p>
  <!-- The call happens successfully and the message is displayed -->
  <p v-else data-testid="message">{{ message.text }}</p>
</template>

<script>
import { getMessage } from '@/services/axios.js'

export default {
  data() {
    return {
      message: {},
      error: null,
    }
  },
  async created() {
    try {
      this.message = await getMessage()
    } catch (err) {
      this.error = 'Oops! Something went wrong.'
    }
  },
}
</script>
