import React from 'react';
import { LabelProps } from './Label.types';

export const Label: React.FC<LabelProps> = ({ text, htmlFor, className = '' }) => {
  return (
    <label htmlFor={htmlFor} className={`component-label ${className}`} style={{ fontWeight: 'bold', display: 'inline-block', marginBottom: '4px' }}>
      {text}
    </label>
  );
};
