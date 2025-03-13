import React, { useState } from "react";
import "../styles/HeroSection.css";
import { FaBars, FaTimes } from "react-icons/fa";
import { BiDownload } from "react-icons/bi";
import { AiOutlineArrowUp } from "react-icons/ai";
import { animateScroll as scroll } from "react-scroll";
import { motion } from "framer-motion";
import CV from "../data/CV.pdf";
import videoBg from "../videos/background-video.mp4"; // Import your MP4 file

const HeroSection = ({ nav, handleNav }) => {
  const scrollToTop = () => {
    scroll.scrollToTop({ smooth: "linear" });
  };

  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    setVisible(scrolled > 300);
  };

  window.addEventListener("scroll", toggleVisible);

  const heroVariants = {
    hidden: { opacity: 0, y: "-50%" },
    visible: { opacity: 1, y: 0, transition: { duration: 1.4 } },
  };

  const contactVariants = {
    hidden: { opacity: 0, x: "-50%" },
    visible: { opacity: 1, x: 0, transition: { duration: 1.4 } },
  };

  const menuVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      scale: [1, 1.2, 1.5, 1.2, 1],
      rotate: [0, 0, 360, 360, 360],
      borderRadius: ["50%", "50%", "50%", "50%", "50%"],
      transition: { duration: 1 },
    },
  };

  return (
    <div className="hero-section" name="home" id="home">
      {/* Background Video */}
      <video autoPlay loop muted playsInline className="video-bg">
        <source src={videoBg} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="hero-overlay"></div>

      {/* Menu Icon */}
      <motion.div
        variants={menuVariants}
        initial="hidden"
        whileInView="visible"
        onClick={handleNav}
        className="menu-icon"
      >
        {nav ? <FaTimes /> : <FaBars />}
      </motion.div>

      {/* Scroll to Top Button */}
      <motion.div
        variants={heroVariants}
        initial="hidden"
        whileInView="visible"
        className={visible ? "to-top-icon show" : "to-top-icon hide"}
        onClick={scrollToTop}
      >
        <AiOutlineArrowUp />
      </motion.div>

      {/* Hero Content */}
      <motion.div
        variants={heroVariants}
        initial="hidden"
        whileInView="visible"
        className="hero-content"
      >
        <p className="hero-intro">
          <span></span> <span>Ariyadas Bathushan</span>
        </p>
        <p className="hero-desc">
          I'm a <span className="hero-desc-sub">Software Engineering Undergraduate.</span>
        </p>
      </motion.div>

      {/* Download CV Button */}
      <motion.span variants={contactVariants} initial="hidden" whileInView="visible">
        <a href={CV} download="Ariyadas Bathushan CV" className="hero-contact">
          Download CV <BiDownload className="cv-icon" />
        </a>
      </motion.span>
    </div>
  );
};

export default HeroSection;
