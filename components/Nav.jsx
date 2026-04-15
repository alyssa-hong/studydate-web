'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);
  return (
    <nav className={`sticky top-0 z-50 border-b border-foam transition-all duration-300 ${scrolled ? 'bg-cream/95 backdrop-blur-sm' : 'bg-cream'}`}>
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 bg-espresso rounded-xl flex items-center justify-center text-cream text-base transition-transform group-hover:rotate-12 duration-300">☕</div>
          <span className="font-serif text-xl text-espresso tracking-wide">StudyDate</span>
        </Link>
        <div className="hidden md:flex items-center gap-8 text-sm text-gray-400">
          <Link href="#menu" className="hover:text-espresso transition-colors">Menu</Link>
          <Link href="#specials" className="hover:text-espresso transition-colors">Specials</Link>
          <a href="https://discord.gg/studydate" className="hover:text-espresso transition-colors">Discord</a>
          <a href="https://github.com/alyssahong/StudyDate" className="hover:text-espresso transition-colors">GitHub</a>
        </div>
        <Link href="#order" className="hidden md:flex items-center gap-2 bg-espresso text-cream px-5 py-2.5 rounded-full text-sm font-medium hover:bg-latte transition-colors duration-300">Order now ↓</Link>
        <button className="md:hidden text-espresso text-xl" onClick={() => setOpen(!open)}>{open ? '✕' : '☰'}</button>
      </div>
      {open && (
        <div className="md:hidden bg-cream border-t border-foam px-6 py-6 flex flex-col gap-5 text-base">
          <Link href="#menu" className="text-gray-500 hover:text-espresso" onClick={() => setOpen(false)}>Menu</Link>
          <Link href="#specials" className="text-gray-500 hover:text-espresso" onClick={() => setOpen(false)}>Specials</Link>
          <a href="https://discord.gg/studydate" className="text-gray-500 hover:text-espresso">Discord</a>
          <a href="https://github.com/alyssahong/StudyDate" className="text-gray-500 hover:text-espresso">GitHub</a>
          <Link href="#order" className="bg-espresso text-cream px-5 py-3 rounded-full text-sm font-medium text-center" onClick={() => setOpen(false)}>Download the app</Link>
        </div>
      )}
    </nav>
  );
}
