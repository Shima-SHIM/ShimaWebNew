// src/components/LoadingAnimation.jsx

// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import coinImage from "../assets/about-coin-center.png"; // Görseli doğru yoldan çağırın

const LoadingAnimation = ({ onComplete }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // 2 saniye sonra animasyonu tamamlayıp gizle
    const timer = setTimeout(() => {
      setIsVisible(false);
      if (onComplete) onComplete();
    }, 2000);
    return () => clearTimeout(timer);
  }, [onComplete]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
      <motion.img
        src={coinImage}
        alt="Loading Coin"
        className="w-32 h-32"
        initial={{ scale: 0, rotate: 0, opacity: 0 }}
        animate={{
          scale: [1, 1.3, 1],
          rotate: 360,
          opacity: [0, 1, 1, 0],
        }}
        transition={{
          duration: 2,
          ease: "easeInOut",
        }}
      />
    </div>
  );
};

export default LoadingAnimation;
