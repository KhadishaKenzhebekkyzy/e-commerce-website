import Vue from 'vue'
import Vuex from 'vuex'
// import {mutation} from './mutation.js'
import * as actions from './actions'

Vue.use(Vuex)

const state = {
    user: {}
}

export default new Vuex.Store({
    state,
    // mutation,
    actions
})