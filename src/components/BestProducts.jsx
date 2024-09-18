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
    <div className="w-[90%] m-auto my-10 lg:my-20">
      <div className="lg:flex lg:flex-row flex-col justify-between items-center lg:pl-6 lg:pr-8">
        <h3 className="lg:w-2/3 lg:text-5xl text-2xl font-bold text-[#293d8d] pb-5 lg:pb-20">
          İhtiyacınıza Uygun Başlıca Ürünlerimiz
        </h3>
        <div className="">
          <button className="px-4 py-2 lg:px-5 lg:py-3 rounded-3xl lg:text-2xl font-medium lg:font-semibold text-white bg-[#293d8d]">
            <Link to="/category/ropes">Tümünü Görüntüle</Link>{" "}
          </button>
        </div>
      </div>
      <div className="slider-container lg:px-5 mt-8 lg:mt-0">
        <Slider {...settings}>
          {bestProductss.map((d) => (
            <Link to={`/product/${d.name}`} key={d.name}>
              <div className="bg-white h-[330px] text-black rounded-xl border border-[#293d8d]">
                <div className="flex justify-center items-center rounded-t-xl">
                  <img src={d.img} alt={d.name} className="w-80" />
                </div>
                <div className="flex flex-col items-center justify-center gap-4 p-4">
                  <p className="text-xl font-semibold text-[#293d8d] text-center">
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
