import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import Footer from './components/Footer';
import QuoteForm from './components/QuoteForm';

function App() {
  const [isQuoteFormOpen, setIsQuoteFormOpen] = useState(false);

  return (
    <div className="min-h-screen bg-black">
      <Header onQuoteClick={() => setIsQuoteFormOpen(true)} />
      <Hero onQuoteClick={() => setIsQuoteFormOpen(true)} />
      <About />
      <Services />
      <Pricing onQuoteClick={() => setIsQuoteFormOpen(true)} />
      <Contact />
      <Footer />
      <QuoteForm isOpen={isQuoteFormOpen} onClose={() => setIsQuoteFormOpen(false)} />
    </div>
  );
}

export default App;
