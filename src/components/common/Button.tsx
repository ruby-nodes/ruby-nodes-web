import React from "react";
import { twMerge } from "tailwind-merge";

type ButtonProps = {
  label: string;
  size?: "small" | "large";
  variant?: "primary" | "secondary";
  active?: boolean;
  className?: string;
  onClick?: () => void;
};

function getButtonVariant(variant: string, active?: boolean) {
  if (variant === "primary") {
    return active
      ? "bg-c-primary hover:bg-c-primary-hover"
      : "bg-c-container-accent text-c-text-inactive hover:bg-c-container-accent-hover";
  } else {
    return "border border-c-primary bg-[transparent] hover:bg-c-primary";
  }
}

export default function Button({
  label,
  variant = "primary",
  size = "large",
  active = true,
  onClick,
  className,
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={twMerge(
        "font-bold text-c-text transition-colors duration-300 ease-in-out text-sm",
        size === "small"
          ? "px-5 py-3 rounded-md"
          : "py-4 px-[3.75rem] rounded-lg",
        getButtonVariant(variant, active),
        className
      )}
    >
      {label}
    </button>
  );
}
