import axios from "axios";

export default () => {
  return axios.create({
    baseURL: `http://ci.apps.cs.ipb.ac.id/patriotpangan/api/`
  });
  // return axios.create({
  //   baseURL: `http://localhost:3000/patriotpangan/api/`
  // });
};
