import axios from "axios";

export default () => {
  return axios.create({
    baseURL: `http://ci.apps.cs.ipb.ac.id/patriotpangan/api/`
  });
};
