import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { products } from "../data/data"; // Ürünlerin bulunduğu veri
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BestProducts from "../components/BestProducts";
import ProductDetailProducts from "../components/ProductDetailProducts";

function ProductDetail() {
  const [activeTab, setActiveTab] = useState("features");
  const { productName } = useParams();
  const product = products.find((p) => p.name === productName);

  if (!product) {
    return <div>Ürün bulunamadı</div>;
  }

  return (
    <>
      <div className="flex items-center justify-center pb-10">
        <div className="bg-[#293d8d] h-[350px] w-full">
          <Navbar />
        </div>
        <div className=" w-5/6 bg-white absolute top-[20%] lg:top-[33%] mx-auto rounded-[40px] ">
          <div className="lg:flex lg:flex-row flex-col justify-between lg:p-20">
            <div className="lg:basis-1/2">
              <img
                src={product.img}
                alt={product.name}
                className="h-[400px]  rounded-full"
              />
            </div>
            <div className="lg:basis-1/2 flex justify-center items-center">
              <div className="flex flex-col">
                {" "}
                <p className="text-[#293d8d] font-medium text-lg lg:text-3xl">
                  {product.name}{" "}
                </p>
                <p className="text-gray-500 text-lg  pt-10">
                  {product.description}
                </p>
              </div>
            </div>
          </div>

          <div className=" ">
            <div className="text-center mx-auto lg:w-2/3 space-x-20 text-xl lg:text-2xl text-[#293d8d] font-medium">
              <button
                onClick={() => setActiveTab("features")}
                className={`p-2 ${
                  activeTab === "features" ? "border-b-2 border-[#293d8d]" : ""
                }`}
              >
                Özellikler
              </button>
            </div>

            <div className="mt-10 text-lg ">
              {activeTab === "description" && (
                <div className="text-center">
                  <p className="text-lg text-gray-500">{product.description}</p>
                </div>
              )}
              {activeTab === "features" && (
                <div className="flex flex-col justify-center items-center">
                  <div className=" grid grid-cols-[auto_1fr_auto] gap-y-4">
                    <div className="text-[#293d8d] font-medium lg:text-xl">
                      Ürün Adı
                    </div>
                    <div className=" border-gray-300 px-5">:</div>
                    <div className="text-gray-500  lg:text-xl">{product.name}</div>

                    <div className="text-[#293d8d] font-medium lg:text-xl">
                      Ürün Kodu
                    </div>
                    <div className=" border-gray-300 px-5">:</div>
                    <div className="text-gray-500 lg:text-xl">{product.code}</div>

                    <div className="text-[#293d8d] font-medium lg:text-xl">
                      Koli İçi Adet
                    </div>
                    <div className=" px-5 border-gray-300">:</div>
                    <div className="text-gray-500 lg:text-xl">
                      {product.quantity}
                    </div>

                    <div className="text-[#293d8d] font-medium lg:text-xl">
                      Kutu Ağırlığı 
                    </div>
                    <div className="px-5 border-gray-300">:</div>
                    <div className="text-gray-500  text-xl">
                      {product.boxWeight} KG
                    </div>

                    <div className="text-[#293d8d] font-medium lg:text-xl">
                      Kutu Boyutu
                    </div>
                    <div className="px-5 border-gray-300">:</div>
                    <div className="text-gray-500  lg:text-xl">
                      {product.boxSize}
                    </div>

                    <div className="text-[#293d8d] font-medium lg:text-xl">
                      Hacim M3
                    </div>
                    <div className="px-5 border-gray-300">:</div>
                    <div className="text-gray-500  lg:text-xl">
                      {product.volume}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="pt-[480px] lg:pt-[650px]">
        <ProductDetailProducts />
      </div>
      <div className="pt-[80px] lg:pt-[140px]">
        <Footer />
      </div>
    </>
  );
}

export default ProductDetail;
{
  /* <div className="w-[90%] m-auto my-20">
      <div className="flex flex-col items-center">
        <img
          src={product.img}
          alt={product.name}
          className="h-52 rounded-full"
        />
        <h1 className="text-4xl font-bold text-[#293d8d] mt-6">
          {product.name}
        </h1>
        {/* Diğer detaylar ve stil burada eklenebilir */
}
//   </div>
// </div> */}
