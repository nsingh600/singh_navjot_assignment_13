import React from 'react';
import { ImgProps } from './Img.types';

export const Img: React.FC<ImgProps> = ({ src, alt, width = '100%', height = 'auto', className = '' }) => {
  return <img src={src} alt={alt} style={{ width, height, borderRadius: '4px', objectFit: 'cover' }} className={`component-img ${className}`} />;
};
