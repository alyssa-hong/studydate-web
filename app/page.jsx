import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import MenuSection from '@/components/MenuSection';
import Specials from '@/components/Specials';
import AppDemo from '@/components/AppDemo';
import HowItWorks from '@/components/HowItWorks';
import Testimonials from '@/components/Testimonials';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';
export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <MenuSection />
        <Specials />
        <AppDemo />
        <HowItWorks />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
