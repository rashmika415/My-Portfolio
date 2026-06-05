import React from 'react'

const TitleHeader = ({ title, sub, variant = 'lime', align = 'center' }) => {
  const alignClass = align === 'left' ? 'items-start text-left' : 'items-center text-center';

  return (
    <div className={`flex flex-col gap-3 ${alignClass}`}>
      {sub && (
        <p className={`section-label ${variant === 'cyan' ? 'section-label-cyan' : ''}`}>
          {sub}
        </p>
      )}
      <h2 className="section-title">{title}</h2>
    </div>
  );
};

export default TitleHeader;
