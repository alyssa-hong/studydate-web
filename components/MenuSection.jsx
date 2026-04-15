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
const items = [
  { name: 'One on One Date', desc: 'Just you and one friend. Pick a café together, or let the coin decide.', price: 'Free', tag: 'Popular' },
  { name: 'Group StudyDate', desc: 'Invite the whole crew. Everyone picks, one café wins.', price: 'Free', tag: 'New' },
  { name: 'Café Discovery', desc: 'Find cafés right in the middle of your locations. Powered by Google Places.', price: 'Free', tag: null },
  { name: 'The Coin Flip', desc: 'Both pick your favorite. Our coin flip reveal animation decides the winner.', price: 'Free', tag: 'Fan fave' },
  { name: 'Favorites Collection', desc: 'Save the spots you love. Build your personal café collection over time.', price: 'Free', tag: null },
  { name: 'Map View', desc: 'Browse every café on an interactive map before you commit.', price: 'Free', tag: null },
];
export default function MenuSection() {
  return (
    <section id="menu" className="max-w-5xl mx-auto px-6 py-24">
      <FadeIn>
        <div className="text-center mb-16">
          <p className="text-latte text-xs tracking-widest uppercase mb-3 flex items-center justify-center gap-2"><span className="w-8 h-px bg-latte inline-block" />Today's Menu<span className="w-8 h-px bg-latte inline-block" /></p>
          <h2 className="font-serif text-5xl md:text-6xl text-espresso mb-4">What we are <span className="italic text-latte">serving</span></h2>
          <p className="text-gray-400 max-w-md mx-auto leading-relaxed">Everything on the menu is free. No hidden fees. No subscription. Just good study sessions.</p>
        </div>
      </FadeIn>
      <FadeIn delay={100}>
        <div className="border-2 border-dashed border-foam rounded-3xl overflow-hidden">
          <div className="bg-espresso px-8 py-4 flex items-center justify-between">
            <span className="font-serif text-cream text-lg italic">StudyDate Café</span>
            <span className="text-cream/40 text-xs uppercase tracking-widest">All items · Free</span>
          </div>
          {items.map((item, i) => (
            <div key={item.name} className={`flex items-start justify-between px-8 py-6 gap-6 hover:bg-foam/50 transition-colors duration-200 ${i < items.length - 1 ? 'border-b border-dashed border-foam' : ''}`}>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-1.5">
                  <h3 className="font-serif text-xl text-espresso">{item.name}</h3>
                  {item.tag && (<span className="text-xs bg-latte/15 text-latte px-2.5 py-0.5 rounded-full font-medium">{item.tag}</span>)}
                </div>
                <p className="text-gray-400 text-sm leading-relaxed max-w-md">{item.desc}</p>
              </div>
              <div className="flex-shrink-0 font-serif text-xl text-matcha">{item.price}</div>
            </div>
          ))}
          <div className="bg-foam/50 px-8 py-4 border-t border-dashed border-foam">
            <p className="text-center text-xs text-gray-400 italic font-serif">Everything tastes better when you are studying with friends</p>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
