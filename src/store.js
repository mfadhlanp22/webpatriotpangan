import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

export default new Vuex.Store({
  plugins: [createPersistedState()],
  state: {
    token: null,
    privilege: null,
    id: null,
    email: null,
    name: null,
    profilePicture: null,
    address: null,
    provinsi: null,
    kabupaten: null,
    kecamatan: null,
    desa: null,
    isUserLoggedIn: false,
    drawer: true,
    item: null,
    subItem: null,
  },
  mutations: {
    setToken(state, token) {
      state.token = token;
      if (token) {
        state.isUserLoggedIn = true;
      } else {
        state.isUserLoggedIn = false;
      }
    },
    setPrivilege(state, privilege) {
      state.privilege = privilege;
    },
    setId(state, id) {
      state.id = id;
    },
    setEmail(state, email) {
      state.email = email;
    },
    setName(state, name) {
      state.name = name;
    },
    setProfilePicture(state, profilePicture) {
      state.profilePicture = profilePicture;
    },
    setAddress(state, address) {
      state.address = address;
    },
    setProvinsi(state, provinsi) {
      state.provinsi = provinsi;
    },
    setKabupaten(state, kabupaten) {
      state.kabupaten = kabupaten;
    },
    setKecamatan(state, kecamatan) {
      state.kecamatan = kecamatan;
    },
    setDesa(state, desa) {
      state.desa = desa;
    },
    setDrawer(state, drawer) {
      state.drawer = drawer;
    },
    setItem(state, item) {
      state.item = item;
    },
    setSubItem(state, subItem) {
      state.subItem = subItem;
    },
  },
  actions: {
    setToken({ commit }, token) {
      commit("setToken", token);
    },
    setPrivilege({ commit }, privilege) {
      commit("setPrivilege", privilege);
    },
    setId({ commit }, id) {
      commit("setId", id);
    },
    setEmail({ commit }, email) {
      commit("setEmail", email);
    },
    setName({ commit }, name) {
      commit("setName", name);
    },
    setProfilePicture({ commit }, profilePicture) {
      commit("setProfilePicture", profilePicture);
    },
    setAddress({ commit }, address) {
      commit("setAddress", address);
    },
    setProvinsi({ commit }, provinsi) {
      commit("setProvinsi", provinsi);
    },
    setKabupaten({ commit }, kabupaten) {
      commit("setKabupaten", kabupaten);
    },
    setKecamatan({ commit }, kecamatan) {
      commit("setKecamatan", kecamatan);
    },
    setDesa({ commit }, desa) {
      commit("setDesa", desa);
    },
    setDrawer({ commit }, drawer) {
      commit("setDrawer", drawer);
    },
    setItem({ commit }, item) {
      commit("setItem", item);
    },
    setSubItem({ commit }, subItem) {
      commit("setSubItem", subItem);
    },
  }
});
