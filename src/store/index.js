import Vue from 'vue'
import Vuex from 'vuex'
import mutations from "./mutations.js";
import actions from "./actions.js";
import getters from "@/store/getters";

Vue.use(Vuex)

const state={
  shoplist:[],
}

const store=new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})

export default store
