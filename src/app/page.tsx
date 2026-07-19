import Footer from '@/components/layout/Footer';
import { Navbar } from '@/components/layout/Navbar';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { FeaturedServices } from '@/components/sections/FeaturedServices';
import { Industries } from '@/components/sections/Industries';

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <FeaturedServices />
      <Industries />
      <Footer />
    </>
  );
}
