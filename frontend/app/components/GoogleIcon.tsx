import React from 'react';

interface GoogleIconProps {
  name: string;
  size?: number;
  weight?: 100 | 200 | 300 | 400 | 500 | 600 | 700;
  fill?: 0 | 1;
  grade?: -25 | 0 | 200;
  className?: string;
  onClick?: () => void;
}

/**
 * Componente para usar Google Material Symbols
 * 
 * @example
 * <GoogleIcon name="home" />
 * <GoogleIcon name="menu" size={32} weight={600} />
 * <GoogleIcon name="star" fill={1} className="text-yellow-500" />
 */
export default function GoogleIcon({
  name,
  size = 24,
  weight = 400,
  fill = 0,
  grade = 0,
  className = '',
  onClick
}: GoogleIconProps) {
  const iconStyle = {
    fontVariationSettings: `
      'FILL' ${fill},
      'wght' ${weight},
      'GRAD' ${grade},
      'opsz' ${size}
    `,
    fontSize: `${size}px`,
    lineHeight: 1
  };

  return (
    <span
      className={`material-symbols-outlined ${className} ${onClick ? 'cursor-pointer' : ''}`}
      style={iconStyle}
      onClick={onClick}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
    >
      {name}
    </span>
  );
}