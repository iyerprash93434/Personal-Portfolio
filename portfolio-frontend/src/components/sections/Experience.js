// src/components/sections/Experience.js
import React from "react";
import { motion } from "framer-motion";
import {
  Briefcase,
  Calendar,
  MapPin,
  ExternalLink,
  GraduationCap,
  Award,
  TrendingUp,
} from "lucide-react";
import { ANIMATION_VARIANTS } from "../../utils/constants";

const Experience = () => {
  // Experience data - you can move this to a separate data file later
  const experienceData = [
    {
      id: 1,
      title: "Senior Associate",
      company: "SBI Life Insurance Co. Ltd",
      location: "Navi Mumbai, Maharashtra",
      period: "Jul 2023 – Present",
      type: "Full-time",
      description:
        "Leading development of enterprise-level reporting platforms and automation tools, significantly improving business processes and reducing manual effort across multiple departments.",
      achievements: [
        "Built and deployed AARAMNxt reporting platform, reducing report generation time from 3 days to 3 hours",
        "Automated Excel-to-JSON pipeline, cutting manual processing time by 80%",
        "Designed Angular frontend for FMT Underwriting Service, improving assessment workflows",
        "Developed Smart Connect 2.0 Dashboard enabling 100+ managers to track KPIs in real time",
        "Collaborated with InfoPercept team to resolve VA SCD & AppSec EPT vulnerabilities, ensuring compliance",
        "Implemented security compliance measures and vulnerability assessments",
      ],
      technologies: [
        "Angular",
        "Node.js",
        "MongoDB",
        "Express.js",
        "JavaScript",
        "HTML/CSS",
        "REST APIs",
        "Excel Automation",
      ],
      companyUrl: "https://www.sbilife.co.in",
      projects: [
        {
          name: "AARAMNxt Reporting Platform",
          description:
            "Enterprise reporting system that revolutionized report generation process",
          impact: "90% reduction in report generation time (3 days to 3 hours)",
        },
        {
          name: "Smart Connect 2.0 Dashboard",
          description: "Real-time KPI tracking dashboard for management",
          impact:
            "Enabled 100+ managers to track performance metrics in real-time",
        },
        {
          name: "Excel-to-JSON Automation Pipeline",
          description: "Automated data processing system",
          impact: "80% reduction in manual processing time",
        },
      ],
    },
    {
      id: 2,
      title: "Junior Software Developer (Intern)",
      company: "Textronics Design System",
      location: "Remote",
      period: "Jan 2023 – Jun 2023",
      type: "Internship",
      description:
        "Enhanced e-commerce applications with focus on performance optimization and user experience improvements. Gained hands-on experience in frontend development and workflow optimization.",
      achievements: [
        "Enhanced TryOn e-commerce application with new features and UI improvements",
        "Improved application load time and overall user experience",
        "Debugged and optimized workflows using modern web technologies",
        "Collaborated with senior developers on feature development",
        "Implemented responsive design principles for better mobile experience",
        "Participated in code reviews and learned industry best practices",
      ],
      technologies: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "jQuery",
        "Responsive Design",
        "Performance Optimization",
      ],
      companyUrl: "https://textronicsdesign.com",
      projects: [
        {
          name: "TryOn E-commerce Enhancement",
          description:
            "UI/UX improvements and feature additions to e-commerce platform",
          impact: "Significant improvement in load time and user experience",
        },
      ],
    },
  ];

  const educationData = [
    {
      id: 1,
      degree: "Master of Computer Applications (M.C.A.)",
      institution: "SIES College of Management Studies",
      location: "Navi Mumbai, Maharashtra",
      period: "2021 – 2023",
      percentage: "70.04%",
      description:
        "Specialized in Computer Applications with focus on software development, database management, and system design.",
      achievements: [
        "Completed with 70.04% aggregate score",
        "Specialized in Full-Stack Development",
        "Worked on multiple industry-relevant projects",
        "Gained expertise in modern web technologies",
        "Participated in technical workshops and seminars",
      ],
      relevantCourses: [
        "Data Structures and Algorithms",
        "Database Management Systems",
        "Web Technologies",
        "Software Engineering",
        "Object-Oriented Programming",
        "System Analysis and Design",
      ],
    },
    {
      id: 2,
      degree: "Bachelor of Science in Computer Science (B.Sc.)",
      institution: "Saket College of Arts, Science and Commerce",
      location: "Kalyan, Maharashtra",
      period: "2018 – 2021",
      percentage: "8.58/10 CGPA",
      description:
        "Foundation in computer science principles with strong academic performance and practical programming skills.",
      achievements: [
        "Graduated with 8.58/10 CGPA",
        "Strong foundation in programming fundamentals",
        "Active participation in coding competitions",
        "Consistent academic excellence throughout the program",
        "Leadership roles in technical events",
      ],
      relevantCourses: [
        "Programming in C/C++",
        "Java Programming",
        "Database Systems",
        "Computer Networks",
        "Operating Systems",
        "Mathematics for Computer Science",
      ],
    },
  ];

  const professionalStats = {
    totalExperience: "2+ Years",
    projectsCompleted: "15+",
    companiesWorked: 2,
    technologiesMastered: 15,
    performanceImprovements: [
      {
        metric: "Report Generation Time",
        improvement: "90% reduction",
        from: "3 days",
        to: "3 hours",
      },
      {
        metric: "Manual Processing Time",
        improvement: "80% reduction",
        description: "Excel-to-JSON automation pipeline",
      },
      {
        metric: "Manager Productivity",
        improvement: "100+ managers",
        description: "Real-time KPI tracking enabled",
      },
    ],
  };

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

          {/* Key Projects (if available) */}
          {experience.projects && (
            <div className="mb-4">
              <h4 className="text-white font-medium mb-2">Key Projects:</h4>
              <div className="space-y-2">
                {experience.projects.map((project, idx) => (
                  <div
                    key={idx}
                    className="bg-white/5 rounded-lg p-3 border border-white/10"
                  >
                    <div className="font-medium text-purple-300 mb-1">
                      {project.name}
                    </div>
                    <div className="text-sm text-gray-300 mb-1">
                      {project.description}
                    </div>
                    {project.impact && (
                      <div className="text-xs text-green-400 flex items-center gap-1">
                        <TrendingUp className="w-3 h-3" />
                        {project.impact}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

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

  const EducationCard = ({ education, index }) => (
    <motion.div
      className="bg-white/5 rounded-xl p-6 backdrop-blur-sm border border-white/10 mb-6"
      variants={ANIMATION_VARIANTS.fadeInUp}
      transition={{ delay: index * 0.1 }}
    >
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
        <div className="flex items-center gap-3 mb-2 md:mb-0">
          <div className="p-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg">
            <GraduationCap className="w-5 h-5 text-white" />
          </div>
          <div>
            <h4 className="text-xl font-semibold text-white">
              {education.degree}
            </h4>
            <p className="text-purple-400">{education.institution}</p>
            <p className="text-gray-400 text-sm">{education.location}</p>
          </div>
        </div>
        <div className="text-right">
          <div className="flex items-center gap-1 text-sm text-gray-400 mb-1">
            <Calendar className="w-4 h-4" />
            <span>{education.period}</span>
          </div>
          <div className="text-green-400 font-medium">
            {education.percentage}
          </div>
        </div>
      </div>

      <p className="text-gray-300 mb-4">{education.description}</p>

      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <h5 className="text-white font-medium mb-2">Achievements:</h5>
          <ul className="space-y-1">
            {education.achievements.map((achievement, idx) => (
              <li
                key={idx}
                className="text-gray-300 text-sm flex items-start gap-2"
              >
                <Award className="w-3 h-3 text-yellow-400 flex-shrink-0 mt-1" />
                {achievement}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h5 className="text-white font-medium mb-2">Relevant Courses:</h5>
          <div className="flex flex-wrap gap-1">
            {education.relevantCourses.map((course, idx) => (
              <span
                key={idx}
                className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs"
              >
                {course}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );

  return (
    <section id="experience" className="py-20 px-6 bg-black/20">
      <div className="container mx-auto max-w-6xl">
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
            My professional journey in software development and academic
            background
          </p>
        </motion.div>

        {/* Professional Stats */}
        <motion.div
          className="grid md:grid-cols-3 gap-6 mb-16"
          variants={ANIMATION_VARIANTS.staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="text-center p-6 bg-white/5 rounded-xl backdrop-blur-sm border border-white/10">
            <div className="text-3xl font-bold text-purple-400 mb-2">
              {professionalStats.totalExperience}
            </div>
            <p className="text-gray-400">Professional Experience</p>
          </div>
          <div className="text-center p-6 bg-white/5 rounded-xl backdrop-blur-sm border border-white/10">
            <div className="text-3xl font-bold text-pink-400 mb-2">
              {professionalStats.projectsCompleted}
            </div>
            <p className="text-gray-400">Projects Completed</p>
          </div>
          <div className="text-center p-6 bg-white/5 rounded-xl backdrop-blur-sm border border-white/10">
            <div className="text-3xl font-bold text-blue-400 mb-2">
              {professionalStats.companiesWorked}
            </div>
            <p className="text-gray-400">Companies Worked</p>
          </div>
        </motion.div>

        {/* Performance Improvements */}
        <motion.div
          className="mb-16"
          variants={ANIMATION_VARIANTS.fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-white mb-8 text-center">
            Key Performance Improvements
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {professionalStats.performanceImprovements.map(
              (improvement, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-xl p-6 border border-purple-400/20"
                >
                  <div className="text-2xl font-bold text-white mb-2">
                    {improvement.improvement}
                  </div>
                  <div className="text-purple-400 font-medium mb-2">
                    {improvement.metric}
                  </div>
                  <p className="text-gray-300 text-sm">
                    {improvement.description}
                    {improvement.from && improvement.to && (
                      <span className="block mt-1 text-xs">
                        From {improvement.from} to {improvement.to}
                      </span>
                    )}
                  </p>
                </div>
              )
            )}
          </div>
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
            {experienceData.map((experience, index) => (
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

          <motion.div
            variants={ANIMATION_VARIANTS.staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {educationData.map((education, index) => (
              <EducationCard
                key={education.id}
                education={education}
                index={index}
              />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
