import React from 'react';
import { abilities } from '../constants';
import TitleHeader from '../components/TitleHeader';

const FeatureCards = () => {
  return (
    <section className="section-padding pt-0">
      <div className="section-container">
        <TitleHeader
          title="Soft Skills"
          sub="// CORE_VALUES"
          align="left"
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-8">
          {abilities.map(({ title, desc }, index) => (
            <div
              key={title}
              className={`terminal-card p-6 ${
                index % 2 === 0 ? 'terminal-card-accent-lime' : 'terminal-card-accent-cyan'
              }`}
            >
              <p className="font-mono text-xs text-zinc-500 mb-3">
                [{String(index + 1).padStart(2, '0')}]
              </p>
              <h3 className="text-lg font-bold text-white mb-3">{title}</h3>
              <p className="font-mono text-xs text-zinc-400 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureCards;
