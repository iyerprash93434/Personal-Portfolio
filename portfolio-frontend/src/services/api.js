// src/services/api.js
import axios from "axios";

// Create axios instance with base configuration
const api = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL || "http://localhost:5000",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

// Request interceptor
api.interceptors.request.use(
  (config) => {
    // Add auth token if available
    const token = localStorage.getItem("authToken");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor
api.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    const errorMessage =
      error.response?.data?.message || error.message || "Something went wrong";
    console.error("API Error:", errorMessage);
    return Promise.reject({
      message: errorMessage,
      status: error.response?.status,
      data: error.response?.data,
    });
  }
);

// Contact API functions
export const contactAPI = {
  // Send contact form message
  sendMessage: async (contactData) => {
    try {
      const response = await api.post("/api/contact", contactData);
      return {
        success: true,
        data: response,
        message: "Message sent successfully!",
      };
    } catch (error) {
      return {
        success: false,
        message: error.message || "Failed to send message. Please try again.",
        error: error,
      };
    }
  },

  // Get all contact messages (admin only)
  getAllMessages: async () => {
    try {
      const response = await api.get("/api/contact");
      return {
        success: true,
        data: response,
      };
    } catch (error) {
      return {
        success: false,
        message: error.message,
        error: error,
      };
    }
  },

  // Delete contact message (admin only)
  deleteMessage: async (messageId) => {
    try {
      const response = await api.delete(`/api/contact/${messageId}`);
      return {
        success: true,
        data: response,
        message: "Message deleted successfully!",
      };
    } catch (error) {
      return {
        success: false,
        message: error.message,
        error: error,
      };
    }
  },
};

// Projects API functions
export const projectsAPI = {
  // Get all projects
  getAllProjects: async () => {
    try {
      const response = await api.get("/api/projects");
      return {
        success: true,
        data: response,
      };
    } catch (error) {
      return {
        success: false,
        message: error.message,
        error: error,
      };
    }
  },

  // Get single project
  getProject: async (projectId) => {
    try {
      const response = await api.get(`/api/projects/${projectId}`);
      return {
        success: true,
        data: response,
      };
    } catch (error) {
      return {
        success: false,
        message: error.message,
        error: error,
      };
    }
  },

  // Create new project (admin only)
  createProject: async (projectData) => {
    try {
      const response = await api.post("/api/projects", projectData);
      return {
        success: true,
        data: response,
        message: "Project created successfully!",
      };
    } catch (error) {
      return {
        success: false,
        message: error.message,
        error: error,
      };
    }
  },

  // Update project (admin only)
  updateProject: async (projectId, projectData) => {
    try {
      const response = await api.put(`/api/projects/${projectId}`, projectData);
      return {
        success: true,
        data: response,
        message: "Project updated successfully!",
      };
    } catch (error) {
      return {
        success: false,
        message: error.message,
        error: error,
      };
    }
  },

  // Delete project (admin only)
  deleteProject: async (projectId) => {
    try {
      const response = await api.delete(`/api/projects/${projectId}`);
      return {
        success: true,
        data: response,
        message: "Project deleted successfully!",
      };
    } catch (error) {
      return {
        success: false,
        message: error.message,
        error: error,
      };
    }
  },
};

// Experience API functions
export const experienceAPI = {
  // Get all experience entries
  getAllExperience: async () => {
    try {
      const response = await api.get("/api/experience");
      return {
        success: true,
        data: response,
      };
    } catch (error) {
      return {
        success: false,
        message: error.message,
        error: error,
      };
    }
  },

  // Create new experience (admin only)
  createExperience: async (experienceData) => {
    try {
      const response = await api.post("/api/experience", experienceData);
      return {
        success: true,
        data: response,
        message: "Experience added successfully!",
      };
    } catch (error) {
      return {
        success: false,
        message: error.message,
        error: error,
      };
    }
  },

  // Update experience (admin only)
  updateExperience: async (experienceId, experienceData) => {
    try {
      const response = await api.put(
        `/api/experience/${experienceId}`,
        experienceData
      );
      return {
        success: true,
        data: response,
        message: "Experience updated successfully!",
      };
    } catch (error) {
      return {
        success: false,
        message: error.message,
        error: error,
      };
    }
  },

  // Delete experience (admin only)
  deleteExperience: async (experienceId) => {
    try {
      const response = await api.delete(`/api/experience/${experienceId}`);
      return {
        success: true,
        data: response,
        message: "Experience deleted successfully!",
      };
    } catch (error) {
      return {
        success: false,
        message: error.message,
        error: error,
      };
    }
  },
};

// Skills API functions
export const skillsAPI = {
  // Get all skills
  getAllSkills: async () => {
    try {
      const response = await api.get("/api/skills");
      return {
        success: true,
        data: response,
      };
    } catch (error) {
      return {
        success: false,
        message: error.message,
        error: error,
      };
    }
  },

  // Update skills (admin only)
  updateSkills: async (skillsData) => {
    try {
      const response = await api.put("/api/skills", skillsData);
      return {
        success: true,
        data: response,
        message: "Skills updated successfully!",
      };
    } catch (error) {
      return {
        success: false,
        message: error.message,
        error: error,
      };
    }
  },
};

// Authentication API functions
export const authAPI = {
  // Login
  login: async (credentials) => {
    try {
      const response = await api.post("/api/auth/login", credentials);
      if (response.token) {
        localStorage.setItem("authToken", response.token);
        localStorage.setItem("user", JSON.stringify(response.user));
      }
      return {
        success: true,
        data: response,
        message: "Login successful!",
      };
    } catch (error) {
      return {
        success: false,
        message: error.message,
        error: error,
      };
    }
  },

  // Logout
  logout: () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("user");
    return {
      success: true,
      message: "Logged out successfully!",
    };
  },

  // Get current user
  getCurrentUser: async () => {
    try {
      const response = await api.get("/api/auth/me");
      return {
        success: true,
        data: response,
      };
    } catch (error) {
      return {
        success: false,
        message: error.message,
        error: error,
      };
    }
  },
};

// Utility function to check if user is authenticated
export const isAuthenticated = () => {
  const token = localStorage.getItem("authToken");
  return !!token;
};

// Utility function to get stored user data
export const getStoredUser = () => {
  const user = localStorage.getItem("user");
  return user ? JSON.parse(user) : null;
};

export default api;
