import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import "./App.css";
import Navbar from "./components/Navbar";
import "./styles/Navbar.css";
import Products from "./pages/Products";
import SingleProductsView from "./pages/SingleProductView";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/products" element={<Products />} />
        <Route
          exact
          path="/products/singleproductspage"
          element={<SingleProductsView />}
        />
      </Routes>
    </div>
  );
}
export default App;
