import Vue from 'vue'
import Vuex from 'vuex'
import debounce from 'lodash/fp/debounce'
import axios from 'axios'
import config from './config'

Vue.use(Vuex)

const request = axios.create({
  baseURL: config.host
})

const setLoaderOn = commit => {
  'use strict';
  commit('SET_PROCESSING_ON');
};

const setLoaderOff = debounce(800)(commit => {
  commit('SET_PROCESSING_OFF');
});

const state = {
  spinner: false,
  sortStatus: true,
  popularMovies: []
}

const mutations = {
  SET_PROCESSING_ON(state) {
    state.spinner = true;
  },
  SET_PROCESSING_OFF(state) {
    state.spinner = false;
  },
  SET_SORT_ON(state) {
    state.sortStatus = true;
  },
  SET_SORT_OFF(state) {
    state.sortStatus = false;
  },
  SET_POPULAR_MOVIES(state, data) {
    state.popularMovies = data;
  }
}

const actions = {
  getPopularMovies({ commit }) {
    setLoaderOn(commit)
    request
      .get(`movie/popular?api_key=${config.key}`)
      .then(r => commit('SET_POPULAR_MOVIES', r.data.results))
      .then(setLoaderOff(commit))
      .catch(error => {
        console.log(error);
      })
  },
  getRelatedMovies({ commit }, data) {
    return request
      .get(`movie/${data}/recommendations?api_key=${config.key}`)
      .then(r => r.data.results)
      .catch(error => {
        console.log(error);
      })
  },
  setSortOn({ commit }) {
    commit('SET_SORT_ON');
  },
  setSortOff({ commit }) {
    commit('SET_SORT_OFF');
  }
}

const store = new Vuex.Store({
  state,
  mutations,
  actions
});

export default store
