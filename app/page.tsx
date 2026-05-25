import Navbar from '@/components/navbar';
import Hero from '@/components/hero';
import Stats from '@/components/stats';
import Services from '@/components/services';
import Process from '@/components/process';
import Testimonials from '@/components/testimonials';
import FAQ from '@/components/faq';
import Contact from '@/components/contact';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Stats />
      <Services />
      <Process />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}
