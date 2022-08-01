import axios from "axios";

export const authUser = () =>
  axios.post("http://localhost:3001/auth/login", {
    email: "nampt7@gmail.com",
    password: "123456",
  });
