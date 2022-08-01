import axios from "axios";

// Add a request interceptor
axios.interceptors.request.use(
  function (request) {
    // Do something before request is sent
    const token = localStorage.getItem("access_token");

    request.headers = { access_token: JSON.parse(token) };

    return request;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

export default axios;
