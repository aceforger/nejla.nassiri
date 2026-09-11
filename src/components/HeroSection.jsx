import { ArrowRight, BookOpen, Quote } from "lucide-react";
import { motion } from "framer-motion";
import { author } from "../data/siteContent";

export default function HeroSection() {
  const scrollToBook = () => {
    const el = document.getElementById("book");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Cinematic autumn forest background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('/images/tara-hero2.png')`,
        }}
      />

      {/* Dark gradient overlay - lighter for better background visibility */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(26,16,12,0.55) 0%, rgba(26,16,12,0.35) 50%, rgba(26,16,12,0.15) 100%)",
        }}
      />

      {/* Subtle vignette top and bottom - lighter */}
      <div className="absolute inset-0 bg-gradient-to-t from-dark-brown/50 via-transparent to-dark-brown/30" />

      <div className="relative max-w-4xl mx-auto px-6 py-32 z-10 w-full text-center">
        {/* Top accent line */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="flex items-center justify-center gap-4 mb-8"
        >
          <div className="w-16 h-[2px] bg-gold" />
          <span className="text-xs tracking-[0.4em] uppercase text-gold font-bold">
            A Novel by Nejla Nassiri
          </span>
          <div className="w-16 h-[2px] bg-gold" />
        </motion.div>

        {/* Main title - Book title */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 1, ease: "easeOut" }}
          className="font-serif text-6xl md:text-7xl lg:text-8xl font-bold text-ivory mb-4 leading-none tracking-tight drop-shadow-2xl"
        >
          Tara
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="font-serif text-xl md:text-2xl text-cream italic mb-8 leading-relaxed max-w-2xl mx-auto drop-shadow-lg"
        >
          A story of hope, secrets, and the courage to fight for life.
        </motion.p>

        {/* Author line */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="flex items-center justify-center gap-3 mb-10"
        >
          <div className="w-2 h-2 rounded-full bg-gold" />
          <p className="text-sm text-cream/80 uppercase tracking-[0.2em]">
            {author.name}
          </p>
          <div className="w-2 h-2 rounded-full bg-gold" />
        </motion.div>

        {/* CTA buttons - centered */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button
            onClick={scrollToBook}
            className="inline-flex items-center justify-center gap-2 bg-burgundy hover:bg-copper text-ivory px-8 py-4 font-bold text-sm transition-all shadow-2xl shadow-burgundy/40 hover:scale-105"
          >
            <BookOpen size={18} />
            Discover Tara
            <ArrowRight size={16} />
          </button>

          <a
            href="#author"
            onClick={(e) => {
              e.preventDefault();
              const el = document.getElementById("author");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            className="inline-flex items-center justify-center gap-2 border-2 border-cream/40 hover:border-gold text-cream hover:text-gold px-8 py-4 font-bold text-sm transition-all backdrop-blur-sm bg-dark-brown/20"
          >
            <Quote size={16} />
            Meet Nejla
          </a>
        </motion.div>
      </div>
    </section>
  );
}
