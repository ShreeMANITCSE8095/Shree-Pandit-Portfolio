import React from 'react';
import {
  SiCplusplus,
  SiC,
  SiPython,
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiNextdotjs,
  SiMongodb,
  SiExpress,
  SiMysql,
  SiPostgresql,
} from 'react-icons/si';
import { techStackItems } from '../data/portfolioData';

const iconMap = {
  'C++': SiCplusplus,
  C: SiC,
  Python: SiPython,
  JavaScript: SiJavascript,
  'React.js': SiReact,
  'Node.js': SiNodedotjs,
  'Next.js': SiNextdotjs,
  MongoDB: SiMongodb,
  'Express.js': SiExpress,
  MySQL: SiMysql,
  PostgreSQL: SiPostgresql,
};

const colors = {
  'C++': '#00599C',
  C: '#A8B9CC',
  Python: '#3776AB',
  JavaScript: '#F7DF1E',
  'React.js': '#61DAFB',
  'Node.js': '#339933',
  'Next.js': '#FFFFFF',
  MongoDB: '#47A248',
  'Express.js': '#FFFFFF',
  MySQL: '#4479A1',
  PostgreSQL: '#336791',
};

const TechnicalSkills = () => {
  return (
    <section id="skills" className="bg-[#0a0a0a] pt-24 pb-28 px-6 md:px-12 w-full relative overflow-hidden font-sans">
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-orange-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-orange-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div data-aos="fade-up" className="mb-16 text-center">
          <div className="inline-block border border-white/20 rounded-full px-5 py-1.5 text-sm text-white/60 font-bold mb-6 shadow-sm bg-white/5 backdrop-blur-sm">
            Technical Stack
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-4 uppercase">
            My Skillset
          </h2>
          <p className="text-white/50 text-base md:text-lg max-w-xl mx-auto leading-relaxed">
            Logos of the languages, frameworks, and databases I work with most often.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {techStackItems.map((item, index) => {
            const Icon = iconMap[item.name];
            return (
              <div
                key={item.name}
                data-aos="fade-up"
                data-aos-delay={index * 60}
                className="group rounded-3xl p-[1px] bg-white/10 hover:bg-[#ff6b00]/50 transition-all duration-500"
              >
                <div className="h-full rounded-3xl bg-white/5 backdrop-blur-md border border-white/10 p-6 flex flex-col items-center justify-center text-center min-h-[140px] group-hover:bg-white/10 transition-all duration-500">
                  <div
                    className="w-14 h-14 md:w-16 md:h-16 rounded-2xl flex items-center justify-center mb-4 border border-white/10"
                    style={{ backgroundColor: `${colors[item.name]}15`, color: colors[item.name] }}
                  >
                    {Icon ? <Icon className="w-7 h-7 md:w-8 md:h-8" /> : <span className="font-black">{item.name.slice(0, 1)}</span>}
                  </div>
                  <h3 className="text-white font-black tracking-tight text-base md:text-lg">
                    {item.name}
                  </h3>
                  <p className="text-white/45 text-[11px] uppercase tracking-[0.25em] mt-2">
                    {item.category}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TechnicalSkills;
