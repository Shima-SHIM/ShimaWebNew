import React from "react";
import { FaTelegram, FaYoutube } from "react-icons/fa";
import shimaCoin from "../assets/about-coin-center.png";
import twitter from "../assets/social-button-x.png";
import telegram from "../assets/social-button-telegram.png";
import youtube from "../assets/social-button-youtube.png";

const Footer = () => {
  return (
    <footer className="bg-[#FFFFFF] text-[#121212] py-20 px-8 relative overflow-hidden">
      <div className="container mx-auto flex flex-col items-center md:flex-row justify-between space-y-8 md:space-y-0 md:space-x-16">
        {/* Left Section - Logo and Social Media */}
        <div className="flex flex-col items-center md:items-start space-y-8 md:space-y-4 text-center md:text-left">
          {/* Logo and Description */}
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center space-x-4">
              <img
                src={shimaCoin}
                alt="Shima Coin"
                className="w-16 h-16 animate-bounce"
              />
              <h2 className="text-5xl font-gluten text-[#FEAC3A] tracking-wide">
                SHIMA
              </h2>
            </div>
            <p className="text-[#121212] max-w-xs text-lg leading-relaxed font-gluten mt-4">
              Shima Enaga Token - a fun and innovative meme coin on the SUI
              Blockchain, bringing community together with a unique vision.
            </p>
          </div>

          {/* Social Media Links */}
          <div>
            <h3 className="font-gluten text-2xl text-[#FEAC3A] tracking-wide mb-4">
              Follow Us
            </h3>
            <div className="flex space-x-6">
              <a
                href="https://x.com/shimanestio"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center rounded-full border-2 border-[#FEAC3A] text-[#FEAC3A] bg-transparent hover:bg-[#FEAC3A] hover:text-[#121212] transition duration-300 shadow-lg transform hover:scale-110"
              >
                <img src={twitter} alt="X Logo" className="w-6 h-6" />
              </a>
              <a
                href="https://t.me/shimnest"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center rounded-full border-2 border-[#FEAC3A] text-[#FEAC3A] bg-transparent hover:bg-[#FEAC3A] hover:text-[#121212] transition duration-300 shadow-lg transform hover:scale-110"
              >
                <img src={telegram} alt="Telegram Logo" className="w-6 h-6" />
              </a>
              <a
                href="https://www.youtube.com/@SHIMNEWS"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center rounded-full border-2 border-[#FEAC3A] text-[#FEAC3A] bg-transparent hover:bg-[#FEAC3A] hover:text-[#121212] transition duration-300 shadow-lg transform hover:scale-110"
              >
                <img src={youtube} alt="YouTube Logo" className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Right Section - Important Links */}
        <div className="text-center md:text-left space-y-4">
          <h3 className="font-gluten text-2xl text-[#FEAC3A] tracking-wide">
            Shima Enaga (SHIM)
          </h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                label: "Welcome to The Shima's Nest",
                link: "https://shima-enaga-shim.gitbook.io/",
              },
              {
                label: "Abstract",
                link: "https://shima-enaga-shim.gitbook.io/",
              },
              {
                label: "Introduction",
                link: "https://shima-enaga-shim.gitbook.io/",
              },
              {
                label: "Tokenomics",
                link: "https://shima-enaga-shim.gitbook.io/",
              },
              {
                label:
                  "Blockchain: SUI - The Foundation for a Thriving Ecosystem",
                link: "https://shima-enaga-shim.gitbook.io/",
              },
              {
                label: "CORE FEATURES",
                link: "https://shima-enaga-shim.gitbook.io/",
              },
              {
                label: "Technology and Scalability",
                link: "https://shima-enaga-shim.gitbook.io/",
              },
              {
                label: "Roadmap and Future Vision",
                link: "https://shima-enaga-shim.gitbook.io/",
              },
              {
                label: "Conclusion",
                link: "https://shima-enaga-shim.gitbook.io/",
              },
              {
                label: "Disclaimer",
                link: "https://shima-enaga-shim.gitbook.io/",
              },
            ].map(({ label, link }, index) => (
              <li key={index} className="text-[#121212] text-lg font-gluten">
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative inline-block transition duration-200 hover:text-[#FEAC3A]"
                >
                  {label}
                  <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-[#FEAC3A] transition-all duration-300 hover:w-full"></span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Animated Shima Coin */}
      <div className="absolute inset-0 flex justify-center items-center opacity-10 pointer-events-none">
        <img
          src={shimaCoin}
          alt="Shima Coin"
          className="w-96 h-96 animate-spin-slow"
        />
      </div>

      {/* Bottom Text */}
      <div className="border-t border-gray-200 mt-10 pt-6 text-center">
        <p className="text-gray-500 text-lg font-gluten">
          &copy; {new Date().getFullYear()} SHIMA TEAM. All rights reserved.
        </p>
        <span className="font-gluten text-xl mt-2 block animate-pulse text-[#FEAC3A]">
          Join Us on Social Media & Be Part of the SHIMA Community!
        </span>
      </div>
    </footer>
  );
};

export default Footer;
