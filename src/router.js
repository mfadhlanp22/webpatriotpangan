import Vue from "vue";
import Router from "vue-router";
// import Home from "./views/Home.vue";
import Login from "./views/Login.vue";
import VerPatriot from "./views/VerPatriot.vue";
import VerDonatur from "./views/VerDonatur.vue";
import DataKeluarga from "./views/DataKeluarga.vue";
import Campaign from "./views/Campaign.vue";
import TambahCampaign from "./components/TambahCampaign.vue";
import AssignPatriot from "./components/AssignPatriot.vue";
import KeluargaDetail from "./components/KeluargaDetail.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Campaign
    },
    // {
    //   path: "/dashboard",
    //   name: "dashboard",
    //   component: Home
    // },
    {
      path: "*",
      redirect: "home"
    },
    // {
    //   path: "/about",
    //   name: "about",
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () =>
    //     import(/* webpackChunkName: "about" */ "./views/About.vue")
    // },
    {
      path: "/login",
      name: "login",
      component: Login
    },
    {
      path: "/campaigns",
      name: "campaigns",
      component: Campaign
    },
    {
      path: "/campaigns/create",
      name: "buatCampaign",
      component: TambahCampaign
    },
    {
      path: "/verifikasi/patriot",
      name: "verPatriot",
      component: VerPatriot
    },
    {
      path: "/verifikasi/donatur",
      name: "verDonatur",
      component: VerDonatur
    },
    {
      path: "/keluargaRawanPangan/dataKeluarga",
      name: "dataKeluargaMiskin",
      component: DataKeluarga
    },
    {
      path: "/keluargaRawanPangan/penetapanPatriot",
      name: "assignPatriot",
      component: AssignPatriot
    },
    {
      path: "/keluargaRawanPangan/:keluargaId",
      name: "keluarga",
      component: KeluargaDetail
    }
  ]
});
