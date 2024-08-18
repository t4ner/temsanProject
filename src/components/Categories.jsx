import React from "react";
import { bestCategories } from "../data/data";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "#36a8c2",
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
        background: "#36a8c2",
        borderRadius: "10px",
        marginLeft: "-40px",
        zIndex: 1, // Ön planda olmalarını sağlamak için
      }}
      onClick={onClick}
    />
  );
}
function Categories() {
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
  const backgroundImageStyle = {
    backgroundImage: "url(/bestCategories/categoriesBanner.png)",
    backgroundSize: "cover",
    backgroundPosition: "top",
    height: "750px",
  };

  return (
    <div style={backgroundImageStyle} className="mt-48">
      <div>
        <h3 className="w-1/2 p-16  text-5xl font-bold text-[#36a8c2] pb-20">
          İlginizi Çekebilecek Ürünlerimiz
        </h3>
      </div>
      <div className="slider-container px-20">
        <Slider {...settings}>
          {bestCategories.map((d) => (
            <div
              key={d.name}
              className="bg-white  h-[300px] text-black rounded-xl border border-[#36a8c2]"
            >
              <div className="h-56 flex justify-center items-center rounded-t-xl">
                <img src={d.img} alt={d.name} className="h-52 rounded-full" />
              </div>

              <div className="flex flex-col items-center justify-center gap-4 p-4">
                <p className="text-xl font-semibold text-[#36a8c2]">{d.name}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Categories;
{
  /* <h3 className="pt-16 pb-36  text-5xl font-bold text-[#020202] ">
İlginizi Çekebilecek Ürünlerimiz
</h3>{" "} */
}
