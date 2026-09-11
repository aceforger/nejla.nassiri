import { useState, useEffect } from "react";
import { Quote } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { quotes } from "../data/siteContent";

export default function QuoteCarousel() {
  const [currentQuote, setCurrentQuote] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % quotes.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative py-24 bg-dark-brown overflow-hidden">
      {/* Decorative quote marks */}
      <div className="absolute top-10 left-10 text-[200px] font-serif text-burgundy/20 leading-none select-none">
        "
      </div>
      <div className="absolute bottom-0 right-10 text-[200px] font-serif text-burgundy/20 leading-none select-none rotate-180">
        "
      </div>

      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <Quote size={32} className="text-gold mx-auto mb-8" />

        <div className="min-h-[200px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.blockquote
              key={currentQuote}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <p className="font-serif text-2xl md:text-3xl lg:text-4xl text-ivory italic leading-relaxed">
                "{quotes[currentQuote].text}"
              </p>
              <footer className="text-gold text-sm uppercase tracking-[0.3em] font-bold">
                — {quotes[currentQuote].author}
              </footer>
            </motion.blockquote>
          </AnimatePresence>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-3 mt-10">
          {quotes.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentQuote(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                currentQuote === index
                  ? "bg-gold w-8"
                  : "bg-cream/30 hover:bg-cream/60"
              }`}
              aria-label={`Show quote ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
