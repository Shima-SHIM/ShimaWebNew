// src/animations/ZoomIn.jsx
import { motion } from "framer-motion";

const ZoomIn = ({ children, delay = 0, className }) => {
  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{
        duration: 1,
        ease: [0.6, -0.05, 0.01, 0.99],
        delay,
      }}
      whileHover={{
        scale: 1.05,
        transition: { yoyo: Infinity, duration: 0.3 },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default ZoomIn;
