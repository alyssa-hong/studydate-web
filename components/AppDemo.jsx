'use client';
import { useState, useEffect, useRef } from 'react';
function FadeIn({ children, delay = 0 }) {
  const ref = useRef(null);
  const [v, setV] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setV(true); }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return <div ref={ref} style={{ transitionDelay: `${delay}ms` }} className={`transition-all duration-700 ${v ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>{children}</div>;
}
const demos = [
  { id: 'discovery', label: 'Find cafés', tag: 'Smart', desc: 'Discover cafés halfway between you and your friends — real photos, ratings, and hours powered by Google Places.', video: '/videos/discovery.mp4' },
  { id: 'coinflip', label: 'Coin flip', tag: 'Fan fave', desc: 'Both pick your favorite café and let StudyDate decide with a dramatic coin flip reveal animation.', video: '/videos/coinflip.mp4' },
  { id: 'newdate', label: 'Plan a date', tag: 'New', desc: 'Invite one friend or a whole group. Pick a date and time — invites go out instantly with push notifications.', video: '/videos/newdate.mp4' },
  { id: 'cafedetail', label: 'Café details', tag: 'Powered', desc: 'Real photos, Google reviews, opening hours, phone number and website — everything you need to decide.', video: '/videos/cafedetail.mp4' },
];
function PhoneFrame({ video }) {
  return (
    <div className="relative w-[240px] h-[500px] flex-shrink-0 mx-auto">
      <div className="absolute inset-0 bg-espresso rounded-[40px] shadow-2xl" />
      <div className="absolute inset-[9px] bg-black rounded-[32px] overflow-hidden">
        <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-20 h-5 bg-black rounded-full z-10" />
        {video ? (<video key={video} autoPlay loop muted playsInline className="w-full h-full object-cover"><source src={video} type="video/mp4" /></video>) : (<div className="w-full h-full bg-cream flex flex-col items-center justify-center gap-3 px-6 text-center"><p className="font-serif text-espresso text-sm">Add your video to public/videos/</p></div>)}
      </div>
      <div className="absolute left-[-3px] top-[90px] w-1 h-7 bg-espresso rounded-l-full opacity-70" />
      <div className="absolute left-[-3px] top-[132px] w-1 h-12 bg-espresso rounded-l-full opacity-70" />
      <div className="absolute left-[-3px] top-[154px] w-1 h-12 bg-espresso rounded-l-full opacity-70" />
      <div className="absolute right-[-3px] top-[118px] w-1 h-16 bg-espresso rounded-r-full opacity-70" />
    </div>
  );
}
export default function AppDemo() {
  const [active, setActive] = useState(demos[0]);
  return (
    <section className="max-w-5xl mx-auto px-6 py-24 border-t-2 border-dashed border-foam">
      <FadeIn>
        <div className="text-center mb-16">
          <p className="text-latte text-xs tracking-widest uppercase mb-3 flex items-center justify-center gap-2"><span className="w-8 h-px bg-latte inline-block" />See it in action<span className="w-8 h-px bg-latte inline-block" /></p>
          <h2 className="font-serif text-5xl md:text-6xl text-espresso mb-4">Watch how it <span className="italic text-latte">works</span></h2>
          <p className="text-gray-400 max-w-md mx-auto leading-relaxed">A few seconds is worth a thousand screenshots.</p>
        </div>
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="flex-1 w-full order-2 lg:order-1">
            <div className="flex flex-col gap-3 mb-8">
              {demos.map((demo) => (<button key={demo.id} onClick={() => setActive(demo)} className={`text-left px-6 py-5 rounded-2xl transition-all duration-200 border-2 ${active.id === demo.id ? 'bg-espresso border-espresso' : 'bg-white border-foam hover:border-latte'}`}><div className="flex items-center justify-between mb-1"><p className={`font-serif text-lg ${active.id === demo.id ? 'text-cream' : 'text-espresso'}`}>{demo.label}</p><span className={`text-xs px-2.5 py-0.5 rounded-full font-medium ${active.id === demo.id ? 'bg-latte/30 text-latte' : 'bg-foam text-latte'}`}>{demo.tag}</span></div>{active.id === demo.id && <p className="text-white/60 text-sm leading-relaxed mt-2">{demo.desc}</p>}</button>))}
            </div>
          </div>
          <div className="order-1 lg:order-2"><PhoneFrame video={active.video} /></div>
        </div>
      </FadeIn>
    </section>
  );
}
