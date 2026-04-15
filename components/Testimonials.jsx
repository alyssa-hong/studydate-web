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
const reviews = [
  { quote: 'StudyDate completely changed how our group works. No more hour-long debates. The coin flip is genius.', name: 'Vivian Ngyuen', role: 'PA student', initials: 'VN' },
  { quote: 'It always finds somewhere fair for both of us. My study partner lives across town and we never fight about location anymore.', name: 'Paige Hyunh', role: 'Graduate Student, Georgia Tech', initials: 'PH' },
  { quote: 'The group date feature is so well done. Six of us use it every week and everyone gets notified instantly.', name: 'James Nguyen', role: 'Graduate Student, GSU', initials: 'JN' },
  { quote: 'Finally an app that makes studying feel like a social thing. The mascot is the cutest thing I have ever seen.', name: 'Hiba Aryub', role: 'Senior, UGA', initials: 'HA' },
];
export default function Testimonials() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-24 border-t-2 border-dashed border-foam">
      <FadeIn>
        <div className="text-center mb-16">
          <p className="text-latte text-xs tracking-widest uppercase mb-3 flex items-center justify-center gap-2"><span className="w-8 h-px bg-latte inline-block" />Guest Reviews<span className="w-8 h-px bg-latte inline-block" /></p>
          <h2 className="font-serif text-5xl md:text-6xl text-espresso mb-4">What our <span className="italic text-latte">regulars say</span></h2>
        </div>
      </FadeIn>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {reviews.map((r, i) => (
          <FadeIn key={r.name} delay={i * 80}>
            <div className="bg-white rounded-3xl p-8 border border-foam hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 h-full flex flex-col justify-between">
              <div>
                <div className="flex gap-0.5 mb-5">{[...Array(5)].map((_, i) => (<span key={i} className="text-latte text-sm">★</span>))}</div>
                <p className="text-espresso text-base leading-relaxed italic mb-6">"{r.quote}"</p>
              </div>
              <div className="flex items-center gap-3 pt-4 border-t border-foam">
                <div className="w-10 h-10 rounded-full bg-latte flex items-center justify-center text-cream text-sm font-medium">{r.initials}</div>
                <div>
                  <p className="text-sm font-semibold text-espresso">{r.name}</p>
                  <p className="text-xs text-gray-400">{r.role}</p>
                </div>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
