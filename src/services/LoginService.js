import Api from "@/services/Api";

export default {
//   signup(credentials) {
//     return Api().post("auth/signup", credentials);
//   },
  login(data) {
    return Api().post("oauth/login/admin", data);
  },
  register(data) {
    return Api().post("oauth/register/admin", data);
  }
};
