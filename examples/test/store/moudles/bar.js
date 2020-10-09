const bar = {
  namespaced: true,
  state: {
    name: 'muyu',
    age: 26
  },
  getters: {
    getNextYearAge (state) {
      return state.age
    }
  },
  mutations: {
    setAgeIncrease (state) {
      state.age += 1
      console.log(state.age)
    }
  },
  actions: {
    setAgeIncreaseAsync ({ commit }) {
      setTimeout(() => {
        commit('setAgeIncrease')
      }, 1000)
    }
  }
}

export default bar
