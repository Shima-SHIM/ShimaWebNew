// src/animations/FadeDown.jsx
import { motion } from "framer-motion";

const FadeDown = ({ children, delay = 0, className }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99],
        delay,
      }}
      whileHover={{ y: -10, transition: { yoyo: Infinity, duration: 0.4 } }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default FadeDown;
