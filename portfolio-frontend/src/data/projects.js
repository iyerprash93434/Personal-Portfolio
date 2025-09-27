// src/data/projects.js
export const projectsData = [
  {
    id: 1,
    title: "E-Commerce Platform",
    shortDescription:
      "Full-stack e-commerce application with React frontend, Node.js backend, and MongoDB database.",
    fullDescription:
      "A comprehensive e-commerce platform featuring user authentication, product catalog, shopping cart, payment integration with Stripe, order management, and admin dashboard. Built with modern web technologies and following best practices for security and performance.",
    technologies: [
      "React",
      "Node.js",
      "MongoDB",
      "Express",
      "Stripe API",
      "JWT",
      "Tailwind CSS",
    ],
    category: "Full Stack",
    status: "Completed",
    githubUrl: "https://github.com/yourusername/ecommerce-platform",
    liveUrl: "https://your-ecommerce-demo.netlify.app",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
    features: [
      "User Authentication & Authorization",
      "Product Catalog with Search & Filters",
      "Shopping Cart & Wishlist",
      "Secure Payment Processing",
      "Order Tracking & History",
      "Admin Dashboard",
      "Responsive Design",
      "RESTful API",
    ],
    challenges: [
      "Implementing secure payment processing",
      "Optimizing database queries for performance",
      "Building real-time inventory management",
    ],
    learnings: [
      "Advanced React state management",
      "Payment gateway integration",
      "Database optimization techniques",
    ],
    duration: "3 months",
    role: "Full Stack Developer",
  },
  {
    id: 2,
    title: "Task Management App",
    shortDescription:
      "Collaborative task management tool with real-time updates and user authentication.",
    fullDescription:
      "A modern task management application that enables teams to collaborate effectively. Features include real-time updates using Socket.io, drag-and-drop functionality, team collaboration, project management, and detailed analytics dashboard.",
    technologies: [
      "React",
      "Node.js",
      "Socket.io",
      "MongoDB",
      "Express",
      "JWT",
      "Material-UI",
    ],
    category: "Web Application",
    status: "Completed",
    githubUrl: "https://github.com/yourusername/task-management",
    liveUrl: "https://your-taskapp-demo.netlify.app",
    image:
      "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
    features: [
      "Real-time Task Updates",
      "Drag & Drop Interface",
      "Team Collaboration",
      "Project Management",
      "Task Categories & Labels",
      "Due Date Reminders",
      "Progress Tracking",
      "Analytics Dashboard",
    ],
    challenges: [
      "Implementing real-time synchronization",
      "Optimizing drag-and-drop performance",
      "Managing complex state updates",
    ],
    learnings: [
      "WebSocket implementation",
      "Complex React state management",
      "Real-time data synchronization",
    ],
    duration: "2 months",
    role: "Frontend Developer",
  },
  {
    id: 3,
    title: "Weather Dashboard",
    shortDescription:
      "Interactive weather application with location-based forecasts and data visualization.",
    fullDescription:
      "A comprehensive weather dashboard that provides current weather conditions, 7-day forecasts, interactive maps, and detailed weather analytics. Features geolocation services, multiple city tracking, and beautiful data visualizations.",
    technologies: [
      "JavaScript",
      "Chart.js",
      "OpenWeather API",
      "Mapbox GL",
      "CSS3",
      "HTML5",
    ],
    category: "Frontend",
    status: "Completed",
    githubUrl: "https://github.com/yourusername/weather-dashboard",
    liveUrl: "https://your-weather-demo.netlify.app",
    image:
      "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=400&fit=crop",
    features: [
      "Current Weather Conditions",
      "7-Day Weather Forecast",
      "Interactive Weather Maps",
      "Geolocation Services",
      "Multiple City Tracking",
      "Weather Alerts",
      "Data Visualization",
      "Responsive Design",
    ],
    challenges: [
      "Handling API rate limits",
      "Creating smooth animations",
      "Implementing geolocation accuracy",
    ],
    learnings: [
      "API integration best practices",
      "Data visualization techniques",
      "Progressive Web App features",
    ],
    duration: "1 month",
    role: "Frontend Developer",
  },
  {
    id: 4,
    title: "Social Media Dashboard",
    shortDescription:
      "Real-time social media analytics dashboard with data visualization and reporting.",
    fullDescription:
      "A comprehensive social media management dashboard that aggregates data from multiple platforms, provides real-time analytics, content scheduling, and detailed reporting. Built for social media managers and marketers.",
    technologies: [
      "React",
      "Node.js",
      "D3.js",
      "MongoDB",
      "Express",
      "Social Media APIs",
    ],
    category: "Full Stack",
    status: "In Progress",
    githubUrl: "https://github.com/yourusername/social-dashboard",
    liveUrl: "https://your-social-demo.netlify.app",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
    features: [
      "Multi-platform Integration",
      "Real-time Analytics",
      "Content Scheduling",
      "Performance Metrics",
      "Custom Reports",
      "Team Collaboration",
      "Data Export",
      "Automated Insights",
    ],
    challenges: [
      "Integrating multiple APIs",
      "Real-time data processing",
      "Complex data visualization",
    ],
    learnings: [
      "Advanced data visualization",
      "API rate limiting strategies",
      "Real-time dashboard architecture",
    ],
    duration: "4 months",
    role: "Full Stack Developer",
  },
  {
    id: 5,
    title: "Restaurant Ordering System",
    shortDescription:
      "Digital menu and ordering system for restaurants with QR code integration.",
    fullDescription:
      "A complete digital restaurant solution featuring QR code menu scanning, online ordering, payment processing, kitchen management system, and customer feedback. Designed to modernize restaurant operations.",
    technologies: [
      "React",
      "Node.js",
      "MongoDB",
      "Stripe",
      "QR Code",
      "Socket.io",
    ],
    category: "Full Stack",
    status: "Completed",
    githubUrl: "https://github.com/yourusername/restaurant-ordering",
    liveUrl: "https://your-restaurant-demo.netlify.app",
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edae616d1?w=600&h=400&fit=crop",
    features: [
      "QR Code Menu Scanning",
      "Online Ordering System",
      "Payment Processing",
      "Kitchen Management",
      "Real-time Order Tracking",
      "Customer Feedback",
      "Inventory Management",
      "Analytics Dashboard",
    ],
    challenges: [
      "QR code implementation",
      "Real-time order processing",
      "Kitchen workflow optimization",
    ],
    learnings: [
      "QR code generation and scanning",
      "Real-time order management",
      "Restaurant workflow automation",
    ],
    duration: "2.5 months",
    role: "Full Stack Developer",
  },
  {
    id: 6,
    title: "Personal Finance Tracker",
    shortDescription:
      "Comprehensive personal finance management app with budgeting and analytics.",
    fullDescription:
      "A personal finance application that helps users track expenses, create budgets, set financial goals, and analyze spending patterns. Features include bank account integration, bill reminders, and detailed financial reports.",
    technologies: [
      "React",
      "Node.js",
      "Chart.js",
      "MongoDB",
      "Plaid API",
      "Express",
    ],
    category: "Full Stack",
    status: "Completed",
    githubUrl: "https://github.com/yourusername/finance-tracker",
    liveUrl: "https://your-finance-demo.netlify.app",
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop",
    features: [
      "Expense Tracking",
      "Budget Creation & Management",
      "Financial Goal Setting",
      "Bank Account Integration",
      "Bill Reminders",
      "Spending Analytics",
      "Financial Reports",
      "Data Visualization",
    ],
    challenges: [
      "Bank API integration",
      "Data security implementation",
      "Complex financial calculations",
    ],
    learnings: [
      "Financial API integration",
      "Data encryption techniques",
      "Complex state management",
    ],
    duration: "3 months",
    role: "Full Stack Developer",
  },
];

export const projectCategories = [
  "All",
  "Full Stack",
  "Frontend",
  "Backend",
  "Web Application",
  "Mobile",
];

export const projectStats = {
  total: projectsData.length,
  completed: projectsData.filter((p) => p.status === "Completed").length,
  inProgress: projectsData.filter((p) => p.status === "In Progress").length,
  technologies: [...new Set(projectsData.flatMap((p) => p.technologies))]
    .length,
};
