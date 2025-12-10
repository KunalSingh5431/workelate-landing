import { Card } from "antd";
import { motion } from "framer-motion";

const AnimatedCard = ({ children, style }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    whileHover={{
      scale: 1.03,          // 🔥 subtle zoom on hover
      y: -6,                // 🔥 lift effect
      boxShadow: "0 12px 30px rgba(0,0,0,0.35)",
    }}
    whileTap={{ scale: 0.98 }} // 🔥 press feedback
    style={{ borderRadius: 20 }}
  >
    <Card
      style={{
        borderRadius: 20,
        boxShadow: "0 6px 18px rgba(0,0,0,0.25)",
        background: "linear-gradient(135deg, #1a1a1a, #2d2d2d)",
        color: "#fff",
        transition: "all 0.3s ease",
        ...style,
      }}
      bodyStyle={{
        padding: 28,
        display: "flex",
        flexDirection: "column",
        gap: "12px",
      }}
    >
      {children}
    </Card>
  </motion.div>
);

export default AnimatedCard;
