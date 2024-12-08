import React, { useState, useEffect } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import background from "../assets/faq-bg-image.png"; // Arka plan resmini import ediyoruz

const Faq = () => {
  const [openQuestion, setOpenQuestion] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const toggleQuestion = (index) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

  const faqs = [
    {
      question: "What is the purpose of SHIMA token?",
      answer:
        "The SHIMA token is a meme coin designed to foster community engagement and environmental awareness. Built on the SUI blockchain, it allows holders to benefit from decentralized finance while supporting eco-friendly initiatives. By holding SHIMA, users participate in a broader mission to make cryptocurrency fun, rewarding, and impactful.",
    },
    {
      question: "How can I buy SHIMA tokens?",
      answer:
        "The presale of SHIMA tokens has been successfully completed, and all SHIMA assets have been sold out. We are now in the process of distribution and listing. Our DEX program is ongoing, and preparations for the token distribution are underway. Stay updated by following our official social media channels and continue to take advantage of upcoming opportunities. Thank you for your interest, and we look forward to sharing the next steps with you!",
    },
    {
      question: "What makes SHIMA token unique?",
      answer:
        "SHIMA stands out due to its integration of meme culture with meaningful purpose. Leveraging the efficiency of the SUI blockchain, SHIMA offers fast, low-cost transactions and an eco-conscious roadmap. Its community-driven focus fosters a loyal and vibrant user base, combining the fun of a meme coin with impactful incentives for holders.",
    },
    {
      question: "What are the benefits of holding SHIMA tokens?",
      answer:
        "SHIMA token holders gain access to unique community rewards, early access to new features, and voting rights on important project decisions. Additionally, SHIMA's eco-partnerships mean that a portion of transactions directly supports environmental initiatives, making each transaction meaningful.",
    },
    {
      question: "How does SHIMA support eco-friendly initiatives?",
      answer:
        "SHIMA token has committed to donating a portion of transaction fees to environmental charities and eco-conscious projects. By holding and using SHIMA, community members contribute to sustainability efforts, making SHIMA not only a meme coin but also a movement for positive change.",
    },
  ];

  return (
    <section className="relative text-gray-900 py-20 px-6">
      <div
        className="absolute inset-0 bg-black opacity-50"
        style={{
          backgroundImage: `url(${background})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
      <div className="relative w-[95%] mx-auto bg-white rounded-[40px] border-2 border-black shadow-lg p-10 overflow-hidden">
        <motion.h2
          className="text-5xl font-bold text-center mb-12 font-gluten drop-shadow-md"
          style={{ color: "#121325" }}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          Frequently Asked Questions
        </motion.h2>
        <div className="space-y-8">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="bg-[#E8E8E8] p-6 rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 + index * 0.1, ease: "easeOut" }}
            >
              <button
                onClick={() => toggleQuestion(index)}
                className="flex items-center justify-between w-full text-2xl font-gluten font-bold"
                style={{ color: "#121325" }}
              >
                <span>{faq.question}</span>
                {openQuestion === index ? (
                  <motion.div
                    initial={{ rotate: 0 }}
                    animate={{ rotate: 180 }}
                    transition={{ duration: 0.3 }}
                  >
                    <FaChevronUp style={{ color: "#FEAC3A" }} />
                  </motion.div>
                ) : (
                  <motion.div
                    initial={{ rotate: 180 }}
                    animate={{ rotate: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <FaChevronDown style={{ color: "#FEAC3A" }} />
                  </motion.div>
                )}
              </button>
              <AnimatePresence>
                {openQuestion === index && (
                  <motion.div
                    className="mt-4 p-4 bg-[#D1D1DE] bg-opacity-90 text-gray-900 rounded-lg border-l-4 border-orange-400"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                  >
                    <p className="text-lg font-gluten">{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
