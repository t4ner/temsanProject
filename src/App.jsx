import React, { useEffect } from "react";
import Home from "./pages/Home";
import { Route, Router, Routes, useLocation } from "react-router-dom";
import ProductDetail from "./pages/ProductDetail";
import Ropes from "./components/categories/Ropes";
import PvcCoatedRope from "./components/categories/PvcCoatedRope";
import NylonRopes from "./components/categories/NylonRopes";
import PvcCoatedSteelRopes from "./components/categories/PvcCoatedSteelRopes";
import Cloths from "./components/categories/Cloths";
import Mops from "./components/categories/Mops";
import Sponges from "./components/categories/Sponges";

function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product/:productName" element={<ProductDetail />} />{" "}
      <Route path="/category/ropes" element={<Ropes />} />
      <Route path="/category/pvc-coated-rope" element={<PvcCoatedRope />} />
      <Route path="/category/nylon-ropes" element={<NylonRopes />} />
      <Route
        path="/category/pvc-coated-steel-ropes"
        element={<PvcCoatedSteelRopes />}
      />
      <Route path="/category/cloths" element={<Cloths />} />
      <Route path="/category/mops" element={<Mops />} />
      <Route path="/category/sponges" element={<Sponges />} />
      {/* Ürün detay sayfası */}
    </Routes>
  );
}

export default App;
