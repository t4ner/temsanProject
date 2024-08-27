import React from "react";
import Home from "./pages/Home";
import { Route, Router, Routes } from "react-router-dom";
import ProductDetail from "./pages/ProductDetail";
import Ropes from "./components/categories/Ropes";
import PvcCoatedRope from "./components/categories/PvcCoatedRope";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product/:productName" element={<ProductDetail />} />{" "}
      <Route path="/category/ropes" element={<Ropes />} />
      <Route path="/category/pvc-coated-rope" element={<PvcCoatedRope />} />
      {/* Ürün detay sayfası */}
    </Routes>
  );
}

export default App;
