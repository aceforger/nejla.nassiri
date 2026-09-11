import { useState, useEffect } from "react";
import { Menu, X, Feather, Mail, LeafIcon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { author, navLinks } from "../data/siteContent";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    setOpen(false);
    const element = document.getElementById(sectionId);
    if (element) element.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const scrollToTop = () => {
    setOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-dark-brown/95 backdrop-blur-md shadow-lg shadow-black/40 border-b border-burgundy/40"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <button onClick={scrollToTop} className="group flex items-center gap-3">
          <div className="relative w-11 h-11 rounded-full border-2 border-gold/60 flex items-center justify-center bg-burgundy/20 group-hover:border-gold transition-colors">
            <LeafIcon size={20} className="text-gold" />
          </div>
          <div className="text-left">
            <span className="font-serif text-lg md:text-xl font-bold text-ivory leading-none block">
              Nejla <span className="text-gold italic">Nassiri</span>
            </span>
            <p className="text-[8px] md:text-[9px] text-cream/50 uppercase tracking-[0.35em] mt-1">
              Author
            </p>
          </div>
        </button>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <button
              key={link.sectionId}
              onClick={() => scrollToSection(link.sectionId)}
              className="relative px-4 py-2 font-serif text-sm font-bold text-ivory/99 hover:text-gold transition-colors group"
            >
              {link.label}
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-gold group-hover:w-full transition-all duration-300" />
            </button>
          ))}
        </div>

        {/* Contact button */}
        <a
          href={`mailto:${author.email}`}
          className="hidden md:flex items-center gap-2 bg-burgundy hover:bg-copper text-ivory px-5 py-2.5 rounded-full text-xs font-bold transition-all shadow-lg shadow-burgundy/30"
        >
          <Mail size={14} />
          Contact
        </a>

        {/* Mobile button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-ivory p-2"
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-dark-brown/98 backdrop-blur-md border-t border-burgundy/30 overflow-hidden"
          >
            <div className="px-6 py-6 space-y-2">
              {navLinks.map((link) => (
                <button
                  key={link.sectionId}
                  onClick={() => scrollToSection(link.sectionId)}
                  className="flex items-center gap-3 font-serif text-base font-bold text-ivory/70 hover:text-gold py-3 px-3 rounded-lg hover:bg-burgundy/20 transition-colors w-full text-left"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                  {link.label}
                </button>
              ))}
              <div className="h-[1px] bg-burgundy/30 my-4" />
              <a
                href={`mailto:${author.email}`}
                className="flex items-center gap-3 font-serif text-base font-bold text-ivory py-3 px-3 rounded-lg bg-burgundy"
              >
                <Mail size={16} />
                Contact Nejla
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
