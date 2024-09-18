import React from "react";
import tel from "/svgIcon/tel.svg";
import send from "/svgIcon/send.svg";
import location from "/svgIcon/location.svg";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";
import { FaSquareFacebook } from "react-icons/fa6";

function Footer() {
  return (
    <div className="bg-[#293d8d]">
      <div className="lg:flex lg:flex-row flex-col lg:w-2/3 space-y-10 lg:space-y-0 mx-auto justify-center gap-20 items-center p-16">
        <div className="flex flex-col justify-center items-center">
          <div className="flex items-center justify-center  w-[60px] h-[60px] lg:w-[70px] lg:h-[70px] rounded-full bg-white">
            <img src={tel} className="lg:w-12 w-10 p-1" />
          </div>
          <p className="text-white pt-4 lg:pt-10 font-medium lg:text-lg">
            +90 (212) 437 29 39
          </p>
        </div>
        <div className="flex flex-col  justify-center items-center">
          <div className="flex items-center justify-center  w-[60px] h-[60px] lg:w-[70px] lg:h-[70px] rounded-full bg-white">
            <img src={send} className="lg:w-12 w-10 p-1" />
          </div>
          <p className="text-white pt-4 lg:pt-10 font-medium lg:text-lg">
            info@temsan.com.tr
          </p>
        </div>
        <div className="flex flex-col  justify-center items-center">
          <div className="flex items-center justify-center  w-[60px] h-[60px] lg:w-[70px] lg:h-[70px] rounded-full bg-white">
            <img src={location} className="lg:w-12 w-10 p-1 " />
          </div>
          <p className="text-white pt-4 lg:pt-10 font-medium lg:text-lg">
            İstanbul / Beylikdüzü
          </p>
        </div>
      </div>

      <hr className="py-10 w-3/4 mx-auto" />

      <div className="hidden w-3/4 mx-auto lg:flex justify-between text-white text-lg">
        <div>
          <ul className="space-y-1">
            <li className="font-semibold pb-5 text-xl">Kurumsal</li>
            <li className="font-medium">Hakkımızda</li>
            <li className="font-medium">Tarihçe</li>
            <li className="font-medium">Haberler</li>
          </ul>
        </div>
        <div>
          <ul className="space-y-1">
            <li className="font-semibold pb-5 text-xl">Ürünlerimiz</li>
            <li className="font-medium">Tüm Ürünlerimiz</li>
            <li className="font-medium">PVC Kaplı İpler</li>
            <li className="font-medium">Naylon İpler</li>
            <li className="font-medium">PVC Kaplı Çelik Halatlar</li>
            <li className="font-medium">Moplar Ve Aparatları</li>
            <li className="font-medium">İpler</li>
            <li className="font-medium">Bezler</li>
            <li className="font-medium">Süngerler</li>
          </ul>
        </div>

        <div className="flex gap-x-10">
          <div>
            <BsInstagram size={28} />
          </div>
          <div>
            <BsTwitter size={28} />
          </div>
          <div>
            <FaSquareFacebook size={28} />
          </div>
        </div>
      </div>
      <hr className="hidden lg:block mt-20 pb-10  w-3/4 mx-auto" />

      <div className="w-3/4 mx-auto text-center pb-3">
        <p className="text-white text-sm lg:text-base font-medium">
          {" "}
          © 2024 TEMSAN™. All Rights Reserved. Designed By TTYazılım
        </p>
      </div>
    </div>
  );
}

export default Footer;
