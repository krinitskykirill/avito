import React from "react";
import cls from "./Input.module.scss";

interface InputProps {
  className: string;
  style?: React.CSSProperties;
  type?: string;
  placeholder?: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

const getClassName = (className: string = "") => {
  return `${className} ${cls.input}`.trim();
};

export const Input: React.FC<InputProps> = ({
  className,
  style,
  type = "text",
  placeholder = "",
  value,
  onChange,
  onKeyDown,
}) => (
  <input
    className={getClassName(className)}
    style={style}
    type={type}
    placeholder={placeholder}
    value={value}
    onChange={onChange}
    onKeyDown={onKeyDown}
  />
);
