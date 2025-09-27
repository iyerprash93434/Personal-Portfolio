// src/components/common/Footer.js
import React from "react";
import { Github, Linkedin, Mail, Heart, ArrowUp } from "lucide-react";
import { PERSONAL_INFO, SOCIAL_LINKS } from "../../utils/constants";
import { scrollToSection } from "../../utils/helpers";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: <Github className="w-5 h-5" />,
      url: SOCIAL_LINKS.github,
      label: "GitHub",
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      url: SOCIAL_LINKS.linkedin,
      label: "LinkedIn",
    },
    {
      icon: <Mail className="w-5 h-5" />,
      url: `mailto:${PERSONAL_INFO.email}`,
      label: "Email",
    },
  ];

  const quickLinks = [
    { label: "About", id: "about" },
    { label: "Skills", id: "skills" },
    { label: "Projects", id: "projects" },
    { label: "Experience", id: "experience" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <footer className="bg-black/40 border-t border-white/10">
      <div className="container mx-auto px-6 py-12">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                {PERSONAL_INFO.name}
              </h3>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              {PERSONAL_INFO.title}
            </p>
            <p className="text-gray-400 text-sm leading-relaxed">
              Building exceptional digital experiences with modern web
              technologies.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <div className="grid grid-cols-2 gap-2">
              {quickLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="text-left text-gray-400 hover:text-purple-400 transition-colors text-sm"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Get In Touch</h4>
            <div className="space-y-2">
              <p className="text-gray-400 text-sm">
                <span className="text-white">Email:</span> {PERSONAL_INFO.email}
              </p>
              <p className="text-gray-400 text-sm">
                <span className="text-white">Location:</span>{" "}
                {PERSONAL_INFO.location}
              </p>
              <p className="text-gray-400 text-sm">
                <span className="text-white">Phone:</span> {PERSONAL_INFO.phone}
              </p>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/10">
          <div className="flex items-center space-x-6 mb-4 md:mb-0">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-purple-400 transition-colors transform hover:scale-110"
                aria-label={social.label}
              >
                {social.icon}
              </a>
            ))}
          </div>

          {/* Back to Top */}
          <button
            onClick={() => scrollToSection("home")}
            className="flex items-center gap-2 text-gray-400 hover:text-purple-400 transition-colors group"
            aria-label="Back to top"
          >
            <span className="text-sm">Back to top</span>
            <ArrowUp className="w-4 h-4 group-hover:transform group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>

        {/* Copyright */}
        <div className="text-center pt-8 border-t border-white/10 mt-8">
          <p className="text-gray-400 text-sm flex items-center justify-center gap-2">
            © {currentYear} {PERSONAL_INFO.name}. Made with{" "}
            <Heart className="w-4 h-4 text-red-400 animate-pulse" /> using React
            & Tailwind CSS. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
