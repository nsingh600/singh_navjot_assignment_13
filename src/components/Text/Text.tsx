import React from 'react';
import { TextProps } from './Text.types';

export const Text: React.FC<TextProps> = ({ content, variant = 'body', className = '' }) => {
  const style = variant === 'caption' ? { fontSize: '0.85rem', color: '#666' } : variant === 'title' ? { fontSize: '1.25rem', fontWeight: 600 } : { fontSize: '1rem' };
  return <p className={`component-text ${className}`} style={style}>{content}</p>;
};
