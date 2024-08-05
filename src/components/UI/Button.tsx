import React from "react";

interface ButtonProps {
  text: string;
  buttonColor?: string;
  textColor?: string;
  gradient?: [string, string];
  icon?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  text,
  buttonColor = "black",
  textColor = "white",
  gradient,
  icon,
}) => {
  const backgroundStyle = gradient
    ? `linear-gradient(to bottom, ${gradient[0]}, ${gradient[1]})`
    : buttonColor;

  return (
    <button
      style={{
        background: backgroundStyle,
        color: textColor,
      }}
      className="flex items-center justify-center gap-2 w-full py-1 rounded-lg hover:opacity-90 transition-all duration-200"
    >
      <span>{text}</span>
      {icon && <div>{icon}</div>}
    </button>
  );
};

export default Button;
