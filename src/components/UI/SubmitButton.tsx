import React from "react";

interface ISubmitButtonProps {
  text: string;
  buttonColor?: string;
  textColor?: string;
  gradient?: [string, string];
  icon?: React.ReactNode;
}

const SubmitButton: React.FC<ISubmitButtonProps> = ({
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
      className="flex items-center justify-center gap-2 border border-neutral-900 w-full py-1 rounded-lg hover:opacity-90 transition-all duration-200"
    >
      <span>{text}</span>
      {icon && <div>{icon}</div>}
    </button>
  );
};

export default SubmitButton;
