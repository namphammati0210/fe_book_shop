import axios from "axios";
import { useState } from "react";
import "./App.css";
import ProductItem from "./core/components/ProductItem";
import { authUser } from "./services/auth.service";
import { getBooks } from "./services/book.service";

const products = [
  {
    imgSrc:
      "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
    name: "Basic Tee",
    price: "$35",
    description: "Black",
  },
  {
    imgSrc:
      "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
    name: "Basic Tee 1",
    price: "$351",
    description: "Black1",
  },
  {
    imgSrc:
      "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
    name: "Basic Tee 2",
    price: "$352",
    description: "Black2",
  },
  {
    imgSrc:
      "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
    name: "Basic Tee 3",
    price: "$353",
    description: "Black3",
  },
];
const App = () => {
  const [token, setToken] = useState("");
  const [books, setBooks] = useState([]);

  const getToken = async () => {
    try {
      const response = await authUser();
      console.log(
        "🚀 ~ file: App.js ~ line 45 ~ getToken ~ response",
        response.data
      );

      localStorage.setItem("access_token", JSON.stringify(response.data));

      setToken(response.data);
      return response.data;
    } catch (error) {
      console.log("🚀 ~ file: App.js ~ line 43 ~ getToken ~ error", error);
    }
  };

  const fetchBooks = async () => {
    try {
      const response = await getBooks();
      console.log(
        "🚀 ~ file: App.js ~ line 45 ~ getBooks ~ response",
        response.data
      );

      return response.data;
    } catch (error) {
      console.log("🚀 ~ file: App.js ~ line 70 ~ getBooks ~ error", error);
    }
  };

  return (
    <div className="grid gap-1 grid-cols-12">
      <button onClick={getToken} className="border border-red-500">
        Get token
      </button>
      {token && <p>{token}</p>}
      <button onClick={fetchBooks} className="border border-red-500">
        Get Books
      </button>

      {/* {products &&
        products.map((product) => (
          <div className="lg:col-span-3 md:col-span-6 sm:col-span-12  m-auto">
            <ProductItem
              imgSrc={product.imgSrc}
              name={product.name}
              price={product.price}
              description={product.description}
            />
          </div>
        ))} */}
    </div>
  );
};

export default App;
