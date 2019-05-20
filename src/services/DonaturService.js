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
  fetchDonatur() {
    return Api().get("donatur/donaturs?populateAddress=true", {
      headers: { Authorization: "Bearer " + store.state.token }
    });
  },
  activateDonatur(donaturId) {
    return Api().get("donatur/verify/" + donaturId, {
      headers: { Authorization: "Bearer " + store.state.token }
    });
  },
  rejectDonatur(donaturId) {
    return Api().get("donatur/reject/" + donaturId, {
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
