import React from 'react';
import { codingProfiles } from '../data/portfolioData';

const CodingProfiles = () => {
  return (
    <section id="coding-profiles" className="bg-[#111111] pt-24 pb-32 px-6 md:px-12 w-full relative overflow-hidden font-sans">
      <div className="max-w-6xl mx-auto">
        <div data-aos="fade-up" className="mb-16 md:mb-20 text-center">
          <div className="inline-block border border-white/20 rounded-full px-5 py-1.5 text-sm text-white/60 font-bold mb-6 shadow-sm bg-white/5 backdrop-blur-sm">
            Competitive Programming
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-4 uppercase">
            Coding Profiles
          </h2>
          <p className="text-white/50 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Quick snapshot of my problem-solving profiles across the platforms I use most often.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {codingProfiles.map((profile, index) => (
            <a
              key={profile.platform}
              href={profile.url}
              target="_blank"
              rel="noopener noreferrer"
              data-aos="fade-up"
              data-aos-delay={index * 120}
              className="group rounded-3xl p-[1px] bg-white/10 hover:bg-[#ff6b00]/50 transition-all duration-500"
            >
              <div className="h-full rounded-3xl bg-black/35 backdrop-blur-md border border-white/10 p-7 md:p-8 transition-all duration-500 group-hover:bg-black/50 group-hover:border-[#ff6b00]/30">
                <div className="flex items-start justify-between gap-4 mb-6">
                  <div>
                    <p className="text-white/40 text-xs font-bold tracking-[0.35em] uppercase mb-2">
                      {profile.platform}
                    </p>
                    <h3 className="text-2xl font-black text-white tracking-tight">
                      {profile.username}
                    </h3>
                  </div>
                  <span className="text-[10px] font-black tracking-widest uppercase text-[#ff6b00] bg-[#ff6b00]/10 border border-[#ff6b00]/20 rounded-full px-3 py-1">
                    {profile.badge}
                  </span>
                </div>

                <div className="space-y-4">
                  <div>
                    <p className="text-white/55 text-sm font-medium uppercase tracking-wide">
                      Max Rating
                    </p>
                    <p className="text-4xl font-black text-white leading-none">
                      {profile.rating}
                    </p>
                  </div>
                  <div>
                    <p className="text-white/55 text-sm font-medium uppercase tracking-wide">
                      Total Q
                    </p>
                    <p className="text-2xl font-black text-white leading-none">
                      {profile.totalQuestions}
                    </p>
                  </div>
                </div>

                <div className="mt-8 flex items-center gap-2 text-sm font-bold text-white/70 group-hover:text-white transition-colors">
                  <span>Open profile</span>
                  <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CodingProfiles;
