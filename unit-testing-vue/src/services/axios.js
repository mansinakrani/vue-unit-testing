// import axios from 'axios'

export async function getMessage() {
  const response = await this.$axios.get('http://localhost:3000/message')
  return response.data
}
