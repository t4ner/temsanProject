import React from "react";
import Home from "./pages/Home";
import { Route, Router, Routes } from "react-router-dom";
import ProductDetail from "./pages/ProductDetail";
import Ropes from "./components/categories/Ropes";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product/:productName" element={<ProductDetail />} />{" "}
      <Route path="/category/ropes" element={<Ropes />} /> /category/ropes
      {/* Ürün detay sayfası */}
    </Routes>
  );
}

export default App;
