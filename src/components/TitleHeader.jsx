import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const TitleHeader = ({ title, sub, variant = 'lime', align = 'center', desc }) => {
  const ref = useRef(null);
  const alignClass = align === 'left' ? 'items-start text-left title-reveal-left' : 'items-center text-center title-reveal-center';

  useGSAP(() => {
    if (!ref.current) return;
    gsap.fromTo(
      ref.current,
      { y: 24, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.7,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: ref.current,
          start: 'top 88%',
        },
      }
    );
  }, []);

  return (
    <div ref={ref} className={`title-reveal flex flex-col gap-2 mb-2 ${alignClass}`}>
      {sub && (
        <p className={`section-label !mb-2 ${variant === 'cyan' ? 'section-label-cyan' : ''}`}>
          {sub}
        </p>
      )}
      <h2 className="section-title">{title}</h2>
      {desc && <p className={`section-desc ${align === 'center' ? 'mx-auto text-center' : ''}`}>{desc}</p>}
    </div>
  );
};

export default TitleHeader;
