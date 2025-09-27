// src/components/sections/Experience.js
import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin, ExternalLink } from "lucide-react";
import { ANIMATION_VARIANTS } from "../../utils/constants";

const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: "Full Stack Developer",
      company: "Tech Solutions Inc.",
      location: "Mumbai, India",
      period: "2023 - Present",
      type: "Full-time",
      description:
        "Developing and maintaining web applications using MERN stack. Built responsive interfaces and RESTful APIs for various client projects.",
      achievements: [
        "Led development of 5+ major web applications",
        "Improved application performance by 40%",
        "Mentored 3 junior developers",
        "Implemented CI/CD pipelines reducing deployment time by 60%",
      ],
      technologies: ["React", "Node.js", "MongoDB", "Express", "AWS"],
      companyUrl: "https://techsolutions.com",
    },
    {
      id: 2,
      title: "Frontend Developer",
      company: "Digital Agency",
      location: "Remote",
      period: "2022 - 2023",
      type: "Full-time",
      description:
        "Created interactive user interfaces with React.js and implemented responsive designs using modern CSS frameworks.",
      achievements: [
        "Developed 15+ responsive web applications",
        "Increased user engagement by 35%",
        "Collaborated with UX/UI designers on 20+ projects",
        "Implemented accessibility standards (WCAG 2.1)",
      ],
      technologies: ["React", "TypeScript", "Tailwind CSS", "Next.js"],
      companyUrl: "https://digitalagency.com",
    },
    {
      id: 3,
      title: "Junior Developer",
      company: "StartUp Hub",
      location: "Pune, India",
      period: "2021 - 2022",
      type: "Full-time",
      description:
        "Collaborated on multiple projects, gained experience in version control, and contributed to both frontend and backend development.",
      achievements: [
        "Contributed to 10+ open-source projects",
        "Fixed 50+ bugs and implemented new features",
        "Learned modern development practices",
        "Participated in code reviews and sprint planning",
      ],
      technologies: ["JavaScript", "React", "Node.js", "Git"],
      companyUrl: "https://startuphub.com",
    },
    {
      id: 4,
      title: "Web Development Intern",
      company: "Creative Studio",
      location: "Mumbai, India",
      period: "2020 - 2021",
      type: "Internship",
      description:
        "Assisted in building client websites and gained hands-on experience with web technologies and project workflows.",
      achievements: [
        "Built 8+ client websites from scratch",
        "Learned industry best practices",
        "Worked with cross-functional teams",
        "Gained experience in project management",
      ],
      technologies: ["HTML", "CSS", "JavaScript", "WordPress"],
      companyUrl: "https://creativestudio.com",
    },
  ];

  const education = [
    {
      degree: "Bachelor of Computer Science",
      institution: "University of Mumbai",
      period: "2017 - 2021",
      description:
        "Graduated with First Class Honours. Specialized in Software Engineering and Web Technologies.",
      achievements: [
        "CGPA: 8.5/10",
        "President of Computer Science Club",
        "Winner of University Hackathon 2020",
        "Published research paper on web security",
      ],
    },
  ];

  const ExperienceCard = ({ experience, index }) => (
    <motion.div
      className="relative"
      variants={ANIMATION_VARIANTS.fadeInUp}
      transition={{ delay: index * 0.2 }}
    >
      {/* Timeline connector */}
      <div className="absolute left-6 top-16 w-0.5 h-full bg-gradient-to-b from-purple-400 to-transparent"></div>

      {/* Timeline dot */}
      <div className="absolute left-4 top-8 w-4 h-4 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full border-4 border-gray-900"></div>

      {/* Content card */}
      <div className="ml-16 mb-12">
        <div className="bg-white/5 rounded-xl p-6 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
            <div>
              <h3 className="text-xl font-semibold text-white mb-1">
                {experience.title}
              </h3>
              <div className="flex items-center gap-2 text-purple-400 mb-2">
                <Briefcase className="w-4 h-4" />
                <a
                  href={experience.companyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-purple-300 transition-colors flex items-center gap-1"
                >
                  {experience.company}
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
            <div className="flex flex-col md:items-end text-sm text-gray-400">
              <div className="flex items-center gap-1 mb-1">
                <Calendar className="w-4 h-4" />
                <span>{experience.period}</span>
              </div>
              <div className="flex items-center gap-1">
                <MapPin className="w-4 h-4" />
                <span>{experience.location}</span>
              </div>
              <span className="mt-1 px-2 py-1 bg-purple-500/20 text-purple-300 rounded-full text-xs">
                {experience.type}
              </span>
            </div>
          </div>

          {/* Description */}
          <p className="text-gray-300 mb-4">{experience.description}</p>

          {/* Achievements */}
          <div className="mb-4">
            <h4 className="text-white font-medium mb-2">Key Achievements:</h4>
            <ul className="space-y-1">
              {experience.achievements.map((achievement, idx) => (
                <li
                  key={idx}
                  className="text-gray-300 text-sm flex items-start gap-2"
                >
                  <div className="w-1.5 h-1.5 bg-purple-400 rounded-full flex-shrink-0 mt-2"></div>
                  {achievement}
                </li>
              ))}
            </ul>
          </div>

          {/* Technologies */}
          <div>
            <h4 className="text-white font-medium mb-2">Technologies:</h4>
            <div className="flex flex-wrap gap-2">
              {experience.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-xs"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );

  return (
    <section id="experience" className="py-20 px-6 bg-black/20">
      <div className="container mx-auto max-w-4xl">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          variants={ANIMATION_VARIANTS.fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Experience & Education
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            My professional journey and educational background in software
            development
          </p>
        </motion.div>

        {/* Experience Timeline */}
        <div className="mb-16">
          <motion.h3
            className="text-2xl font-bold text-white mb-8 text-center"
            variants={ANIMATION_VARIANTS.fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            Professional Experience
          </motion.h3>

          <motion.div
            className="relative"
            variants={ANIMATION_VARIANTS.staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {experiences.map((experience, index) => (
              <ExperienceCard
                key={experience.id}
                experience={experience}
                index={index}
              />
            ))}
          </motion.div>
        </div>

        {/* Education */}
        <motion.div
          variants={ANIMATION_VARIANTS.fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-white mb-8 text-center">
            Education
          </h3>

          {education.map((edu, index) => (
            <div
              key={index}
              className="bg-white/5 rounded-xl p-6 backdrop-blur-sm border border-white/10"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h4 className="text-xl font-semibold text-white mb-1">
                    {edu.degree}
                  </h4>
                  <p className="text-purple-400">{edu.institution}</p>
                </div>
                <div className="flex items-center gap-1 text-sm text-gray-400">
                  <Calendar className="w-4 h-4" />
                  <span>{edu.period}</span>
                </div>
              </div>

              <p className="text-gray-300 mb-4">{edu.description}</p>

              <div>
                <h5 className="text-white font-medium mb-2">Achievements:</h5>
                <ul className="space-y-1">
                  {edu.achievements.map((achievement, idx) => (
                    <li
                      key={idx}
                      className="text-gray-300 text-sm flex items-start gap-2"
                    >
                      <div className="w-1.5 h-1.5 bg-purple-400 rounded-full flex-shrink-0 mt-2"></div>
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
