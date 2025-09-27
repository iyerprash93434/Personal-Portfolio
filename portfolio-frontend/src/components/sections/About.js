// src/components/sections/About.js
import React from "react";
import { motion } from "framer-motion";
import { MapPin, Mail, Phone, Code, Calendar, Award } from "lucide-react";
import { PERSONAL_INFO, ANIMATION_VARIANTS } from "../../utils/constants";

const About = () => {
  const stats = [
    {
      icon: <Code className="w-6 h-6" />,
      label: "Years Experience",
      value: PERSONAL_INFO.experience,
    },
    {
      icon: <Award className="w-6 h-6" />,
      label: "Projects Completed",
      value: PERSONAL_INFO.projectsCompleted,
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      label: "Happy Clients",
      value: PERSONAL_INFO.clientsSatisfied,
    },
  ];

  const personalDetails = [
    {
      icon: <MapPin className="w-4 h-4 text-purple-400" />,
      label: "Location",
      value: PERSONAL_INFO.location,
    },
    {
      icon: <Mail className="w-4 h-4 text-purple-400" />,
      label: "Email",
      value: PERSONAL_INFO.email,
    },
    {
      icon: <Phone className="w-4 h-4 text-purple-400" />,
      label: "Phone",
      value: PERSONAL_INFO.phone,
    },
    {
      icon: <Code className="w-4 h-4 text-purple-400" />,
      label: "Experience",
      value: PERSONAL_INFO.experience,
    },
  ];

  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          variants={ANIMATION_VARIANTS.fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Get to know more about my background, skills, and passion for web
            development
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Image */}
          <motion.div
            className="relative"
            variants={ANIMATION_VARIANTS.fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="relative">
              <img
                src={PERSONAL_INFO.aboutImage}
                alt="About me"
                className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/20 via-transparent to-pink-600/20 rounded-2xl"></div>

              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full blur-xl opacity-60 animate-float"></div>
              <div
                className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full blur-xl opacity-40 animate-float"
                style={{ animationDelay: "2s" }}
              ></div>
            </div>
          </motion.div>

          {/* Right Side - Content */}
          <motion.div
            className="space-y-8"
            variants={ANIMATION_VARIANTS.fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="space-y-6">
              <h3 className="text-2xl md:text-3xl font-bold text-white">
                Hi, I'm {PERSONAL_INFO.name.split(" ")[0]} 👋
              </h3>

              <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
                <p>
                  I'm a passionate Full Stack Developer with expertise in the
                  MERN stack. I love creating innovative web applications that
                  solve real-world problems and provide exceptional user
                  experiences.
                </p>
                <p>
                  With a strong foundation in both frontend and backend
                  technologies, I enjoy working on projects from conception to
                  deployment, ensuring high-quality, scalable solutions that
                  make a difference.
                </p>
                <p>
                  When I'm not coding, you can find me exploring new
                  technologies, contributing to open-source projects, or sharing
                  my knowledge through technical writing and mentoring.
                </p>
              </div>
            </div>

            {/* Personal Details Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {personalDetails.map((detail, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-3 p-4 bg-white/5 rounded-lg border border-white/10"
                  variants={ANIMATION_VARIANTS.fadeInUp}
                  transition={{ delay: index * 0.1 }}
                >
                  {detail.icon}
                  <div>
                    <p className="text-gray-400 text-sm">{detail.label}</p>
                    <p className="text-white font-medium">{detail.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center p-6 bg-white/5 rounded-xl backdrop-blur-sm border border-white/10"
                  variants={ANIMATION_VARIANTS.fadeInUp}
                  transition={{ delay: index * 0.2 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-purple-400 flex justify-center mb-3">
                    {stat.icon}
                  </div>
                  <div className="text-2xl font-bold text-white mb-1">
                    {stat.value}
                  </div>
                  <p className="text-gray-400 text-sm">{stat.label}</p>
                </motion.div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-medium px-8 py-3 rounded-lg transition-all transform hover:scale-105"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() =>
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Get In Touch
              </motion.button>
              <motion.button
                className="border border-purple-400 hover:bg-purple-400/10 text-white font-medium px-8 py-3 rounded-lg transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.open("/resume.pdf", "_blank")}
              >
                Download CV
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
