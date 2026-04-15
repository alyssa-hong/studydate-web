'use client';
import { useEffect, useRef, useState } from 'react';
export default function CTA() {
  const ref = useRef(null);
  const [v, setV] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setV(true); }, { threshold: 0.2 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return (
    <section id="order" ref={ref} className={`max-w-5xl mx-auto px-6 py-28 transition-all duration-1000 ${v ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
      <div className="bg-espresso rounded-[2.5rem] p-16 text-center relative overflow-hidden">
        <div className="absolute top-[-30px] left-[-30px] w-40 h-40 rounded-full border border-white/5" />
        <div className="absolute bottom-[-30px] right-[-30px] w-56 h-56 rounded-full border border-white/5" />
        <div className="flex justify-center gap-2 mb-8">
          {[...Array(5)].map((_, i) => (<div key={i} className="w-1.5 h-1.5 rounded-full bg-latte opacity-60" />))}
        </div>
        <p className="text-latte text-xs tracking-widest uppercase mb-6">Last call</p>
        <h2 className="font-serif text-6xl md:text-7xl text-cream mb-6 leading-tight">Ready to find<br /><span className="italic text-latte">your table?</span></h2>
        <p className="text-white/50 text-xl mb-12 max-w-md mx-auto leading-relaxed">Download StudyDate and plan your first session in under 2 minutes. Free forever.</p>
        <div className="flex justify-center gap-4 flex-wrap mb-6">
          <a href="https://apps.apple.com" className="flex items-center gap-4 bg-cream text-espresso px-8 py-5 rounded-2xl hover:bg-latte hover:text-cream transition-all duration-300 shadow-lg group">
            <div className="text-3xl">🍎</div>
            <div className="text-left">
              <div className="text-xs text-espresso/50 uppercase tracking-wider">Download on the</div>
              <div className="text-lg font-semibold">App Store</div>
            </div>
            <span className="ml-2 group-hover:translate-x-1 transition-transform duration-200">→</span>
          </a>
        </div>
        <div className="flex justify-center gap-6 mb-8">
          <a href="https://discord.gg/studydate" className="text-white/40 hover:text-white/80 text-sm transition-colors">Discord community →</a>
          <a href="https://github.com/alyssahong/StudyDate" className="text-white/40 hover:text-white/80 text-sm transition-colors">GitHub →</a>
        </div>
        <p className="text-white/20 text-xs uppercase tracking-widest">Free to download · iOS 15+ · No subscription</p>
      </div>
    </section>
  );
}
