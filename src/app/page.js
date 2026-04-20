// Layout components (via index.js)
import Footer from './components/layout/Footer/Footer';
import Navbar from './components/layout/Navbar/Navbar';

// Section components (via index.js)
import { 
  Hero, About, BestSeller, Features, Products, 
  Testimonials, HowItWorks, CTA 
} from './components/sections';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <BestSeller />
      <Features />
      <Products />
      <Testimonials />
      <HowItWorks />
      <CTA />
      <Footer />
    </main>
  );
}