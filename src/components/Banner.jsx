import React, { useState, useEffect } from "react";
import heroImage1 from "/heroBanner/heroBanner1.jpeg";
import heroImage2 from "/heroBanner/heroBanner2.jpeg";
import leftIcon from "/svgIcon/leftIcon.svg";
import rightIcon from "/svgIcon/rightIcon.svg";

import Navbar from "./Navbar";

function Banner() {
  const [currentBgIndex, setCurrentBgIndex] = useState(0);
  const backgrounds = [heroImage1, heroImage2];
  const [text, setText] = useState("Temizlik Bezleri");
  const [textTransition, setTextTransition] = useState(true);

  // Effect to update text when currentBgIndex changes
  useEffect(() => {
    setTextTransition(false);
    const timeoutId = setTimeout(() => {
      if (currentBgIndex === 0) {
        setText("Temizlik Bezleri");
      } else if (currentBgIndex === 1) {
        setText("Tablet Temizlik Setleri");
      }
      setTextTransition(true);
    }, 700); // Match with text transition duration
    return () => clearTimeout(timeoutId);
  }, [currentBgIndex]);

  // Function to handle left click
  const handleLeftClick = () => {
    setCurrentBgIndex((prevIndex) =>
      prevIndex === 0 ? backgrounds.length - 1 : prevIndex - 1
    );
  };

  // Function to handle right click
  const handleRightClick = () => {
    setCurrentBgIndex((prevIndex) =>
      prevIndex === backgrounds.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Inline styles for background image and text transition
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
      className="h-screen w-full relative bg-center bg-cover md:bg-center"
      style={styles}
    >
      <Navbar />
      <div className="h-full w-full flex flex-col items-center justify-center pl-16">
        <h1
          className="text-[#1d768c] font-semibold text-[36px] md:text-[60px] leading-[50px] md:leading-[73px] mr-auto w-full"
          style={textStyles}
        >
          {text}
        </h1>
        <div className="mr-auto flex gap-5 pl-2 pt-10">
          <button onClick={handleLeftClick} className="mr-auto">
            <img src={leftIcon} alt="Previous" />
          </button>
          <button onClick={handleRightClick} className="mr-auto">
            <img src={rightIcon} alt="Next" />
          </button>
        </div>
        <div className="flex flex-col items-center mr-auto absolute bottom-0 left-16">
          <span className="mb-8 translate-y-8 text-[#1d768c] font-semibold text-xl">
            Scroll
          </span>
          <div className="w-1 border-l-2 border-[#1d768c] h-14"></div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
