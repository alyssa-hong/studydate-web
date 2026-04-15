import Link from 'next/link';
export default function Footer() {
  return (
    <footer className="bg-espresso text-cream">
      <div className="max-w-5xl mx-auto px-6 pt-16 pb-10">
        <div className="border-b border-white/10 pb-12 mb-10 flex flex-col md:flex-row justify-between gap-10">
          <div className="max-w-xs">
            <div className="flex items-center gap-2 font-serif text-2xl mb-4">☕ StudyDate</div>
            <p className="text-white/40 text-sm leading-relaxed">The app that makes studying feel like something to look forward to. Plan sessions, find cafés, flip the coin.</p>
          </div>
          <div className="flex gap-16">
            <div>
              <p className="text-xs text-white/30 uppercase tracking-widest mb-5">Product</p>
              <div className="flex flex-col gap-3 text-sm text-white/60">
                <Link href="#menu" className="hover:text-cream transition-colors">Menu</Link>
                <Link href="#specials" className="hover:text-cream transition-colors">Specials</Link>
                <Link href="#order" className="hover:text-cream transition-colors">Download</Link>
              </div>
            </div>
            <div>
              <p className="text-xs text-white/30 uppercase tracking-widest mb-5">Community</p>
              <div className="flex flex-col gap-3 text-sm text-white/60">
                <a href="https://discord.gg/studydate" className="hover:text-cream transition-colors">Discord</a>
                <a href="https://github.com/alyssa-hong" className="hover:text-cream transition-colors">GitHub</a>
              </div>
            </div>
            <div>
              <p className="text-xs text-white/30 uppercase tracking-widest mb-5">Legal</p>
              <div className="flex flex-col gap-3 text-sm text-white/60">
                <Link href="/privacy" className="hover:text-cream transition-colors">Privacy</Link>
                <Link href="/terms" className="hover:text-cream transition-colors">Terms</Link>
                <a href="mailto:hello@studydate.app" className="hover:text-cream transition-colors">Contact</a>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/20 text-xs">© 2026 StudyDate · Made with ☕ for students everywhere</p>
          <p className="text-white/20 text-xs font-serif italic">studying is better together</p>
        </div>
      </div>
    </footer>
  );
}
