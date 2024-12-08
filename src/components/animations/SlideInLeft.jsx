// src/animations/SlideInLeft.jsx
import { motion } from "framer-motion";

const SlideInLeft = ({ children, delay = 0, className }) => {
  return (
    <motion.div
      initial={{ x: -200, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 1,
        delay,
      }}
      whileHover={{
        x: -10,
        transition: { yoyo: Infinity, duration: 0.5 },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default SlideInLeft;
