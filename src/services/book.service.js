// import axios from "axios";
import axios from "../core/http/index";

export const getBooks = () => {
  // const token = localStorage.getItem("access_token");
  // console.log("🚀 ~ file: book.service.js ~ line 5 ~ getBooks ~ token", token);
  // const config = {
  //   headers: {
  //     access_token: JSON.parse(token),
  //   },
  // };
  return axios.get("http://localhost:3001/api/books");
};

// export const getBookById = () => {
//   const token = localStorage.getItem("access_token");
//   console.log("🚀 ~ file: book.service.js ~ line 5 ~ getBooks ~ token", token);
//   const config = {
//     headers: {
//       access_token: JSON.parse(token),
//     },
//   };
//   return axios.get("http://localhost:3001/api/books", config);
// };
