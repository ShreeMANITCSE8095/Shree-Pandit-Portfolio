import React from 'react';
import { achievementsList } from '../data/portfolioData';

const Achievements = () => {
  return (
    <section id="achievements" className="bg-[#0a0a0a] pt-24 pb-32 px-6 md:px-12 w-full relative overflow-hidden font-sans bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:80px_80px]">
      <div className="max-w-6xl mx-auto">
        <div data-aos="fade-up" className="mb-16 md:mb-20 text-center">
          <div className="inline-block border border-white/20 rounded-full px-5 py-1.5 text-sm text-white/60 font-bold mb-6 shadow-sm bg-white/5 backdrop-blur-sm">
            Resume Highlights
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-4 uppercase">
            Achievements
          </h2>
          <p className="text-white/50 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Recognitions and milestones that reflect my growth as a developer and leader.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8">
          {achievementsList.map((item, index) => (
            <article
              key={`${item.title}-${index}`}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="rounded-3xl p-[1px] bg-white/10 hover:bg-[#ff6b00]/50 transition-all duration-500"
            >
              <div className="h-full rounded-3xl bg-[#111111]/90 backdrop-blur-md border border-white/10 p-7 md:p-8 transition-all duration-500 hover:bg-[#111111]/100">
                <div className="flex items-center justify-between gap-4 mb-6">
                  <span className="text-5xl font-black text-white/10">
                    0{index + 1}
                  </span>
                  <span className="text-[10px] font-black tracking-widest uppercase text-[#ff6b00] bg-[#ff6b00]/10 border border-[#ff6b00]/20 rounded-full px-3 py-1">
                    Point {index + 1}
                  </span>
                </div>

                <h3 className="text-xl md:text-2xl font-black text-white tracking-tight mb-2">
                  {item.title}
                </h3>
                {item.subtitle && (
                  <p className="text-orange-300 text-xs font-bold uppercase tracking-[0.3em] mb-4">
                    {item.subtitle}
                  </p>
                )}
                <p className="text-white/65 text-sm md:text-base leading-relaxed font-medium">
                  {item.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
