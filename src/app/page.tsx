import Footer from '@/components/layout/Footer';
import { Navbar } from '@/components/layout/Navbar';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { FeaturedServices } from '@/components/sections/FeaturedServices';

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <FeaturedServices />
      <Footer />
    </>
  );
}
