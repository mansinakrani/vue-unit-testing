import axios from "axios";
// const axios = require("axios").default;
// const axios = require("axios");

// const apiClient = async () => {
//   axios.create({
//     baseURL: "http://localhost:3000",
//     withCredentials: false,
//     headers: {
//       Accept: "application/json",
//       "Content-Type": "application/json",
//     },
//   });
// };

const apiClient = axios.create({
  baseURL: "http://localhost:3000",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

// export function bind() {
//   return this.$axios.create({
//     baseURL: "http://localhost:3000",
//     withCredentials: false,
//     headers: {
//       Accept: "application/json",
//       "Content-Type": "application/json",
//     },
//   });
// }

// const apiClient = bind();

export default {
  getEvents() {
    // console.log("inside event list");
    // console.log(apiClient);
    return apiClient.get("/events");
  },
  getEvent(id) {
    return apiClient.get("/events/" + id);
  },
  postEvent(event) {
    return apiClient.post("/events", event);
  },
};
