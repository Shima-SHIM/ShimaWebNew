import React from "react";
import { motion } from "framer-motion";

// Import icons
import communityIcon from "../assets/features-icon-community.png";
import sustainableIcon from "../assets/features-icon-sustainable.png";
import memeIcon from "../assets/features-icon-meme.png";
import securityIcon from "../assets/features-icon-security.png";
import lowFeeIcon from "../assets/features-icon-fee.png";
import globalIcon from "../assets/features-icon-accessibility.png";

const Features = () => {
  return (
    <section className="py-20 bg-[#F9F9F9] px-4">
      <div className="relative w-[95%] mx-auto bg-white rounded-[40px] border-2 border-black shadow-lg p-10 overflow-hidden">
        <div className="w-full text-center">
          {/* Heading */}
          <h2 className="text-6xl lg:text-8xl font-bold text-[#121325] mb-20 tracking-wider font-gluten">
            SHIM FEATURES
          </h2>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
            {[
              {
                icon: communityIcon,
                title: "Community-Driven",
                text: "SHIM empowers its community by focusing on decentralized governance and ensuring that every holder has a voice in shaping the future of the coin.",
              },
              {
                icon: sustainableIcon,
                title: "Sustainable Vision",
                text: "Leveraging SUI blockchain’s eco-friendly technology, SHIM ensures minimal environmental impact while maximizing scalability.",
              },
              {
                icon: memeIcon,
                title: "Meme Culture Integration",
                text: "SHIM embraces the fun and creativity of meme culture, fostering a community of humor and relatability.",
              },
              {
                icon: securityIcon,
                title: "Enhanced Security",
                text: "Built on robust blockchain technology, SHIM offers a secure platform for trading and holding assets.",
              },
              {
                icon: lowFeeIcon,
                title: "Low Transaction Fees",
                text: "SHIM offers ultra-low transaction fees, making it accessible and affordable for all users.",
              },
              {
                icon: globalIcon,
                title: "Global Accessibility",
                text: "SHIM is designed to be accessible worldwide, promoting inclusivity in the crypto community.",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="bg-white border-4 border-[#FEAC3A] rounded-lg shadow-lg p-8 flex flex-col items-center gap-6 hover:shadow-glow transition-transform transform hover:scale-105"
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.3, ease: "easeInOut" },
                }}
                style={{ width: "100%", minHeight: "300px" }}
              >
                {/* Icon */}
                <div className="w-20 h-20 lg:w-28 lg:h-28 mb-4">
                  <motion.img
                    src={feature.icon}
                    alt={feature.title}
                    className="w-full h-full"
                    whileHover={{ scale: 1.2, rotate: 10 }}
                  />
                </div>
                {/* Title and Description */}
                <div className="text-center font-gluten">
                  <h3 className="text-4xl lg:text-5xl font-bold mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-2xl lg:text-3xl text-[#121325] leading-relaxed">
                    {feature.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
