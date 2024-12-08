import React from "react";
import characterImage from "../assets/home-character-image.png";
import coinTopLeft from "../assets/coin-top-left.png";
import coinTopRight from "../assets/coin-top-right.png";
import coinBottomLeft from "../assets/coin-bottom-left.png";
import coinBottomRight from "../assets/coin-bottom-right.png";
import starBg from "../assets/home-shinning-star.png";
import arrowLeft from "../assets/arrow-left-angular.png";
import arrowRight from "../assets/arrow-right-angular.png";

const HeroSection = () => {
  const scrollToAboutUs = () => {
    const aboutUsSection = document.getElementById("about-us");
    if (aboutUsSection) {
      aboutUsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center bg-[#F9F9F9]">
      {/* Çerçeve */}
      <div className="relative w-[95%] min-h-[80vh] mt-[120px] bg-white rounded-[40px] border-2 border-[#121325] flex items-center justify-center overflow-hidden shadow-lg">
        {/* Arka Plan */}
        <img
          src={starBg}
          alt="Star Background"
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        />

        {/* İçerik */}
        <div className="relative z-20 text-center flex flex-col items-center">
          {/* Karakter Görseli */}
          <div className="relative z-30 w-[90%] max-w-[800px] lg:max-w-[1200px] mx-auto">
            <img
              src={characterImage}
              alt="Character"
              className="w-full object-contain"
            />
          </div>

          {/* Başlık */}
          <h1 className="text-[8vw] lg:text-[4vw] font-bold font-[Gluten] text-[#121325] mt-[-20px] lg:mt-[-10px] relative z-30">
            NEW MEME STAR
          </h1>
          <p className="text-[4vw] lg:text-[2vw] font-[Gluten] font-medium text-[#121325] mt-[-10px] lg:mt-[-5px] relative z-30">
            WELCOME TO SHIMANEST
          </p>

          {/* Buton */}
          <button
            onClick={scrollToAboutUs}
            className="group mt-4 lg:mt-6 flex items-center justify-center gap-2 text-[#121325] text-[6vw] lg:text-[2vw] font-[Gluten] font-bold transition-all hover:text-[#FEAC3A] relative z-30"
          >
            <img
              src={arrowRight}
              alt="Left Arrow"
              className="w-[6vw] lg:w-[2vw] h-auto transition-all group-hover:brightness-125 group-hover:translate-x-[-5px]"
            />
            Explore More
            <img
              src={arrowLeft}
              alt="Right Arrow"
              className="w-[6vw] lg:w-[2vw] h-auto transition-all group-hover:brightness-125 group-hover:translate-x-[5px]"
            />
          </button>
        </div>

        {/* Coinler */}
        <div className="absolute w-full h-full top-0 left-0 pointer-events-none z-10">
          {/* Sol Üst Coin */}
          <img
            src={coinTopLeft}
            alt="Coin"
            className="absolute top-[5%] left-[8%] w-[16vw] lg:w-[10vw] object-contain"
          />
          {/* Sağ Üst Coin */}
          <img
            src={coinTopRight}
            alt="Coin"
            className="absolute top-[5%] right-[8%] w-[16vw] lg:w-[10vw] object-contain"
          />
          {/* Sol Alt Coin */}
          <img
            src={coinBottomLeft}
            alt="Coin"
            className="absolute bottom-[5%] left-[10%] w-[18vw] lg:w-[12vw] object-contain"
          />
          {/* Sağ Alt Coin */}
          <img
            src={coinBottomRight}
            alt="Coin"
            className="absolute bottom-[5%] right-[10%] w-[18vw] lg:w-[12vw] object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
