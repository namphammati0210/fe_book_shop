import axios from "axios";

export const authUser = (payload) =>
  axios.post("http://localhost:3001/auth/login", payload);
