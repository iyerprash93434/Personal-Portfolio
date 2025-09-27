// src/components/sections/Skills.js
import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import {
  skillsData,
  totalExperience,
  projectsCompleted,
  technologiesUsed,
} from "../../data/skills";
import { ANIMATION_VARIANTS } from "../../utils/constants";

const SkillBar = ({ name, level, index }) => {
  const [isVisible, setIsVisible] = useState(false);
  const barRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), index * 100);
        }
      },
      { threshold: 0.5 }
    );

    if (barRef.current) {
      observer.observe(barRef.current);
    }

    return () => observer.disconnect();
  }, [index]);

  return (
    <div ref={barRef} className="mb-4">
      <div className="flex justify-between mb-2">
        <span className="text-sm font-medium text-gray-300">{name}</span>
        <span className="text-sm text-purple-400">{level}%</span>
      </div>
      <div className="w-full bg-gray-700/50 rounded-full h-2 overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full transition-all duration-1000 ease-out"
          style={{
            width: isVisible ? `${level}%` : "0%",
            transform: isVisible ? "translateX(0)" : "translateX(-100%)",
          }}
        ></div>
      </div>
    </div>
  );
};

const StatCard = ({ number, label, delay = 0 }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const animateCount = () => {
      const target = parseInt(number.replace(/\D/g, ""));
      const increment = target / 50;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          setCount(target);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, 30);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
            animateCount();
          }, delay);
        }
      },
      { threshold: 0.5 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, [delay, number]);

  return (
    <motion.div
      ref={cardRef}
      className="text-center p-6 bg-white/5 rounded-xl backdrop-blur-sm border border-white/10"
      initial={{ scale: 0.8, opacity: 0 }}
      animate={
        isVisible ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }
      }
      transition={{ duration: 0.6, delay: delay / 1000 }}
    >
      <div className="text-3xl font-bold text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text mb-2">
        {count}
        {number.replace(/\d/g, "")}
      </div>
      <p className="text-gray-400 text-sm">{label}</p>
    </motion.div>
  );
};

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <section id="skills" className="py-20 px-6 bg-black/20">
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
            Skills & Expertise
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and the technologies
            I work with
          </p>
        </motion.div>

        {/* Stats Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
          variants={ANIMATION_VARIANTS.staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <StatCard
            number={totalExperience}
            label="Years of Experience"
            delay={0}
          />
          <StatCard
            number={projectsCompleted}
            label="Projects Completed"
            delay={200}
          />
          <StatCard
            number={technologiesUsed}
            label="Technologies Mastered"
            delay={400}
          />
        </motion.div>

        {/* Skills Grid */}
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 mb-12">
          {skillsData.map((skillCategory, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              className="relative group"
              variants={ANIMATION_VARIANTS.fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.1 }}
            >
              <div className="bg-white/5 rounded-xl p-6 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 h-full">
                {/* Category Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div
                    className={`text-white p-3 rounded-lg bg-gradient-to-r ${skillCategory.color}`}
                  >
                    {skillCategory.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white">
                    {skillCategory.category}
                  </h3>
                </div>

                {/* Skills List */}
                <div className="space-y-4">
                  {skillCategory.items.map((skill, skillIndex) => (
                    <SkillBar
                      key={skillIndex}
                      name={skill.name}
                      level={skill.level}
                      index={skillIndex}
                    />
                  ))}
                </div>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-600/0 to-pink-600/0 group-hover:from-purple-600/10 group-hover:to-pink-600/10 transition-all duration-300 pointer-events-none"></div>
            </motion.div>
          ))}
        </div>

        {/* Interactive Skills Showcase */}
        <motion.div
          className="mt-16"
          variants={ANIMATION_VARIANTS.fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              Interactive Skills Explorer
            </h3>
            <p className="text-gray-400">
              Click on different categories to explore my skills in detail
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {skillsData.map((category, index) => (
              <button
                key={index}
                onClick={() => setActiveCategory(index)}
                className={`px-6 py-3 rounded-full transition-all duration-300 ${
                  activeCategory === index
                    ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white"
                    : "bg-white/10 text-gray-300 hover:bg-white/20"
                }`}
              >
                {category.category}
              </button>
            ))}
          </div>

          <motion.div
            key={activeCategory}
            className="bg-white/5 rounded-xl p-8 backdrop-blur-sm border border-white/10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div
                className={`text-white p-4 rounded-lg bg-gradient-to-r ${skillsData[activeCategory].color}`}
              >
                {skillsData[activeCategory].icon}
              </div>
              <div>
                <h4 className="text-2xl font-bold text-white">
                  {skillsData[activeCategory].category}
                </h4>
                <p className="text-gray-400">
                  My expertise in{" "}
                  {skillsData[activeCategory].category.toLowerCase()}
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {skillsData[activeCategory].items.map((skill, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-4 bg-white/5 rounded-lg border border-white/10"
                >
                  <span className="text-gray-300">{skill.name}</span>
                  <div className="flex items-center gap-2">
                    <div className="w-16 h-2 bg-gray-700 rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full bg-gradient-to-r ${skillsData[activeCategory].color}`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                    <span className="text-sm text-purple-400 font-medium">
                      {skill.level}%
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
