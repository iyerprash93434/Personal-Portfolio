// src/data/skills.js
import {
  Code,
  Database,
  Server,
  Smartphone,
  Globe,
  Palette,
  Shield,
  Zap,
} from "lucide-react";

export const skillsData = [
  {
    category: "Frontend",
    icon: <Code className="w-6 h-6" />,
    color: "from-blue-500 to-cyan-500",
    items: [
      { name: "React.js", level: 90 },
      { name: "JavaScript (ES6+)", level: 88 },
      { name: "HTML5 & CSS3", level: 92 },
      { name: "Tailwind CSS", level: 85 },
      { name: "Bootstrap", level: 80 },
      { name: "TypeScript", level: 75 },
    ],
  },
  {
    category: "Backend",
    icon: <Server className="w-6 h-6" />,
    color: "from-green-500 to-emerald-500",
    items: [
      { name: "Node.js", level: 85 },
      { name: "Express.js", level: 88 },
      { name: "RESTful APIs", level: 90 },
      { name: "JWT Authentication", level: 82 },
      { name: "Socket.io", level: 70 },
      { name: "Microservices", level: 65 },
    ],
  },
  {
    category: "Database",
    icon: <Database className="w-6 h-6" />,
    color: "from-purple-500 to-pink-500",
    items: [
      { name: "MongoDB", level: 88 },
      { name: "MySQL", level: 82 },
      { name: "PostgreSQL", level: 75 },
      { name: "Firebase", level: 78 },
      { name: "Redis", level: 68 },
      { name: "Mongoose ODM", level: 85 },
    ],
  },
  {
    category: "Tools & Others",
    icon: <Smartphone className="w-6 h-6" />,
    color: "from-orange-500 to-red-500",
    items: [
      { name: "Git & GitHub", level: 92 },
      { name: "VS Code", level: 88 },
      { name: "Postman", level: 85 },
      { name: "Docker", level: 70 },
      { name: "AWS Basics", level: 65 },
      { name: "Figma", level: 75 },
    ],
  },
  {
    category: "Web Technologies",
    icon: <Globe className="w-6 h-6" />,
    color: "from-indigo-500 to-purple-500",
    items: [
      { name: "Responsive Design", level: 90 },
      { name: "PWA Development", level: 75 },
      { name: "SEO Optimization", level: 80 },
      { name: "Web Performance", level: 78 },
      { name: "Cross-browser Testing", level: 82 },
      { name: "Accessibility", level: 75 },
    ],
  },
  {
    category: "Design & UI/UX",
    icon: <Palette className="w-6 h-6" />,
    color: "from-pink-500 to-rose-500",
    items: [
      { name: "UI/UX Principles", level: 80 },
      { name: "Wireframing", level: 75 },
      { name: "Prototyping", level: 70 },
      { name: "Color Theory", level: 78 },
      { name: "Typography", level: 72 },
      { name: "User Research", level: 68 },
    ],
  },
  {
    category: "Security & Testing",
    icon: <Shield className="w-6 h-6" />,
    color: "from-teal-500 to-cyan-500",
    items: [
      { name: "Unit Testing", level: 75 },
      { name: "Integration Testing", level: 70 },
      { name: "Web Security", level: 72 },
      { name: "OWASP Guidelines", level: 68 },
      { name: "Data Validation", level: 82 },
      { name: "Error Handling", level: 85 },
    ],
  },
  {
    category: "Performance",
    icon: <Zap className="w-6 h-6" />,
    color: "from-yellow-500 to-orange-500",
    items: [
      { name: "Code Optimization", level: 82 },
      { name: "Bundle Optimization", level: 75 },
      { name: "Image Optimization", level: 80 },
      { name: "Caching Strategies", level: 70 },
      { name: "Lazy Loading", level: 78 },
      { name: "Memory Management", level: 72 },
    ],
  },
];

export const totalExperience = "3+ Years";
export const projectsCompleted = "25+";
export const technologiesUsed = "20+";
