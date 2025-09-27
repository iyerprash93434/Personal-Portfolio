// src/data/experience.js
export const experienceData = [
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

export const educationData = [
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

export const certificationsData = [
  {
    id: 1,
    name: "Full Stack Web Development",
    issuer: "Industry Certification",
    date: "2023",
    credentialId: "FS-2023-001",
    skills: ["React", "Node.js", "MongoDB", "Express.js"],
  },
  {
    id: 2,
    name: "Angular Development",
    issuer: "Google Developers",
    date: "2023",
    credentialId: "ANG-2023-002",
    skills: ["Angular", "TypeScript", "RxJS", "Angular CLI"],
  },
  {
    id: 3,
    name: "Security Compliance",
    issuer: "InfoPercept Training",
    date: "2023",
    credentialId: "SEC-2023-003",
    skills: ["Security Assessment", "Vulnerability Management", "Compliance"],
  },
];

// Professional Statistics
export const professionalStats = {
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
