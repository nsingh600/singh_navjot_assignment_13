import React from 'react';
import { ButtonProps } from './Button.types';

export const Button: React.FC<ButtonProps> = ({ 
  text, 
  label, 
  onClick, 
  className = '', 
  disabled = false,
  type = 'button' 
}) => {
  return (
    <button 
      type={type} 
      className={`btn ${className}`} 
      onClick={onClick} 
      disabled={disabled}
    >
      {text || label || 'Button'}
    </button>
  );
};