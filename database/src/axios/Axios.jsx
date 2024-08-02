import axios from "axios";

const API = axios.create(
  { baseURL: "http://localhost:3031/users" },

  // { withCredentials: true }
);

export default API;
