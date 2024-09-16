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

function ProductDetailProducts() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
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
    <div className="w-[90%] m-auto my-20 pt-48">
      <div className="flex justify-between items-center pl-6 pr-8">
        <h3 className="w-2/3 text-4xl font-medium text-[#293d8d] pb-20">
          Benzer Ürünler
        </h3>
      </div>
      <div className="slider-container px-5">
        <Slider {...settings}>
          {bestProductss.map((d) => (
            <Link to={`/product/${d.name}`} key={d.name}>
              <div className="bg-white h-[330px] text-black rounded-xl border border-[#293d8d]">
                <div className="h-56 flex justify-center items-center rounded-t-xl">
                  <img src={d.img} alt={d.name} className="h-52 rounded-full" />
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

export default ProductDetailProducts;
