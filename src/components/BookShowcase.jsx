import { useState, useEffect, useRef } from "react";
import {
  Star,
  X,
  Quote,
  ArrowRight,
  ShoppingBag,
  ExternalLink,
  BookOpen,
  Sparkles,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { featuredBook } from "../data/siteContent";
import ScrollReveal from "./ScrollReveal";

export default function BookShowcase() {
  const [showBack, setShowBack] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const scrollPositionRef = useRef(0);

  useEffect(() => {
    if (showModal) {
      scrollPositionRef.current = window.scrollY;
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      setTimeout(() => {
        window.scrollTo({
          top: scrollPositionRef.current,
          behavior: "instant",
        });
      }, 0);
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [showModal]);

  const book = featuredBook;

  return (
    <section
      id="book"
      className="relative py-32 bg-dark-brown overflow-hidden scroll-mt-20"
    >
      {/* Decorative glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-burgundy/15 rounded-full blur-[150px]" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Section header */}
        <ScrollReveal animation="fadeUp">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="w-8 h-[1px] bg-gold" />
              <Sparkles size={14} className="text-gold" />
              <span className="text-xs tracking-[0.4em] uppercase text-gold font-bold">
                The Book
              </span>
              <Sparkles size={14} className="text-gold" />
              <div className="w-8 h-[1px] bg-gold" />
            </div>
            {/* <h2 className="font-serif text-5xl md:text-6xl font-bold text-ivory">
              Tara
            </h2> */}
            <div className="w-32 h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mt-6" />
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-12 gap-16 items-center">
          {/* Left - Book cover */}
          <ScrollReveal
            animation="slideRight"
            delay={0.2}
            className="lg:col-span-5"
          >
            <div className="relative">
              {/* Book shadow */}
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-3/4 h-12 bg-black/60 rounded-full blur-2xl" />

              <div
                onClick={() => setShowBack(!showBack)}
                className="relative cursor-pointer group max-w-sm mx-auto"
              >
                <motion.div
                  whileHover={{ scale: 1.03, rotateY: 6 }}
                  transition={{ duration: 0.5 }}
                  className="relative rounded-sm overflow-hidden shadow-2xl border-2 border-burgundy/60"
                >
                  <AnimatePresence mode="wait">
                    {!showBack ? (
                      <motion.img
                        key="front"
                        src={book.coverFront}
                        alt={book.title}
                        initial={{ rotateY: 90, opacity: 0 }}
                        animate={{ rotateY: 0, opacity: 1 }}
                        exit={{ rotateY: -90, opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        className="w-full h-full object-cover aspect-[2/3]"
                      />
                    ) : (
                      <motion.img
                        key="back"
                        src={book.coverBack}
                        alt={`${book.title} back`}
                        initial={{ rotateY: -90, opacity: 0 }}
                        animate={{ rotateY: 0, opacity: 1 }}
                        exit={{ rotateY: 90, opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        className="w-full h-full object-cover aspect-[2/3]"
                      />
                    )}
                  </AnimatePresence>
                  {/* Subtle overlay for depth */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-black/20 via-transparent to-white/5 pointer-events-none" />
                </motion.div>

                <p className="text-center text-[10px] text-cream/40 mt-4 italic">
                  Click to {showBack ? "see front" : "see back"} cover
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Right - Book description */}
          <ScrollReveal
            animation="slideLeft"
            delay={0.4}
            className="lg:col-span-7"
          >
            <div className="space-y-6">
              <h3 className="font-serif text-4xl md:text-5xl font-bold text-gold">
                {book.title}
              </h3>
              <p className="text-cream italic text-lg">{book.subtitle}</p>

              <div className="w-16 h-[2px] bg-burgundy" />

              <p className="text-parchment leading-relaxed text-base md:text-lg">
                {book.description}
              </p>

              <p className="text-parchment/80 leading-relaxed text-sm md:text-base">
                {book.descriptionFull}
              </p>

              {/* Themes */}
              <div className="flex flex-wrap gap-2 pt-4">
                {book.themes.map((theme) => (
                  <span
                    key={theme}
                    className="px-3 py-1.5 border border-gold/30 text-gold text-xs font-medium tracking-wider uppercase"
                  >
                    {theme}
                  </span>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="pt-6 flex flex-wrap gap-4">
                <button
                  onClick={() => setShowModal(true)}
                  className="inline-flex items-center gap-2 bg-burgundy hover:bg-copper text-ivory px-8 py-4 font-bold text-sm transition-all shadow-xl shadow-burgundy/30 hover:scale-105"
                >
                  <BookOpen size={16} />
                  Purchase Tara
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* Purchase Modal */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-dark-brown/80 backdrop-blur-sm"
            onClick={() => setShowModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-dark-brown max-w-md w-full rounded-lg border-2 border-gold/40 shadow-2xl p-8"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <ShoppingBag size={18} className="text-gold" />
                  <span className="text-xs uppercase tracking-wider text-gold font-bold">
                    Purchase Tara
                  </span>
                </div>
                <button
                  onClick={() => setShowModal(false)}
                  className="text-cream/50 hover:text-gold transition-colors"
                >
                  <X size={22} />
                </button>
              </div>

              <p className="text-cream/70 text-sm mb-6 italic">
                Available in print and digital editions worldwide.
              </p>

              <div className="space-y-3">
                {book.purchaseLinks.map((link) => (
                  <motion.a
                    key={link.id}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex items-center justify-between w-full bg-burgundy hover:bg-copper text-ivory px-6 py-4 transition-all"
                  >
                    <div className="flex items-center gap-3">
                      <ShoppingBag size={16} />
                      <span className="font-bold text-sm">{link.name}</span>
                    </div>
                    <ExternalLink size={14} />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
