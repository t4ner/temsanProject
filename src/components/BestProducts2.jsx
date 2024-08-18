import React from "react";
import urun2 from "/products/urun2.png";
import urun3 from "/products/urun3.png";
import urun4 from "/products/urun4.png";
import urun5 from "/products/urun5.png";
import urun6 from "/products/urun6.png";
import { FaChevronRight } from "react-icons/fa";
function BestProducts2() {
  return (
    <div className=" w-[90%] m-auto pt-40">
      <div className="flex justify-between items-center  pl-6 pr-8">
        <h3 className="w-2/3  text-5xl font-bold text-[#36a8c2] pb-20">
          İhtiyacınıza Uygun Başlıca Ürünlerimiz
        </h3>
        <div className="">
          <button className=" px-5 py-3 rounded-3xl  text-2xl font-semibold text-white bg-[#36a8c2] ">
            Tümünü Görüntüle
          </button>
        </div>
      </div>

      <div className="flex gap-x-10">
        <div className="flex flex-col justify-between items-center basis-1/3 border border-[#36a8c2] rounded-lg bg-[#36a8c2]">
          <div className="text-center">
            <p className="text-center text-4xl font-medium text-white pt-40">
              Buz Torbası <br /> (180'li x 12) <br />
            </p>
            <p className="text-center text-lg font-medium text-white pt-3 flex items-center justify-center gap-x-1">
              Ürünü Gör <FaChevronRight size={14} className=""/>
            </p>
          </div>

          <img src={urun2} className="" />
        </div>
        <div className="flex flex-wrap basis-2/3 justify-around gap-y-16">
          <div className="border border-[#36a8c2] rounded-lg">
            <img src={urun3} className="h-80 px-10 pt-10" />
            <p className="py-4 text-center text-xl font-medium text-[#36a8c2]">
              Buzdolabı Poşeti Orta Boy
            </p>
          </div>
          <div className="border border-[#36a8c2] rounded-lg">
            <img src={urun4} className="h-80 px-10 pt-10" />
            <p className="py-4 text-center text-xl font-medium text-[#36a8c2]">
              Streç Film (33m)
            </p>
          </div>
          <div className="border border-[#36a8c2] rounded-lg">
            <img src={urun5} className="h-80 px-10 pt-10" />
            <p className="py-4  text-center text-xl font-medium text-[#36a8c2]">
              Pişirme Kağıdı
            </p>
          </div>
          <div className="border border-[#36a8c2] rounded-lg">
            <img src={urun6} className="h-80 px-10 pt-10" />
            <p className="py-4 text-center text-xl font-medium text-[#36a8c2]">
              Fırın Torbası
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BestProducts2;
