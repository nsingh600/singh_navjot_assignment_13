import React from 'react';
import { HeroImageProps } from './HeroImage.types';

export const HeroImage: React.FC<HeroImageProps> = ({
  src,
  alt,
  title,
  subtitle,
  className = '',
}) => {
  return (
    <div 
      className={`hero-image ${className}`}
      style={{
        position: 'relative',
        textAlign: 'center',
        color: 'white',
        marginBottom: '20px',
        borderRadius: '8px',
        overflow: 'hidden'
      }}
    >
      <img 
        src={src} 
        alt={alt} 
        style={{ width: '100%', height: '250px', objectFit: 'cover', display: 'block' }} 
      />
      {(title || subtitle) && (
        <div 
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: 'rgba(0, 0, 0, 0.6)',
            padding: '15px 25px',
            borderRadius: '8px',
            width: '80%'
          }}
        >
          {title && <h2 style={{ margin: '0 0 8px 0', fontSize: '1.8rem' }}>{title}</h2>}
          {subtitle && <p style={{ margin: '0', fontSize: '1.1rem' }}>{subtitle}</p>}
        </div>
      )}
    </div>
  );
};
