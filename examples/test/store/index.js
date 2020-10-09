import Vue from 'vue'
import Vuex from 'vuex'
import bar from './moudles/bar'
import foo from './moudles/foo'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    root: 'root'
  },
  modules: {
    foo,
    bar
  }
})

export default store
