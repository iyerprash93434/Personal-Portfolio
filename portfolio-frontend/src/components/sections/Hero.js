// src/components/sections/Hero.js
import React from "react";
import { ChevronDown, Github, Linkedin, Mail, Download } from "lucide-react";
import { motion } from "framer-motion";
import Button from "../ui/Button";
import { scrollToSection } from "../../utils/helpers";
import { PERSONAL_INFO, SOCIAL_LINKS } from "../../utils/constants";

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-6 relative"
    >
      {/* Background Animation */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl animate-float"></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <motion.div
        className="text-center max-w-4xl mx-auto relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Profile Image */}
        <motion.div variants={itemVariants} className="mb-8">
          <img
            src={PERSONAL_INFO.profileImage}
            alt="Profile"
            className="w-32 h-32 rounded-full mx-auto mb-6 border-4 border-purple-400/50 shadow-xl object-cover hover:scale-105 transition-transform duration-300"
          />
        </motion.div>

        {/* Name */}
        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent"
        >
          {PERSONAL_INFO.name}
        </motion.h1>

        {/* Title */}
        <motion.p
          variants={itemVariants}
          className="text-xl md:text-2xl text-gray-300 mb-8"
        >
          {PERSONAL_INFO.title}
        </motion.p>

        {/* Description */}
        <motion.p
          variants={itemVariants}
          className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed"
        >
          {PERSONAL_INFO.description}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
        >
          <Button
            onClick={() => scrollToSection("contact")}
            variant="primary"
            size="lg"
          >
            Get In Touch
          </Button>
          <Button
            onClick={() => window.open("/resume.pdf", "_blank")}
            variant="secondary"
            size="lg"
            icon={<Download className="w-4 h-4" />}
          >
            Download CV
          </Button>
        </motion.div>

        {/* Social Links */}
        <motion.div
          variants={itemVariants}
          className="flex justify-center space-x-6 mb-16"
        >
          <a
            href={SOCIAL_LINKS.github}
            className="text-gray-400 hover:text-purple-400 transition-colors transform hover:scale-110"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <Github className="w-6 h-6" />
          </a>
          <a
            href={SOCIAL_LINKS.linkedin}
            className="text-gray-400 hover:text-purple-400 transition-colors transform hover:scale-110"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            className="text-gray-400 hover:text-purple-400 transition-colors transform hover:scale-110"
            aria-label="Email"
          >
            <Mail className="w-6 h-6" />
          </a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          variants={itemVariants}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer"
          onClick={() => scrollToSection("about")}
        >
          <ChevronDown className="w-6 h-6 text-purple-400" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
