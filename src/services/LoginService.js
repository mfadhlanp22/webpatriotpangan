import Api from "@/services/Api";

export default {
//   signup(credentials) {
//     return Api().post("auth/signup", credentials);
//   },
  loginGoogle() {
    return Api().get("oauth/google", {
      header: { "Access-Control-Allow-Origin": "*" },
      // header: {
      //   "Access-Control-Allow-Headers":
      //     "Origin, X-Requested-With, Content-Type, Accept"
      // },
      // header: { "Access-Control-Allow-Methods": "GET, POST, PUT" }
    });
  }
};
