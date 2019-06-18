import Api from "@/services/Api";
import store from "@/store";

export default {
//   signup(credentials) {
//     return Api().post("auth/signup", credentials);
//   },
  addKeluarga(data) {
    return Api().post("keluarga-miskin/upload/excel", data, {
      headers: {
        Authorization: "Bearer " + store.state.token,
        "Content-Type": `multipart/form-data`
      }
    });
  },
  assignPatriot(data) {
    return Api().post("keluarga-miskin/assign-patriot", data, {
      headers: { Authorization: "Bearer " + store.state.token }
    });
  },
  fetchKeluarga() {
    return Api().get("keluarga-miskin/all?populateAddress=true&populatePatriot=true&patriotAttribute=name&limit=40&page=1", {
      headers: { Authorization: "Bearer " + store.state.token }
    });
  },
  getKeluargaById(keluargaId) {
    return Api().get("keluarga-miskin/id/" + keluargaId + "?populateAddress=true&populatePatriot=true", {
      headers: { Authorization: "Bearer " + store.state.token }
    });
  },
  getLaporanById(keluargaId) {
    return Api().get("laporan/keluarga-miskin/gets/keluargaId/" + keluargaId + "?limit=5&page=1", {
      headers: { Authorization: "Bearer " + store.state.token }
    });
  },
  fetchProvinsi() {
    return Api().get("address/provinsi");
  },
  fetchKabupaten() {
    return Api().get("address/kabupaten");
  },
  fetchKecamatan() {
    return Api().get("address/kecamatan");
  },
  fetchDesa() {
    return Api().get("address/desa");
  },
  register(data) {
    return Api().post("oauth/register/admin", data);
  }
};
