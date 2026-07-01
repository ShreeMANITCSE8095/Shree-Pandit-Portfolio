import React from 'react';
import { leadershipList } from '../data/portfolioData';

const LeadershipItem = ({ item, index }) => {
  const isLeft = index % 2 === 0;

  return (
    <div className="relative grid grid-cols-1 md:grid-cols-2 items-center w-full mb-12 md:mb-16">
      <div className={`${isLeft ? 'md:pr-10 md:order-1' : 'md:order-1'}`}>
        {isLeft && (
          <div
            data-aos="fade-right"
            className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:border-orange-500/30 hover:shadow-[0_15px_35px_rgba(255,107,0,0.12)] transition-all duration-500 text-left"
          >
            <div className="flex flex-wrap gap-2 items-center mb-3">
              <span className="bg-[#ff6b00]/20 text-[#ff6b00] text-[10px] font-black tracking-widest uppercase py-1 px-3 rounded-full border border-[#ff6b00]/30">
                Engagement
              </span>
            </div>
            <h3 className="text-white text-xl font-black mb-1 tracking-tight">
              {item.title}
            </h3>
            <p className="text-orange-300 text-xs font-bold font-mono tracking-wider uppercase mb-2">
              {item.organization}
            </p>
            <p className="text-white/60 text-sm leading-relaxed font-medium">
              {item.description}
            </p>
            {item.points?.length ? (
              <ul className="mt-4 space-y-2 text-sm text-white/75 font-medium">
                {item.points.map((point) => (
                  <li key={point} className="flex items-start gap-2 text-left">
                    <span className="text-orange-300 mt-1 shrink-0">•</span>
                    <span className="flex-1 text-left">{point}</span>
                  </li>
                ))}
              </ul>
            ) : null}
            <p className="text-white/40 text-xs font-mono font-bold tracking-widest uppercase mt-4">
              {item.duration}
            </p>
          </div>
        )}
      </div>

      <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 bg-[#ff6b00] rounded-full border-4 border-black z-30 shadow-[0_0_15px_#ff6b00]" />
      <div className="absolute left-4 md:left-1/2 -translate-x-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#ff6b00] via-orange-500/50 to-white/10" />

      <div className={`${isLeft ? 'md:order-2' : 'md:pl-10 md:order-2'}`}>
        {!isLeft && (
          <div
            data-aos="fade-left"
            className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:border-orange-500/30 hover:shadow-[0_15px_35px_rgba(255,107,0,0.12)] transition-all duration-500 text-left"
          >
            <div className="flex flex-wrap gap-2 items-center mb-3">
              <span className="bg-[#ff6b00]/20 text-[#ff6b00] text-[10px] font-black tracking-widest uppercase py-1 px-3 rounded-full border border-[#ff6b00]/30">
                Engagement
              </span>
            </div>
            <h3 className="text-white text-xl font-black mb-1 tracking-tight">
              {item.title}
            </h3>
            <p className="text-orange-300 text-xs font-bold font-mono tracking-wider uppercase mb-2">
              {item.organization}
            </p>
            <p className="text-white/60 text-sm leading-relaxed font-medium">
              {item.description}
            </p>
            {item.points?.length ? (
              <ul className="mt-4 space-y-2 text-sm text-white/75 font-medium">
                {item.points.map((point) => (
                  <li key={point} className="flex items-start gap-2 text-left">
                    <span className="text-orange-300 mt-1 shrink-0">•</span>
                    <span className="flex-1 text-left">{point}</span>
                  </li>
                ))}
              </ul>
            ) : null}
            <p className="text-white/40 text-xs font-mono font-bold tracking-widest uppercase mt-4">
              {item.duration}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

const Leadership = () => {
  return (
    <section className="bg-[#0a0a0a] pt-24 pb-32 px-6 md:px-12 w-full relative overflow-hidden font-sans bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:80px_80px]">
      <div className="absolute top-0 left-0 w-full pointer-events-none z-10 transform -translate-y-[1px] rotate-180">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12 md:h-20 fill-[#ff6b00]">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.62,189.5,99.8,242.79,81.82,282.88,63.6,321.39,56.44Z"></path>
        </svg>
      </div>

      <div className="max-w-6xl mx-auto relative z-20">
        <div data-aos="fade-up" className="mb-20 text-center">
          <div className="inline-block border border-white/20 rounded-full px-5 py-1.5 text-sm text-white/60 font-bold mb-6 shadow-sm bg-white/5 backdrop-blur-sm">
            Activities
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-4 uppercase">
            Leadership & Engagement
          </h2>
          <p className="text-white/50 text-base md:text-lg max-w-lg mx-auto leading-relaxed">
            Coordinating events, leading team operations, and participating in tech summits.
          </p>
        </div>

        <div className="relative w-full">
          <div className="w-full">
            {leadershipList.map((item, index) => (
              <LeadershipItem key={`${item.title}-${index}`} item={item} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Leadership;
