import React from "react";
import clipPath from "/clip/clip.svg";
import tik from "/svgIcon/tik.svg";
import bubbles from "/svgIcon/bubbles.png";
function Information() {
  return (
    <div className="relative w-full ">
      <div className="bg-[#293d8d] h-[600px] lg:h-[453px]"></div>
      <div>
        <img src={clipPath} alt="" />
      </div>
      <div className="absolute top-12 mx-auto w-full text-white lg:flex lg:flex-row flex-col items-center justify-center">
        <h2 className="text-2xl lg:text-5xl font-semibold basis-1/2 pr-10 px-5 lg:px-0">
          Temsan'ı Yakından Tanıyın.
        </h2>
        <div className="mt-16 space-y-10 lg:text-xl font-medium px-5 lg:px-0">
          <div className="relative border-b-2 pb-8 flex space-x-4 group">
            <div className="flex items-center space-x-4 transition-transform duration-300 ease-in-out group-hover:opacity-0">
              <p className="transition-opacity duration-800 ease-in-out">
                ihtiyacınız olan tüm belgeler, tanıtımlar.
              </p>
              <img src={tik} alt="" />
            </div>
            <a
              href="/hakkimizda"
              className="absolute bg-[#293d8d] text-white rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out"
            >
              Hakkımızda
            </a>
          </div>
          <div className="relative border-b-2 pb-8 flex space-x-4 group">
            <div className="flex items-center space-x-4 transition-transform duration-300 ease-in-out group-hover:opacity-0">
              <p className="transition-opacity duration-300 ease-in-out">
                Ürünlerimizi beraber keşfedebiliriz.
              </p>
              <img src={tik} alt="" />
            </div>
            <a
              href="/hakkimizda"
              className="absolute left-0  bg-[#293d8d] text-white rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out"
            >
              Ürünlerimiz
            </a>
          </div>
          <div className="relative border-b-2 pb-8 flex space-x-4 group">
            <div className="flex items-center space-x-4 transition-transform duration-300 ease-in-out group-hover:opacity-0">
              <p className="transition-opacity duration-300 ease-in-out">
                Haberlerimize göz atabilirsiniz
              </p>
              <img src={tik} alt="" />
            </div>
            <a
              href="/hakkimizda"
              className="absolute left-0 bg-[#293d8d] text-white rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out"
            >
              Haberler
            </a>
          </div>
          <div className="relative border-b-2 pb-8 flex space-x-4 group">
            <div className="flex items-center space-x-4 transition-transform duration-300 ease-in-out group-hover:opacity-0">
              <p className="transition-opacity duration-300 ease-in-out">
                Temsan'a ulaşmak çok kolay. İletişimde olalım.
              </p>
              <img src={tik} alt="" />
            </div>
            <a
              href="/hakkimizda"
              className="absolute left-0  bg-[#293d8d] text-white rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out"
            >
              İletişim
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Information;
