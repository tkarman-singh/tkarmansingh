"use client";

import { useRef, useEffect, useState } from "react";

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
  const [ripple, setRipple] = useState<{x: number, y: number, id: number} | null>(null);

  useEffect(() => {
    if (!magnetic || !buttonRef.current) return;

    const button = buttonRef.current;
    let reqId: number;
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;
    
    const animate = () => {
      // Smooth lerp for the magnetic effect
      currentX += (targetX - currentX) * 0.1;
      currentY += (targetY - currentY) * 0.1;
      
      if (button) {
        button.style.transform = `translate(${currentX}px, ${currentY}px)`;
      }
      
      reqId = requestAnimationFrame(animate);
    };
    
    reqId = requestAnimationFrame(animate);

    const handleMouseMove = (e: MouseEvent) => {
      const rect = button.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      
      const distance = Math.sqrt(x * x + y * y);
      const maxDistance = 100; 

      if (distance < maxDistance) {
        targetX = x * 0.3;
        targetY = y * 0.3;
      } else {
        targetX = 0;
        targetY = 0;
      }
    };

    const handleMouseLeave = () => {
      targetX = 0;
      targetY = 0;
    };

    window.addEventListener("mousemove", handleMouseMove);
    button.addEventListener("mouseleave", handleMouseLeave);
    
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      button.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(reqId);
    };
  }, [magnetic]);

  const baseStyles = "relative overflow-hidden font-medium px-6 py-3 rounded-full transition-colors inline-flex items-center justify-center gap-2";
  
  const variants = {
    primary: "bg-[--color-accent-1] text-white hover:bg-[--color-accent-2] shadow-[0_0_20px_rgba(99,102,241,0.3)] hover:shadow-[0_0_30px_rgba(59,130,246,0.5)]",
    secondary: "bg-white text-black hover:bg-gray-200",
    outline: "border border-white/20 bg-white/5 hover:bg-white/10 text-white backdrop-blur-sm",
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const btn = e.currentTarget;
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    setRipple({ x, y, id: Date.now() });

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
      {ripple && (
        <span 
          key={ripple.id}
          className="absolute bg-white/30 rounded-full w-4 h-4 pointer-events-none -translate-x-1/2 -translate-y-1/2 animate-ping"
          style={{ 
            left: ripple.x, 
            top: ripple.y,
            animationDuration: '600ms',
            animationFillMode: 'forwards'
          }}
          onAnimationEnd={() => setRipple(null)}
        />
      )}
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </button>
  );
}
