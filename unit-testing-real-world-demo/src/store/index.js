import { createStore } from "vuex";
import EventService from "@/services/EventService";

// export default createStore({
//   state: {},
//   getters: {},
//   mutations: {},
//   actions: {},
//   modules: {},
// });

export default createStore({
  state: {
    user: "Mansi Nakrani",
    events: [],
    event: null,
  },
  mutations: {
    ADD_EVENT(state, event) {
      state.events.push(event);
    },
    SET_EVENTS(state, events) {
      state.events = events;
    },
    SET_EVENT(state, event) {
      state.event = event;
    },
  },
  actions: {
    createEvent({ commit }, event) {
      return EventService.postEvent(event)
        .then(() => {
          commit("ADD_EVENT", event);
          commit("SET_EVENT", event);
        })
        .catch((error) => {
          throw error;
        });
    },
    fetchEvents({ commit }) {
      return EventService.getEvents()
        .then((response) => {
          commit("SET_EVENTS", response.data);
        })
        .catch((error) => {
          throw error;
        });
    },
    fetchEvent({ commit }, id) {
      const event = this.state.events.find((event) => event.id === id);
      if (event) {
        commit("SET_EVENT", event);
      } else {
        return EventService.getEvent(id)
          .then((response) => {
            commit("SET_EVENT", response.data);
          })
          .catch((error) => {
            throw error;
          });
      }
    },
  },
});
