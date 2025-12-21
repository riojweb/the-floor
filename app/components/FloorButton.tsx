import React from "react";

interface FloorButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "square" | "rectangular";
  children: React.ReactNode;
}

export default function FloorButton({
  variant = "rectangular",
  className = "",
  children,
  ...props
}: FloorButtonProps) {
  const baseClasses = "btn-glow";
  const variantClass = variant === "square" ? "square" : "rectangular";

  return (
    <button
      className={`${baseClasses} ${variantClass} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
