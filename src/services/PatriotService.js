import Api from "@/services/Api";
import store from "@/store";

export default {
//   createEvent(credential) {
//     return Api().post("events", credential, {
//       headers: {
//         Authorization: "Bearer " + store.state.token,
//         "Content-Type": `multipart/form-data; boundary=${credential._boundary}`
//       }
//     });
//   },
  fetchPatriot() {
    return Api().get("patriot/patriots?populateAddress=true&limit=10&page=1", {
      headers: { Authorization: "Bearer " + store.state.token }
    });
  },
  activatePatriot(patriotId) {
    return Api().get("patriot/activate/" + patriotId, {
      headers: { Authorization: "Bearer " + store.state.token }
    });
  },
  deactivatePatriot(patriotId) {
    return Api().get("patriot/deactivate/" + patriotId, {
      headers: { Authorization: "Bearer " + store.state.token }
    });
  },
  fetchAssignPatriot(id1, id2, id3, id4) {
    return Api().get("patriot/patriots", {
      params: {
        populateAddress: true,
        desa: id1,
        kecamatan: id2,
        kabupaten: id3,
        provinsi: id4,
        limit: 10,
        page: 1
      },
      headers: { Authorization: "Bearer " + store.state.token }
    });
  },
//   editEvent(eventId, credential) {
//     return Api().patch("events/" + eventId, credential, {
//       headers: {
//         Authorization: "Bearer " + store.state.token,
//         "Content-Type": `multipart/form-data`
//       }
//     });
//   }
};
