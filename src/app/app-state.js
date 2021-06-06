import { createStore } from 'vuex'
import finderModule from './finder-home/finder.state'
export default createStore({
  state: {
    numero: 7
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    finder: finderModule,
  }
})
