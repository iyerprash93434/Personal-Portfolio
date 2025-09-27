// src/components/ui/Card.js
import React from "react";
import { motion } from "framer-motion";

const Card = ({
  children,
  className = "",
  hover = true,
  variant = "default",
  padding = "md",
  onClick,
  ...props
}) => {
  const variants = {
    default: "bg-white/5 backdrop-blur-sm border border-white/10",
    solid: "bg-gray-800 border border-gray-700",
    gradient:
      "bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-400/20",
    transparent: "bg-transparent border border-white/20",
  };

  const paddings = {
    none: "",
    sm: "p-4",
    md: "p-6",
    lg: "p-8",
    xl: "p-10",
  };

  const baseClasses = `
    rounded-xl transition-all duration-300
    ${variants[variant]}
    ${paddings[padding]}
    ${hover ? "hover:bg-white/10 hover:border-white/20 hover:scale-105" : ""}
    ${onClick ? "cursor-pointer" : ""}
    ${className}
  `;

  const cardProps = {
    className: baseClasses,
    onClick,
    ...props,
  };

  if (hover && onClick) {
    return (
      <motion.div
        {...cardProps}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        {children}
      </motion.div>
    );
  }

  return <div {...cardProps}>{children}</div>;
};

export default Card;
