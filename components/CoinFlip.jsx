'use client';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

export default function CoinFlip() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="max-w-5xl mx-auto px-6 py-12">
      <div
        ref={ref}
        className={`bg-espresso rounded-[2.5rem] p-16 text-center relative overflow-hidden transition-all duration-1000 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      >
        {/* Decorative rings */}
        <div className="absolute top-[-40px] left-[-40px] w-40 h-40 rounded-full border border-white/5" />
        <div className="absolute top-[-20px] left-[-20px] w-40 h-40 rounded-full border border-white/5" />
        <div className="absolute bottom-[-40px] right-[-40px] w-56 h-56 rounded-full border border-white/5" />
        <div className="absolute bottom-[-20px] right-[-20px] w-56 h-56 rounded-full border border-white/5" />

        {/* Coin */}
        <div className={`text-8xl mb-8 inline-block transition-all duration-1000 delay-300 ${visible ? 'rotate-0 scale-100' : 'rotate-180 scale-0'}`}>
          🪙
        </div>

        <h2 className="font-serif text-5xl md:text-6xl text-cream mb-6 leading-tight">
          The café
          <br />
          <span className="italic text-latte">coin flip</span>
        </h2>

        <p className="text-white/60 text-lg max-w-md mx-auto mb-10 leading-relaxed">
          Cannot agree on where to study? Both pick your favorite café and let StudyDate decide with a dramatic reveal animation.
        </p>

        <div className="flex justify-center gap-4 flex-wrap">
          <Link href="#download" className="bg-cream text-espresso px-8 py-4 rounded-full text-base font-medium hover:bg-latte hover:text-cream transition-all duration-300">
            Try it yourself
          </Link>
          <Link href="#how-it-works" className="border border-white/20 text-white/80 px-8 py-4 rounded-full text-base hover:border-white/50 transition-all duration-300">
            See how it works
          </Link>
        </div>

        {/* Bottom detail */}
        <p className="text-white/30 text-xs mt-8 uppercase tracking-widest">
          No arguments. Just vibes.
        </p>
      </div>
    </section>
  );
}