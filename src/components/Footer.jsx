import React from "react";
import tel from "/svgIcon/tel.svg";
import send from "/svgIcon/send.svg";
import location from "/svgIcon/location.svg";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";
import { FaSquareFacebook } from "react-icons/fa6";

function Footer() {
  return (
    <div className="bg-[#36a8c2]">
      <div className="flex w-2/3 mx-auto justify-center gap-20 items-center p-16">
        <div className="flex flex-col justify-center items-center">
          <div className="flex items-center justify-center w-[70px] h-[70px] rounded-full bg-white">
            <img src={tel} className="w-12 p-1" />
          </div>
          <p className="text-white pt-10 font-medium text-lg">
            +90 (212) 437 29 39
          </p>
        </div>
        <div className="flex flex-col  justify-center items-center">
          <div className="flex items-center justify-center  w-[70px] h-[70px] rounded-full bg-white">
            <img src={send} className="w-12" />
          </div>
          <p className="text-white pt-10 font-medium text-lg">
            info@temsan.com.tr
          </p>
        </div>
        <div className="flex flex-col  justify-center items-center">
          <div className="flex items-center justify-center  w-[70px] h-[70px] rounded-full bg-white">
            <img src={location} className="w-12 " />
          </div>
          <p className="text-white pt-10 font-medium text-lg">
            İstanbul / Beylikdüzü
          </p>
        </div>
      </div>

      <hr className="py-10 w-3/4 mx-auto" />

      <div className="w-3/4 mx-auto flex justify-between text-white text-lg">
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
      <hr className="mt-20 pb-10  w-3/4 mx-auto" />

      <div className="w-3/4 mx-auto text-center pb-3">
        <p className="text-white font-medium">
          {" "}
          © 2024 TEMSAN™. All Rights Reserved. Designed By TTYazılım
        </p>
      </div>
    </div>
  );
}

export default Footer;
