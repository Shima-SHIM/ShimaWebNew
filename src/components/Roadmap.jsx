import React from "react";
import { motion } from "framer-motion";
import backgroundImage from "../assets/roadmap-bg-image.png";
import thumbIcon from "../assets/roadmap-okey-right.png";
import thumbIcon2 from "../assets/roadmap-okey-left.png";

const Roadmap = () => {
  const roadmapItems = [
    {
      title: "Community Kickoff",
      description: "Launching the community and early supporters program.",
      year: "2024",
    },
    {
      title: "Token Development",
      description: "Begin development on SHIMA token smart contracts.",
      year: "2024",
    },
    {
      title: "Initial Marketing",
      description: "Social media campaigns and meme contests.",
      year: "2024",
    },
    {
      title: "Pre-Sale & Listings",
      description: "Token pre-sale and first exchange listings.",
      year: "2024",
    },
    {
      title: "Expansion & Partnerships",
      description: "Collaborating with influencers and crypto projects.",
      year: "2025",
    },
    {
      title: "Ecosystem Development",
      description: "Building partnerships for SHIMA ecosystem expansion.",
      year: "2025",
    },
    {
      title: "Mass Adoption Campaign",
      description: "Aggressive marketing to drive token adoption.",
      year: "2025",
    },
    {
      title: "Future Innovations",
      description: "Research and development for new meme coin utilities.",
      year: "2025",
    },
  ];

  return (
    <section className="relative py-20 px-4 flex flex-col items-center justify-center">
      <div className="relative w-[95%] mx-auto bg-white rounded-[40px] border-2 border-black shadow-lg p-10 overflow-hidden"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "start",
          backgroundAttachment: "fixed",
        }}
      >
        {/* Başlık */}
        <div className="text-center mb-12">
          <h2 className="text-6xl md:text-8xl font-bold text-black mb-4 font-gluten">
            OUR ROADMAP
          </h2>
          <p className="text-xl md:text-3xl text-gray-700 font-gluten">
            Follow our journey as SHIMA continues to evolve and make a mark in
            the crypto space.
          </p>
        </div>

        {/* Roadmap İçerikleri */}
        <div className="relative w-full flex flex-col items-center space-y-12">
          {/* Orta Çizgi */}
          <div className="absolute top-0 left-1/2 w-1 h-full bg-black transform -translate-x-1/2 z-0"></div>

          {roadmapItems.map((item, index) => (
            <motion.div
              key={index}
              className={`relative flex flex-col items-center w-11/12 md:w-3/4 max-w-lg bg-white border-2 border-black shadow-md rounded-lg p-6 z-10`}
              initial={{ opacity: 0, translateY: 50 }}
              whileInView={{ opacity: 1, translateY: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              {/* Sağ İkon */}
              <img
                src={thumbIcon}
                alt="Thumb Icon Right"
                className="absolute w-16 md:w-24 lg:w-32 -right-16 md:-right-20 lg:-right-28 top-1/2 transform -translate-y-1/2"
              />
              {/* Sol İkon */}
              <img
                src={thumbIcon2}
                alt="Thumb Icon Left"
                className="absolute w-16 md:w-24 lg:w-32 -left-16 md:-left-20 lg:-left-28 top-1/2 transform -translate-y-1/2"
              />
              {/* Başlık ve İçerik */}
              <h3 className="text-3xl md:text-5xl text-center font-semibold text-black mb-2 font-gluten">
                {item.title}
              </h3>
              <p className="text-gray-600 text-center text-xl md:text-2xl mb-4 font-gluten">
                {item.description}
              </p>
              <span className="text-orange-500 font-bold text-lg font-gluten">
                {item.year}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
