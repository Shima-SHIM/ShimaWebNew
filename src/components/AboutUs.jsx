import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import background from "../assets/about-shim-hashtag-bg.png";
import centerCoin from "../assets/about-coin-center.png";
import leftCoin from "../assets/about-coin-letf.png";
import rightCoin from "../assets/about-coin-right.png";

const AboutUs = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.3 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  const coinAnimation = {
    rotate: [0, 20, -20, 0],
    scale: [1, 1.2, 1],
    y: [0, 15, 0],
  };

  return (
    <section
      className="relative py-20 text-black overflow-hidden bg-[#F9F9F9]"
      ref={ref}
    >
      {/* Outer Container */}
      <div className="relative w-[95%] mx-auto bg-white rounded-[40px] border-2 border-black shadow-lg p-10 overflow-hidden">
        <div
          className="absolute inset-0 z-0 bg-cover bg-center opacity-90"
          style={{
            backgroundImage: `url(${background})`,
          }}
        ></div>
        {/* Background Image */}

        {/* Hashtags */}
        <div className="absolute top-24 left-0 right-0 z-10 flex justify-center items-center">
          <div className="whitespace-nowrap text-2xl lg:text-4xl font-bold text-black animate-marquee">
            <span>#SHIM #Gamified #Staking #NFT #dApps </span>
            <span>#SHIM #Gamified #Staking #NFT #dApps </span>
          </div>
        </div>

        {/* Animated Coins */}
        <div className="relative flex justify-center items-center mb-12 z-20 space-x-8 px-4">
          <motion.img
            src={leftCoin}
            alt="Left Coin"
            className="w-20 lg:w-36"
            animate={coinAnimation}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.img
            src={centerCoin}
            alt="Center Coin"
            className="w-28 lg:w-48 mx-auto"
            animate={coinAnimation}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.img
            src={rightCoin}
            alt="Right Coin"
            className="w-20 lg:w-36"
            animate={coinAnimation}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>

        {/* About Section */}
        <div className="relative text-center z-20">
          <h2 className="text-6xl lg:text-8xl font-bold font-[Gluten] text-[#121325] mb-8">
            ABOUT
          </h2>
          <div className="bg-white text-[#121325] text-lg lg:text-2xl font-medium p-8 lg:p-12 rounded-3xl shadow-xl border-l-8 border-orange-400 max-w-4xl mx-auto font-gluten">
            <p className="leading-relaxed mb-8">
              The Shima Enaga, with its distinctive white plumage and endearing
              appearance, is a symbol of rarity and charm. Mirroring these
              qualities, the Shima Enaga token (SHIM) emerges as a beacon of
              innovation in the crypto space. Leveraging the SUI blockchain’s
              scalability and efficiency, SHIM is poised to create a thriving
              ecosystem where community participation and environmental
              consciousness converge.
            </p>
            <a href="https://whitepaper.shimanest.io/shima/audit-and-kyc" target="_blank">
              <button className="px-8 py-4 bg-[#121325] text-white text-lg lg:text-xl rounded-full font-bold shadow-md hover:bg-orange-400 hover:text-[#121325] transition-all duration-300">
              View Audit & KYC
            </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
