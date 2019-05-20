import Api from "@/services/Api";
import store from "@/store";

export default {
//   signup(credentials) {
//     return Api().post("auth/signup", credentials);
//   },
  createCampaign(data) {
    return Api().post("campaign/create", data, {
      headers: {
        Authorization: "Bearer " + store.state.token
      }
    });
  },
  uploadFoto(id, credential) {
    return Api().post("campaign/upload/" + id, credential, {
      headers: {
        Authorization: "Bearer " + store.state.token,
        "Content-Type": `multipart/form-data`
      }
    });
  },
  // getAddress(desaId) {
  //   return Api().get("address/" + desaId);
  // },
  fetchCampaign() {
    return Api().get(
      "campaign/?populateUser=true&populateAddress=true&limit=20&page=1",
      {
        headers: { Authorization: "Bearer " + store.state.token }
      }
    );
  },
  verifCampaign(idCampaign) {
    return Api().get("/campaign/verify/" + idCampaign, {
      headers: { Authorization: "Bearer " + store.state.token }
    });
  },
  rejectCampaign(idCampaign) {
    return Api().get("/campaign/reject/" + idCampaign, {
      headers: { Authorization: "Bearer " + store.state.token }
    });
  }
  // fetchProvinsi() {
  //   return Api().get("address/provinsi");
  // },
  // fetchKabupaten() {
  //   return Api().get("address/kabupaten");
  // },
  // fetchKecamatan() {
  //   return Api().get("address/kecamatan");
  // },
  // fetchDesa() {
  //   return Api().get("address/desa");
  // },
  // register(data) {
  //   return Api().post("oauth/register/admin", data);
  // }
};
