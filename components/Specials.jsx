'use client';
import { useEffect, useRef, useState } from 'react';
function FadeIn({ children, delay = 0 }) {
  const ref = useRef(null);
  const [v, setV] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setV(true); }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return (
    <div ref={ref} style={{ transitionDelay: `${delay}ms` }} className={`transition-all duration-700 ${v ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
      {children}
    </div>
  );
}
export default function Specials() {
  return (
    <section id="specials" className="max-w-5xl mx-auto px-6 py-24 border-t-2 border-dashed border-foam">
      <FadeIn>
        <div className="text-center mb-16">
          <p className="text-latte text-xs tracking-widest uppercase mb-3 flex items-center justify-center gap-2"><span className="w-8 h-px bg-latte inline-block" />Chef's Specials<span className="w-8 h-px bg-latte inline-block" /></p>
          <h2 className="font-serif text-5xl md:text-6xl text-espresso mb-4">The <span className="italic text-latte">good stuff</span></h2>
        </div>
      </FadeIn>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <FadeIn delay={0}>
          <div className="bg-espresso rounded-3xl p-8 text-cream relative overflow-hidden h-full">
            <div className="absolute top-[-20px] right-[-20px] w-32 h-32 rounded-full border border-white/5" />
            <div className="text-4xl mb-6">🪙</div>
            <h3 className="font-serif text-2xl mb-3">The Coin Flip</h3>
            <p className="text-white/60 text-sm leading-relaxed mb-6">Our signature item. Both pick a café. One wins. Served with a dramatic reveal animation.</p>
            <span className="text-xs text-latte uppercase tracking-widest">Fan favorite</span>
          </div>
        </FadeIn>
        <FadeIn delay={100}>
          <div className="bg-foam rounded-3xl p-8 relative overflow-hidden h-full border-2 border-dashed border-foam">
            <div className="text-4xl mb-6">📍</div>
            <h3 className="font-serif text-2xl text-espresso mb-3">Midpoint Magic</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">We find cafés exactly halfway between everyone. No one travels further than the other. Fair by design.</p>
            <span className="text-xs text-latte uppercase tracking-widest">Smart and fair</span>
          </div>
        </FadeIn>
        <FadeIn delay={200}>
          <div className="bg-white rounded-3xl p-8 relative overflow-hidden h-full border border-foam">
            <div className="text-4xl mb-6">👥</div>
            <h3 className="font-serif text-2xl text-espresso mb-3">Group Sessions</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">Bring the whole crew. Invite multiple friends, set a time, and let everyone vote on the spot.</p>
            <span className="text-xs text-latte uppercase tracking-widest">New this season</span>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
