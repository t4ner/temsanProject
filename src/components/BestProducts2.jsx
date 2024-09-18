import React from "react";
import nylonRopes2 from "/nylonRopes/urun2.png";
import pvcCoatedRopes2 from "/pvcCoatedRopes/urun2.png";
import ropesUrun7 from "/ropesCategory/urun7.png";
import pvcCoatedSteelRopes2 from "/pvcCoatedSteelRopes/urun2.png";
import clothsCategory2 from "/clothsCategory/urun2.png";
import { FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";
function BestProducts2() {
  return (
    <div className=" w-[90%] m-auto lg:pt-40 pt-10">
      <div className="flex-col lg:flex lg:flex-row justify-between items-center  lg:pl-6 lg:pr-8">
        <h3 className="lg:w-2/3 text-2xl lg:text-5xl font-bold text-[#293d8d] pb-5 lg:pb-20">
          İhtiyacınıza Uygun Başlıca Ürünlerimiz
        </h3>
        <div className="">
        <button className="px-4 py-2 lg:px-5 lg:py-3 rounded-3xl lg:text-2xl font-medium lg:font-semibold text-white bg-[#293d8d]">
            <Link to="/category/ropes">Tümünü Görüntüle</Link>{" "}
          </button>
        </div>
      </div>

      <div className="lg:flex lg:flex-row flex-col items-start gap-x-10 mt-10 lg:mt-0">
        <div className="flex flex-col justify-around items-center basis-1/3 border border-[#293d8d] rounded-lg bg-[#293d8d]">
          <div className="text-center">
            <p className="text-center px-4 text-xl lg:text-3xl font-medium text-white  pt-10 lg:pt-40">
              10 MT PVC KAPLI POLYESTER ÇAMAŞIR İPİ (12'Lİ)
            </p>
            <p className="text-center text-sm lg:text-lg font-medium text-white pt-3 flex items-center justify-center gap-x-1">
              <Link to="/product/10%20MT%20PVC%20KAPLI%20POLYESTER%20ÇAMAŞIR%20İPİ%20(12'Lİ)">
                Ürünü Gör
              </Link>{" "}
              <FaChevronRight size={14} className="" />
            </p>
          </div>

          <img src={ropesUrun7} className="lg:mt-24 mt-10" />
        </div>
        <div className="flex-col space-y-5 lg:space-y-0 lg:flex lg:flex-wrap lg:basis-2/3 lg:justify-around lg:gap-y-5">
          <div className="flex items-center   border w-full border-[#293d8d] rounded-lg mt-5 lg:mt-0">
            <Link to="/product/PVC%20COATED%20POLYESTER%20CLOTHESLINE%202,30%20MM">
              <img src={pvcCoatedRopes2} className="w-96 lg:h-72" />
            </Link>
            <Link
              to="/product/PVC%20COATED%20POLYESTER%20CLOTHESLINE%202,30%20MM"
              className="py-4 mx-auto  text-center  lg:text-xl pr-4 font-medium text-[#293d8d]"
            >
              PVC COATED POLYESTER CLOTHESLINE 2,30 MM
            </Link>
          </div>
          <div className="flex items-center justify-around pr-10 border w-full border-[#293d8d] rounded-lg">
            <Link to="/product/SACK%20MOUTH%20TWINE%20%7B1%20KG%7D">
              <img src={nylonRopes2} className="w-96 lg:h-80 lg:px-10 lg:pt-10" />
            </Link>
            <Link
              to="/product/SACK%20MOUTH%20TWINE%20%7B1%20KG%7D"
              className="py-4 text-center lg:text-xl font-medium text-[#293d8d]"
            >
              SACK MOUTH TWINE
            </Link>
          </div>
          <div className="flex items-center justify-around pr-10  w-full border border-[#293d8d] rounded-lg">
            <Link to="/product/3%20MM%20PVC%20COATED%20STEEL%20ROPE%20%7B200%20MT%7D">
              {" "}
              <img src={pvcCoatedSteelRopes2} className="lg:h-80 lg:px-10 lg:pt-10 w-96 py-4 lg:py-3" />
            </Link>{" "}
            <Link
              to="/product/3%20MM%20PVC%20COATED%20STEEL%20ROPE%20%7B200%20MT%7D"
              className="py-4  text-center lg:text-xl font-medium text-[#293d8d]"
            >
              3 MM PVC COATED STEEL ROPE 200 MT
            </Link>
          </div>
          <div className="flex items-center justify-around pr-10 w-full border border-[#293d8d] rounded-lg">
            <Link to="/product/9'%20CLEANING%20CLOTH">
              <img src={clothsCategory2} className="lg:h-80 lg:px-10 lg:pt-10 w-96" />
            </Link>
            <Link
              to="/product/9'%20CLEANING%20CLOTH"
              className="py-4 text-center lg:text-xl font-medium text-[#293d8d]"
            >
              9' CLEANING CLOTH
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BestProducts2;
