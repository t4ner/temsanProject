import React, { useState, useEffect } from "react";
import heroImage1 from "/heroBanner/banner1.jpg";
import heroImage2 from "/heroBanner/banner2.jpg";
import heroImage3 from "/heroBanner/banner3.jpg";
import heroImage4 from "/heroBanner/banner4.jpg";
import heroImage5 from "/heroBanner/banner5.jpg";

import Navbar from "./Navbar";

function Banner() {
  const [currentBgIndex, setCurrentBgIndex] = useState(0);
  const backgrounds = [
    heroImage1,
    heroImage2,
    heroImage3,
    heroImage4,
    heroImage5,
  ];
  const [text, setText] = useState();
  const [textTransition, setTextTransition] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBgIndex((prevIndex) =>
        prevIndex === backgrounds.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setTextTransition(false);
    setTimeout(() => {
      if (currentBgIndex === 0) {
        setText("Her Ev İçin");
      } else if (currentBgIndex === 1) {
        setText("Her Ev İçin");
      } else if (currentBgIndex === 2) {
        setText("Her Ev İçin");
      } else {
        setText("Her Ev İçin");
      }
      setTextTransition(true);
    }, 700);
  }, [currentBgIndex]);

  useEffect(() => {}, [currentBgIndex]);

  const styles = {
    backgroundImage: `url(${backgrounds[currentBgIndex]})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    transition: "background-image 2s ease-in-out",
  };

  const textStyles = {
    transition: "opacity 0.5s linear",
    opacity: textTransition ? 1 : 0,
  };

  return (
    <section
      className="h-[440px] lg:h-screen w-full relative bg-left md:bg-center"
      style={styles}
    >
      <Navbar />
      <div className="h-full w-full flex flex-col items-center justify-center  pl-1">
        <h1
          className="text-white  text-center font-semibold text-[36px] md:text-[66px] leading-[50px] md:leading-[73px] mr-auto w-full md:w-3/4 shadowText  mx-auto"
          style={textStyles}
        >
          {text}
        </h1>
      </div>
    </section>
  );
}

export default Banner;
