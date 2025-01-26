import React from "react";
import { Button } from "react-bootstrap";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import "./HeroSection.css";

// Import your image
import heroImage from "../../../assets/images/banner.png"; // Adjust the path as needed

const HeroSection = () => (
  <div
    className="hero-section text-center py-5"
    style={{
      background: `linear-gradient(135deg, rgba(147, 73, 226, 0.7) 0%, rgba(156, 182, 225, 0.7) 100%), url(${heroImage})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      color: "#fff",
      position: "relative",
      overflow: "hidden",
    }}
  >
    {/* Decorative Circles */}
    <div
      style={{
        position: "absolute",
        top: "-100px",
        left: "-100px",
        width: "300px",
        height: "300px",
        background: "rgba(255, 255, 255, 0.1)",
        borderRadius: "50%",
        zIndex: 1,
      }}
    ></div>
    <div
      style={{
        position: "absolute",
        bottom: "-100px",
        right: "-100px",
        width: "400px",
        height: "400px",
        background: "rgba(255, 255, 255, 0.1)",
        borderRadius: "50%",
        zIndex: 1,
      }}
    ></div>

    {/* Main Content */}
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      style={{ position: "relative", zIndex: 2 }}
    >
      <h1 className="display-4 fw-bold mb-3" style={{ fontSize: "3rem" }}>
        Automate Your Social Media Effortlessly
      </h1>
      <p className="lead mb-4" style={{ fontSize: "1.2rem" }}>
        Save time and grow your online presence with our AI-driven automation
        tools.
      </p>
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <Button
          variant="light"
          size="lg"
          style={{
            backgroundColor: "#fff",
            color: "#2575fc",
            border: "none",
            padding: "0.75rem 2rem",
            borderRadius: "50px",
            fontWeight: "bold",
          }}
        >
          Get Started <FaArrowRight className="ms-2" />
        </Button>
      </motion.div>
    </motion.div>

    {/* Subtle Animation */}
    <motion.div
      className="floating-element"
      style={{
        position: "absolute",
        bottom: "20%",
        left: "50%",
        transform: "translateX(-50%)",
        width: "80px",
        height: "80px",
        background: "rgba(255, 255, 255, 0.2)",
        borderRadius: "50%",
        zIndex: 1,
      }}
      animate={{ y: [0, -20, 0] }}
      transition={{ duration: 4, repeat: Infinity, repeatType: "reverse" }}
    ></motion.div>
  </div>
);

export default HeroSection;
