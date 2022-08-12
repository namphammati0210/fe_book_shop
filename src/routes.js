import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./pages/auth/Login";
import ListProduct from "./pages/product/ListProduct";

// login => list of books

const AppRouter = () => (
  <Router>
    <Routes>
      {/* <Route path="/"> */}
      <Route path="/login" element={<Login />} />
      <Route path="/products" element={<ListProduct />} />
      {/* </Route> */}
    </Routes>
  </Router>
);

export default AppRouter;
