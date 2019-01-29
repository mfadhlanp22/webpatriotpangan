import axios from "axios";

export default () => {
  return axios.create({
    baseURL: `http://localhost:3000/`
    // timeout: 10000,
    // withCredentials: false
  });
};
