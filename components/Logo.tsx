
import React from 'react';

export const Logo: React.FC<{ size?: 'sm' | 'md' | 'lg', className?: string }> = ({ size = 'md', className = '' }) => {
  const sizes = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-12 h-12'
  };

  return (
    <div className={`${sizes[size]} relative rounded-lg overflow-hidden shadow-lg shadow-primary/20 ${className}`}>
      <img 
        src="https://res.cloudinary.com/dtr0kdeh3/image/upload/v1771885752/a-minimalist-vector-logo-design-featurin_9051waq9QqmJqCFxHrEi_g_MEAC6e9TQCW85Y0Do0fNyw_cover_rvaudx.jpg" 
        alt="DFootprint Logo"
        className="w-full h-full object-cover"
      />
    </div>
  );
};
