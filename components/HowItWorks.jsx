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
const steps = [
  { n: '01', title: 'Place your order', desc: 'Tap + New Date. Choose one on one or group. Pick your friends and set a time.', icon: '📋' },
  { n: '02', title: 'We find your table', desc: 'StudyDate finds cafés right in the middle of your locations. Browse real photos and ratings.', icon: '🗺' },
  { n: '03', title: 'Enjoy your session', desc: 'Confirm the café, show up, and study. Save favorites for next time.', icon: '☕' },
];
export default function HowItWorks() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-24 border-t-2 border-dashed border-foam">
      <FadeIn>
        <div className="text-center mb-16">
          <p className="text-latte text-xs tracking-widest uppercase mb-3 flex items-center justify-center gap-2"><span className="w-8 h-px bg-latte inline-block" />How to order<span className="w-8 h-px bg-latte inline-block" /></p>
          <h2 className="font-serif text-5xl md:text-6xl text-espresso mb-4">From invite to café <span className="italic text-latte">in minutes</span></h2>
          <p className="text-gray-400 max-w-md mx-auto leading-relaxed">No group chats. No debates. Just show up and study.</p>
        </div>
      </FadeIn>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {steps.map((s, i) => (
          <FadeIn key={s.n} delay={i * 100}>
            <div className="text-center">
              <div className="w-16 h-16 bg-foam rounded-2xl flex items-center justify-center text-3xl mx-auto mb-5 border border-foam">{s.icon}</div>
              <p className="text-latte text-xs tracking-widest uppercase mb-2">{s.n}</p>
              <h3 className="font-serif text-2xl text-espresso mb-3">{s.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{s.desc}</p>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
