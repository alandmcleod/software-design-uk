// src/components/ui/card.tsx
import React from "react";

type CardProps = {
  className?: string;
  children: React.ReactNode;
};

export const Card: React.FC<CardProps> = ({ className = "", children }) => {
  return (
    <div className={`rounded-xl border p-4 shadow-sm ${className}`}>
      {children}
    </div>
  );
};
