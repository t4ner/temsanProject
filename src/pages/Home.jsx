import React from "react";
import Banner from "../components/Banner";
import Information from "../components/Information";
import BestProducts from "../components/BestProducts";
import BestProducts2 from "../components/BestProducts2";
import Categories from "../components/Categories";
import Footer from "../components/Footer";

function Home() {
  return (
    <div>
      <Banner />
      <Information />
      <BestProducts />
      <BestProducts2 />
      <Categories />
      <Footer />
    </div>
  );
}

export default Home;
