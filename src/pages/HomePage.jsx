// src/pages/HomePage.jsx

import React, { useState, useEffect } from "react";
import HeroSection from "../components/HeroSection";
import AboutUs from "../components/AboutUs";
import Features from "../components/Features";
import Roadmap from "../components/Roadmap";
import Faq from "../components/Faq";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { FaArrowUp } from "react-icons/fa";
import Tokenomics from "../components/Tokenomics";
import LoadingAnimation from "../components/LoadingAnimation";
import ShimaStory from "../components/OurStory";
import Nft from "../components/Nft";

const HomePage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [showScrollButton, setShowScrollButton] = useState(false);

  // Loading animasyonu tamamlandıktan sonra isLoading'i false yap
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // 2 saniyelik animasyon süresi

    return () => clearTimeout(timer);
  }, []);

  // Sayfa kaydırma durumunu kontrol edin
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Sayfanın en üstüne kaydırma fonksiyonu
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Eğer isLoading true ise sadece LoadingAnimation bileşeni gösterilsin
  if (isLoading) {
    return <LoadingAnimation />;
  }

  return (
    <div>
      <Navbar />
      <section id="home">
        <HeroSection />
      </section>
      <section id="about-us">
        <AboutUs />
      </section>
      <section id="ourstory">
        <ShimaStory />
      </section>

      <section id="nft">
        <Nft />
      </section>

      <section id="features">
        <Features />
      </section>

      <section id="roadmap">
        <Roadmap />
      </section>
      <section id="tokenomics">
        <Tokenomics />
      </section>

      <section id="faq">
        <Faq />
      </section>

      <Footer />

      {/* Scroll to Top Butonu */}
      {showScrollButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-10 right-10 bg-orange-500 text-white p-3 rounded-full shadow-lg hover:bg-orange-600 transition duration-300 ease-in-out"
        >
          <FaArrowUp size={20} />
        </button>
      )}
    </div>
  );
};

export default HomePage;
