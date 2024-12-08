import React from "react";
import nftimg from "../assets/nft-bg-image.png";
import nftsoon from "../assets/nft-comingsoon-image.png";
import nftloading from "../assets/nft-icon-loading.png";
import { motion } from "framer-motion";

const Nft = () => {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${nftimg})` }}
    >
      <div className="absolute inset-0 bg-[#F9F9F9] opacity-90"></div>
      <div className="relative w-[95%] mx-auto bg-white rounded-[40px] border-2 border-black shadow-lg p-10 overflow-hidden">
        <div className="text-center text-black">
          <h2 className="text-5xl lg:text-7xl font-gluten font-bold mb-8">
            NFT Collection
          </h2>
          <motion.img
            src={nftsoon}
            alt="NFT Coming Soon"
            className="mx-auto mb-8 w-3/4 lg:w-1/2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: "easeInOut" }}
          />
          <div className="flex justify-center items-center space-x-4 animate-pulse">
            <motion.img
              src={nftloading}
              alt="NFT Loading Icon"
              className="w-12 h-12"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1, ease: "easeInOut" }}
            />
            <motion.p
              className="text-2xl lg:text-3xl font-gluten"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, ease: "easeInOut" }}
            >
              Exciting New NFTs Coming Soon!
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Nft;
