import React from "react";
import { ArrowRight } from "lucide-react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "solid" | "ghost" | "ghost-dark";
  showArrow?: boolean;
}

export function Button({ 
  children, 
  variant = "solid", 
  showArrow = false, 
  className = "", 
  ...props 
}: ButtonProps) {
  const baseStyles = "btn";
  const variantStyles = {
    solid: "btn-solid",
    ghost: "btn-ghost",
    "ghost-dark": "btn-ghost-dark",
  };

  return (
    <button 
      className={`${baseStyles} ${variantStyles[variant]} ${className}`} 
      {...props}
    >
      {children}
      {showArrow && <ArrowRight size={14} className="ml-1" />}
    </button>
  );
}
