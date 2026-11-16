import React from 'react';
import { DropdownProps } from './Dropdown.types';

export const Dropdown: React.FC<DropdownProps> = ({ options, value, onChange, disabled = false, className = '' }) => {
  return (
    <select value={value} onChange={onChange} disabled={disabled} className={`component-dropdown ${className}`} style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}>
      {options.map((opt, idx) => (
        <option key={idx} value={opt.value}>
          {opt.label}
        </option>
      ))}
    </select>
  );
};
