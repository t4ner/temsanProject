import React from "react";
import { Link } from "react-router-dom";
import { bestProductss } from "../data/data";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

// Özel ok bileşenleri
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "#293d8d",
        borderRadius: "10px",
        marginRight: "-40px",
        zIndex: 1, // Ön planda olmalarını sağlamak için
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "#293d8d",
        borderRadius: "10px",
        marginLeft: "-40px",
        zIndex: 1, // Ön planda olmalarını sağlamak için
      }}
      onClick={onClick}
    />
  );
}

function BestProducts() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    speed: 900,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="w-[90%] m-auto my-20">
      <div className="flex justify-between items-center pl-6 pr-8">
        <h3 className="w-2/3 text-5xl font-bold text-[#293d8d] pb-20">
          İhtiyacınıza Uygun Başlıca Ürünlerimiz
        </h3>
        <div className="">
          <button className="px-5 py-3 rounded-3xl text-2xl font-semibold text-white bg-[#293d8d]">
            Tümünü Görüntüle
          </button>
        </div>
      </div>
      <div className="slider-container px-5">
        <Slider {...settings}>
          {bestProductss.map((d) => (
            <Link to={`/product/${d.name}`} key={d.name}>
              <div className="bg-white h-[330px] text-black rounded-xl border border-[#293d8d]">
                <div className="flex justify-center items-center rounded-t-xl">
                  <img src={d.img} alt={d.name} className="h-52 w-52 bg-cover" />
                </div>
                <div className="flex flex-col items-center justify-center gap-4 p-4">
                  <p className="text-xl font-semibold text-[#293d8d]">
                    {d.name}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default BestProducts;
