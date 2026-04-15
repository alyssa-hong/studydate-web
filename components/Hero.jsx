'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
export default function Hero() {
  const [v, setV] = useState(false);
  useEffect(() => { setTimeout(() => setV(true), 100); }, []);
  return (
    <section className="relative max-w-5xl mx-auto px-6 pt-16 pb-0 overflow-hidden">
      <div className="absolute top-8 left-6 w-20 h-20 rounded-full border-2 border-foam opacity-70" />
      <div className="absolute top-14 left-10 w-20 h-20 rounded-full border-2 border-foam opacity-40" />
      <div className="absolute top-6 right-10 grid grid-cols-4 gap-2 opacity-15">
        {[...Array(16)].map((_, i) => (<div key={i} className="w-1.5 h-1.5 rounded-full bg-espresso" />))}
      </div>
      <div className={`transition-all duration-700 ${v ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
        <div className="inline-flex items-center gap-2 bg-white border border-foam text-latte text-xs tracking-widest uppercase px-5 py-2 rounded-full mb-8 shadow-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-red animate-pulse" />
          Available on iOS coming soon
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-start md:items-center gap-12">
        <div className="flex-1">
          <div className={`transition-all duration-700 delay-100 ${v ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <h1 className="font-serif text-6xl md:text-8xl text-espresso leading-none mb-6 tracking-tight">studying<br />is better<br /><span className="italic text-latte">together</span></h1>
          </div>
          <div className={`transition-all duration-700 delay-200 ${v ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <p className="text-lg text-gray-400 font-light max-w-sm mb-10 leading-relaxed">Plan café study sessions with friends. Find the perfect spot. Let the coin decide.</p>
            <div className="flex gap-3 flex-wrap">
              <Link href="#order" className="bg-espresso text-cream px-7 py-3.5 rounded-full text-sm font-medium hover:bg-latte transition-all duration-300 flex items-center gap-2">Download for iOS <span>→</span></Link>
              <Link href="#menu" className="border-2 border-foam text-espresso px-7 py-3.5 rounded-full text-sm hover:bg-foam transition-all duration-300">See the menu</Link>
            </div>
          </div>
          <div className={`transition-all duration-700 delay-400 ${v ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <div className="flex gap-8 mt-12 pt-8 border-t border-foam">
              {[{n:'3', l:'steps'}, {n:'100+', l:'cafés'}, {n:'1', l:'coin flip'}].map(s => (
                <div key={s.l}>
                  <div className="font-serif text-2xl text-espresso">{s.n}</div>
                  <div className="text-xs text-gray-400 mt-0.5 uppercase tracking-wider">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className={`transition-all duration-1000 delay-500 flex-shrink-0 ${v ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
          <div className="relative">
            <div className="absolute inset-0 bg-foam rounded-full scale-110 opacity-50" />
            <Image src="/mascot.png" alt="StudyDate mascot" width={280} height={280} className="relative hover:scale-105 transition-transform duration-500" />
          </div>
        </div>
      </div>
      <div className="mt-20 border-t-2 border-dashed border-foam pt-6 flex items-center justify-between text-xs text-gray-300 uppercase tracking-widest">
        <span>Est. 2024</span>
        <span className="font-serif text-espresso/20 text-lg italic">good coffee · good company</span>
        <span>Free forever</span>
      </div>
    </section>
  );
}
