import React from "react";
import { motion } from "framer-motion";
import bottomIcon from "../assets/story-bottom-image.png"; // Token image
import cloudBg from "../assets/story-bg-image.png"; // Background image

const cloudAnimation = {
  animate: {
    backgroundPosition: ["0% 0%", "100% 100%"],
    transition: { duration: 20, repeat: Infinity, ease: "linear" },
  },
};

const ShimaStory = () => {
  return (
    <section
     className="relative min-h-screen py-20 bg-[#F9F9F9] px-4 flex items-center justify-center">
      <motion.div
        className="absolute inset-0 bg-cover bg-center opacity-20 z-0"
        style={{ backgroundImage: `url(${cloudBg})` }}
        {...cloudAnimation}
      ></motion.div>

      <div className="relative w-[95%] mx-auto bg-white rounded-[40px] border-2 border-black shadow-lg p-10 overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-cover bg-center opacity-40 z-1"
          style={{ backgroundImage: `url(${cloudBg})` }}
          {...cloudAnimation}
        ></motion.div>
        <div className="relative w-full text-center z-10">
          {/* Heading */}
          <motion.h2
            className="text-6xl lg:text-8xl font-bold text-[#121325] mb-12 tracking-wider font-gluten"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          >
            SHIMAS STORY
          </motion.h2>
          <motion.p
            className="text-4xl text-[#121325] mb-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.7, ease: "easeInOut" }}
          >
            – I suppose I’m not the old shima anymore.
          </motion.p>

          {/* Story Content */}
          <div className="text-left text-2xl leading-relaxed font-gluten z-10 relative">
            {[
              "The time has come for you to learn the truth. Our story began long ago, in the town of Hokkaido, where colors shone in every shade and life flowed in peace. This town was a haven where various creatures lived in harmony, a place where nature’s beauty was freely displayed. The townsfolk gathered for festivals and community events, living a joyful life filled with song and laughter.",
              "But they were unaware that this peace would soon be broken by the arrival of a group with ill intentions. These strangers had their sights set on the wealth of the town’s natural resources. While others didn’t notice, this did not escape the attention of Dad Shima — the town’s leader and the people’s most beloved figure. Secretly, Dad Shima began observing them. One day, he finally discovered that these outsiders were miners, intent on exploiting the town’s underground resources with powerful technological tools, all while devastating the environment. Yet, as he learned this, the miners had already taken the first steps in their plan.",
              "Dad Shima urgently gathered the town council. As he explained the situation and called for a plan, he noticed flames rising outside the window. Looking out, they saw fires erupting in various parts of the town, and the cries of people in despair could be heard. The miners were tearing down everything in their path, beginning to seize control of the town. As the council members rushed to their families, Dad Shima ran home to search for his children. But the house was empty. Desperately, he went back outside to search for them amidst the chaos.",
              "By then, most of the town was under the miners’ control, and many of the townsfolk were being held captive in the town square. In the end, Dad Shima was also taken prisoner. The town lay in ruins. Those not forced into exile had either been killed or taken captive. And how do I know all this? My sibling and I are the children of the town leader who managed to escape that night. And what are we doing now, you ask? We have a revenge to take and a goal to reach! We are preparing for this resistance, standing together to reclaim our town, to free our people, and to restore Hokkaido to its former, vibrant days.",
              "Shima and Bhima each had their unique skills. Shima was a master of combat and warfare tactics, while Bhima specialized in expanding their knowledge and constantly upgrading their technology. To help his brother overcome physical limitations, Bhima designed numerous bodies for him, crafting specialized personal assistants (P.E.T.s) and developing powerful weaponry. Together, the Shima siblings had launched several raids against their enemies, though none had yet succeeded. They began to realize that true success would come only through unity — through standing together for a common purpose and fighting for it with all they had.",
              "-So, are you ready for this adventure?",
            ].map((paragraph, index) => (
              <motion.p
                key={index}
                className="mb-6"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.9 + index * 0.2, ease: "easeInOut" }}
              >
                {paragraph}
              </motion.p>
            ))}
            <motion.div
              className="flex justify-center"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 2.1, ease: "easeInOut", delay: 1.4 }}
            >
              <button className="bg-[#FEAC3A] text-white py-2 px-6 rounded-lg font-bold text-2xl hover:bg-[#FFA500] transition-colors duration-300 ease-in-out">
                Let’s Go to Adventure
              </button>
            </motion.div>
          </div>
        </div>

        <motion.div
          className="relative w-full z-10 pt-20"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2.1, ease: "easeInOut", delay: 1.8 }}
        >
          <img src={bottomIcon} alt="Bottom Icon" className="mx-auto" />
        </motion.div>
      </div>
    </section>
  );
};

export default ShimaStory;
