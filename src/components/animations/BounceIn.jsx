import { motion } from "framer-motion";

const BounceIn = ({ children, delay = 0, className }) => {
  return (
    <motion.div
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 10,
        delay,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default BounceIn;
