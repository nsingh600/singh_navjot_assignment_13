import React from "react";

export interface InputProps {
  placeholder?: string;
  value?: string;
  type?: "text" | "password" | "email";
  disabled?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input = ({
  placeholder = "Enter text...",
  value,
  type = "text",
  disabled = false,
  onChange,
}: InputProps) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      disabled={disabled}
      onChange={onChange}
      style={{
        padding: "10px 14px",
        fontSize: "14px",
        border: "1px solid #ccc",
        borderRadius: "4px",
        outline: "none",
        width: "100%",
        maxWidth: "300px",
        backgroundColor: disabled ? "#f5f5f5" : "#fff",
        color: disabled ? "#999" : "#333",
        cursor: disabled ? "not-allowed" : "text",
      }}
    />
  );
};
