import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = () => ({
  currentUser: null
})

const getters = {
  currentUser(state) {
    return state.currentUser
  }
}

const mutations = {
  SET_USER(state, payload) {
    state.currentUser = payload
  }
}

const actions = {
  setUser({ commit }, payload) {
    commit('SET_USER', payload)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
