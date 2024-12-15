// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import bgImage from "../assets/gamified-bg-image.png";
import character from "../assets/character.png";
import goldLeft1 from "../assets/gold-left-1.png";
import phoneLeft from "../assets/phone-left.png";
import phoneRight from "../assets/phone-right.png";

const Phone = ({ src, alt }) => (
  <motion.img
    src={src}
    alt={alt}
    className="w-1/4 lg:w-1/6"
    initial={{ x: 0, rotate: 0 }}
    whileHover={{ x: [0, -20, 20, 0], rotate: [0, -15, 15, 0] }}
    transition={{ duration: 0.6, ease: "easeInOut" }}
  />
);

const Gamifield = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check window size to determine if it's mobile
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleSmoothScroll = (targetId) => {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  const goldPositions = isMobile
    ? [
        { left: "10%", bottom: "20%" },
        { left: "30%", bottom: "25%" },
        { left: "50%", bottom: "15%" },
      ] // Mobile-specific positions
    : [
        { left: "15%", bottom: "25%" },
        { left: "25%", bottom: "30%" },
        { left: "35%", bottom: "20%" },
        { left: "50%", bottom: "35%" },
        { left: "65%", bottom: "25%" },
      ]; // Desktop-specific positions

  return (
    <motion.section
      className="relative flex items-center p-10 justify-center min-h-screen bg-white overflow-hidden"
      initial={{ clipPath: "inset(0 50% 0 50%)" }}
      animate={{ clipPath: "inset(0 0% 0 0%)" }}
      transition={{ duration: 1.5, ease: "easeInOut" }}
    >
      {/* Background Frame */}
      <motion.div
        className="relative w-[95%] mx-auto bg-cover bg-center rounded-[40px] border-2 border-[#121325] shadow-lg p-10"
        style={{ backgroundImage: `url(${bgImage})` }}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        <div className="absolute inset-0 bg-black opacity-40"></div>

        {/* Title */}
        <motion.h2
          className="relative text-5xl lg:text-7xl font-gluten font-bold mb-4 text-white text-center z-10"
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Gamified Airdrop
        </motion.h2>

        {/* Description */}
        <motion.p
          className="relative text-3xl mb-8 text-white text-center font-gluten z-10"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          Play the game and become a partner in the Shima community and story.
        </motion.p>

        {/* Content */}
        <div className="relative flex justify-center items-center z-10 mb-6">
          <Phone src={phoneLeft} alt="Phone Left" />
          <motion.img
            src={character}
            alt="Character"
            className="w-1/2 lg:w-1/3"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          />
          <Phone src={phoneRight} alt="Phone Right" />
        </div>

        {/* Buttons */}
        <motion.div
          className="relative flex justify-center items-center space-x-6 z-10 mt-4"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        >
          <button 
          className="px-8 py-4 bg-orange-400 text-white font-gluten text-2xl rounded-full shadow-md hover:bg-orange-500 transition-all duration-300"
          onClick={() => window.open('https://t.me/ShimaGamifiedBot', '_blank')}
          >
            Play Now
          </button>
          <button 
          className="px-8 py-4 bg-white text-orange-400 font-gluten text-2xl rounded-full shadow-md hover:bg-gray-200 transition-all duration-300"
          onClick={() => handleSmoothScroll("leadership")}
          >
            Leadership
          </button>
        </motion.div>

        {/* Updated Gold Effects */}
        {goldPositions.map((pos, index) => (
          <motion.img
            key={index}
            src={goldLeft1}
            alt={`Gold ${index}`}
            className={`absolute w-12 lg:w-16`}
            style={pos}
            animate={{ y: [0, -10, 0], rotate: 0 }}
            transition={{
              duration: 2 + index * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </motion.div>

      {/* Enhanced Glow Effect */}
      <motion.div
        className="absolute left-0 bottom-0 w-full h-full bg-gradient-radial from-transparent via-yellow-400 to-yellow-600 opacity-50 z-0"
        animate={{ opacity: [0.4, 0.6, 0.4] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      ></motion.div>
    </motion.section>
  );
};

export default Gamifield;
