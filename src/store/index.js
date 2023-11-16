import Vue from 'vue';
import Vuex from 'vuex';
import test from '@/flowData/test';
import test2 from '@/flowData/test2';

Vue.use(Vuex);
let i  = 1;
const store = new Vuex.Store({
  state: {
    flowData: test,
    flowVueData: test2,
    testNum: 1,
  },
  getters: {},
  mutations: {
    SET_TEST_NUM: (state) => {
      console.log("==============",state.testNum);
      state.testNum = ++i;
    },
    SET_FLOW_DATA: (state, payload) => {
      state.flowData = payload;
    },
  },
  actions: {
    // 获取用户信息
    getUserInfo: async ({ commit, state }, callback) => {
      commit('SET_USER', {});
    },
  },
});

export default store;
