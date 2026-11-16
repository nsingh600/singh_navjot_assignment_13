import React from 'react';
import { RadioButtonProps } from './RadioButton.types';

export const RadioButton: React.FC<RadioButtonProps> = ({
  label,
  name,
  value,
  checked,
  defaultChecked,
  onChange,
  disabled = false,
  className = '',
}) => {
  return (
    <label className={`radio-label ${className} ${disabled ? 'disabled' : ''}`}>
      <input
        type="radio"
        name={name}
        value={value}
        checked={checked}
        defaultChecked={defaultChecked}
        onChange={onChange}
        disabled={disabled}
      />
      {label && <span className="radio-text">{label}</span>}
    </label>
  );
};
