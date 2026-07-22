"use client";

import { useRef, useEffect } from "react";
import anime from "animejs";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  magnetic?: boolean;
}

export function Button({ 
  children, 
  variant = "primary", 
  magnetic = false,
  className = "",
  ...props 
}: ButtonProps) {
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!magnetic || !buttonRef.current) return;

    const button = buttonRef.current;
    
    const handleMouseMove = (e: MouseEvent) => {
      const rect = button.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      
      // Calculate distance from center
      const distance = Math.sqrt(x * x + y * y);
      const maxDistance = 100; // Activation distance

      if (distance < maxDistance) {
        anime({
          targets: button,
          translateX: x * 0.3,
          translateY: y * 0.3,
          scale: 1.05,
          duration: 300,
          easing: "easeOutElastic(1, .5)",
        });
      } else {
        resetPosition();
      }
    };

    const handleMouseLeave = () => {
      resetPosition();
    };

    const resetPosition = () => {
      anime({
        targets: button,
        translateX: 0,
        translateY: 0,
        scale: 1,
        duration: 500,
        easing: "easeOutElastic(1, .5)",
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    button.addEventListener("mouseleave", handleMouseLeave);
    
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      button.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [magnetic]);

  const baseStyles = "relative overflow-hidden font-medium px-6 py-3 rounded-full transition-colors inline-flex items-center justify-center gap-2";
  
  const variants = {
    primary: "bg-[--color-accent-1] text-white hover:bg-[--color-accent-2] shadow-[0_0_20px_rgba(99,102,241,0.3)] hover:shadow-[0_0_30px_rgba(59,130,246,0.5)]",
    secondary: "bg-white text-black hover:bg-gray-200",
    outline: "border border-white/20 bg-white/5 hover:bg-white/10 text-white backdrop-blur-sm",
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    // Ripple effect
    const btn = e.currentTarget;
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const ripple = document.createElement("span");
    ripple.className = "absolute bg-white/30 rounded-full w-4 h-4 pointer-events-none translate-x-[-50%] translate-y-[-50%]";
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;
    
    btn.appendChild(ripple);
    
    anime({
      targets: ripple,
      scale: 15,
      opacity: 0,
      duration: 600,
      easing: "easeOutSine",
      complete: () => {
        ripple.remove();
      }
    });

    if (props.onClick) {
      props.onClick(e);
    }
  };

  return (
    <button 
      ref={buttonRef}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      onClick={handleClick}
      {...props}
    >
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </button>
  );
}
