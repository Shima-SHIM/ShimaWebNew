import React, { useState } from "react";
import logo from "../assets/shima-logo.png";
import telegramIcon from "../assets/social-button-telegram.png";
import xIcon from "../assets/social-button-x.png";
import youtubeIcon from "../assets/social-button-youtube.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSmoothScroll = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <div className="fixed top-0 left-0 w-full z-50 shadow-lg rounded-b-3xl bg-white">
      <nav className="p-4 shadow-lg rounded-b-3xl border-b-2 border-[#121325]">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a
            href="#home"
            className="flex items-center transform hover:scale-105 transition-transform duration-300"
            onClick={(e) => handleSmoothScroll(e, "#home")}
          >
            <img src={logo} alt="Shima Logo" className="h-16 mr-4" />
          </a>

          {/* Navigation Links */}
          <ul className="hidden lg:flex space-x-16 font-[Gluten] text-xl text-black font-bold mx-auto">
            {[
              { name: "ABOUT", href: "#about-us" },
              { name: "OUR STORY", href: "#ourstory" },
              { name: "FEATURES", href: "#features" },
              { name: "NFT", href: "#nft" },
              { name: "ROADMAP", href: "#roadmap" },
              { name: "TOKENOMICS", href: "#tokenomics" },
              { name: "FAQ", href: "#faq" },
            ].map((section) => (
              <li key={section.name} className="relative group">
                <a
                  href={section.href}
                  onClick={(e) => handleSmoothScroll(e, section.href)}
                  className="hover:text-orange-400 transition-colors duration-200 transform hover:scale-105"
                >
                  {section.name}
                </a>
                <span className="absolute inset-x-0 -bottom-1 h-1 bg-orange-400 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-x-100 scale-x-0 rounded-full"></span>
              </li>
            ))}
          </ul>

          {/* Social Media Icons and Whitepaper */}
          <div className="hidden lg:flex space-x-6 items-center">
            <a
              href="https://whitepaper.shimanest.io/shima" target="_blank"
              className="px-6 py-2 bg-[#121325] text-white font-[Gluten] text-lg rounded-full shadow-md hover:bg-orange-400 hover:text-[#121325] transition-all duration-300"
            >
              Whitepaper
            </a>
            <a
              href="https://x.com/shimanestio"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center rounded-full bg-transparent"
            >
              <img
                src={xIcon}
                alt="X"
                className="w-14 h-14 transition-all transform hover:scale-110"
              />
            </a>
            <a
              href="https://t.me/shimnest"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center rounded-full bg-transparent"
            >
              <img
                src={telegramIcon}
                alt="Telegram"
                className="w-14 h-14 transition-all transform hover:scale-110"
              />
            </a>
            <a
              href="https://www.youtube.com/@SHIMNEWS"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center rounded-full bg-transparent"
            >
              <img
                src={youtubeIcon}
                alt="YouTube"
                className="w-14 h-14 transition-all transform hover:scale-110"
              />
            </a>
          </div>

          {/* Hamburger Menu Button */}
          <button
            className="text-black focus:outline-none transform hover:scale-110 transition-transform duration-300 lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              className="w-8 h-8"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M4 5h16v2H4V5zm0 6h16v2H4v-2zm0 6h16v2H4v-2z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-md rounded-b-3xl">
          <ul className="flex flex-col items-center space-y-4 py-4 font-[Gluten] text-lg text-black font-semibold">
            {[
              { name: "ABOUT", href: "#about-us" },
              { name: "OUR STORY", href: "#ourstory" },
              { name: "FEATURES", href: "#features" },
              { name: "NFT", href: "#nft" },
              { name: "ROADMAP", href: "#roadmap" },
              { name: "TOKENOMICS", href: "#tokenomics" },
              { name: "FAQ", href: "#faq" },
            ].map((section) => (
              <li key={section.name}>
                <a
                  href={section.href}
                  onClick={(e) => handleSmoothScroll(e, section.href)}
                  className="hover:text-orange-400 transform transition-transform duration-300 hover:scale-105"
                >
                  {section.name}
                </a>
              </li>
            ))}
            <div className="flex space-x-4 items-center mt-4">
              <a
                href="https://whitepaper.shimanest.io/shima" target="_blank"
                className="px-6 py-2 bg-[#121325] text-white font-[Gluten] text-lg rounded-full shadow-md hover:bg-orange-400 hover:text-[#121325] transition-all duration-300"
              >
                Whitepaper
              </a>
              <a
                href="https://x.com/shimanestio"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center rounded-full bg-transparent"
              >
                <img
                  src={xIcon}
                  alt="X"
                  className="w-12 h-12 transition-all transform hover:scale-110"
                />
              </a>
              <a
                href="https://t.me/shimnest"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center rounded-full bg-transparent"
              >
                <img
                  src={telegramIcon}
                  alt="Telegram"
                  className="w-12 h-12 transition-all transform hover:scale-110"
                />
              </a>
              <a
                href="https://www.youtube.com/@SHIMNEWS"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center rounded-full bg-transparent"
              >
                <img
                  src={youtubeIcon}
                  alt="YouTube"
                  className="w-12 h-12 transition-all transform hover:scale-110"
                />
              </a>
            </div>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
