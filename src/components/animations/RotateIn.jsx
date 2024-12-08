// src/animations/RotateIn.jsx
import { motion } from "framer-motion";

const RotateIn = ({ children, delay = 0, className }) => {
  return (
    <motion.div
      initial={{ rotate: -90, opacity: 0 }}
      animate={{ rotate: 0, opacity: 1 }}
      transition={{
        type: "spring",
        stiffness: 120,
        damping: 20,
        duration: 1.2,
        delay,
      }}
      whileHover={{ rotate: 10, transition: { yoyo: Infinity, duration: 0.3 } }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default RotateIn;
