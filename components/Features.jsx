'use client';
import { useEffect, useRef, useState } from 'react';

const features = [
  { icon: '📍', title: 'Midpoint café finder', description: 'Finds cafés equidistant between all participants — fair for everyone, every time.', tag: 'Smart' },
  { icon: '🗺', title: 'Map view', description: 'Browse cafés on an interactive map. See exactly where each spot is before you commit.', tag: 'Visual' },
  { icon: '⭐', title: 'Favorites and ratings', description: 'Save spots you love. Rate cafés after your session and build your personal collection.', tag: 'Personal' },
  { icon: '👥', title: 'Group study dates', description: 'Invite your whole study group. Everyone picks a café, one wins.', tag: 'Social' },
  { icon: '🔔', title: 'Push notifications', description: 'Get notified instantly when a friend sends you a request or study date invite.', tag: 'Live' },
  { icon: '☕', title: 'Real café data', description: 'Powered by Google Places — real photos, hours, reviews, and ratings.', tag: 'Powered' },
];

function FadeIn({ children, delay = 0 }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
    >
      {children}
    </div>
  );
}

export default function Features() {
  return (
    <section id="features" className="max-w-5xl mx-auto px-6 py-28 border-t border-foam">
      <FadeIn>
        <p className="text-latte text-xs tracking-widest uppercase mb-4 flex items-center gap-2">
          <span className="w-8 h-px bg-latte" />
          Features
        </p>
        <h2 className="font-serif text-5xl md:text-6xl text-espresso mb-4 leading-tight">
          Everything you need
          <br />
          <span className="italic text-latte">for the perfect session</span>
        </h2>
        <p className="text-gray-400 text-lg mb-16 max-w-md leading-relaxed">
          Built for students who study better with good coffee and good company.
        </p>
      </FadeIn>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {features.map((f, i) => (
          <FadeIn key={f.title} delay={i * 80}>
            <div className="group bg-white rounded-3xl p-8 border border-foam hover:border-latte hover:shadow-md hover:-translate-y-1 transition-all duration-300 h-full">
              <div className="flex items-start justify-between mb-5">
                <div className="w-12 h-12 bg-foam rounded-2xl flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300">
                  {f.icon}
                </div>
                <span className="text-xs text-latte bg-foam px-3 py-1 rounded-full font-medium">
                  {f.tag}
                </span>
              </div>
              <h3 className="font-serif text-xl text-espresso mb-2">{f.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed">{f.description}</p>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}