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
        <div className="inline-flex items-center gap-2 bg-latte/20 text-latte text-xs tracking-widest uppercase px-4 py-2 rounded-full mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-latte animate-pulse" />
          Coming soon to iOS
        </div>
        <h2 className="font-serif text-6xl md:text-7xl text-cream mb-6 leading-tight">Ready to find<br /><span className="italic text-latte">your table?</span></h2>
        <p className="text-white/50 text-xl mb-10 max-w-md mx-auto leading-relaxed">StudyDate is launching soon. Join the waitlist and be the first to know when it hits the App Store.</p>
        <div className="flex justify-center mb-8">
          <a href="https://tally.so/r/RGBW9P" target="_blank" rel="noopener noreferrer" className="bg-latte text-cream px-10 py-4 rounded-2xl font-semibold text-lg hover:opacity-90 transition-opacity flex items-center gap-3">Join the Waitlist →</a>
        </div>
        <div className="flex justify-center gap-6 mb-6">
          <a href="https://discord.gg/tdYYdCag" className="flex items-center gap-2 text-white/50 hover:text-white/80 text-sm transition-colors">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z"/></svg>
            Join the Discord
          </a>
          <a href="https://github.com/alyssa-hong" className="flex items-center gap-2 text-white/50 hover:text-white/80 text-sm transition-colors">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>
            View on GitHub
          </a>
        </div>
        <p className="text-white/20 text-xs uppercase tracking-widest">Free to download · iOS 15+ · No subscription</p>
      </div>
    </section>
  );
}
