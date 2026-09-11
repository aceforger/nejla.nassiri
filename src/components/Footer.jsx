import { Feather, Mail, Rocket, Leaf } from "lucide-react";
import { author } from "../data/siteContent";

export default function Footer() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) element.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="bg-dark-brown border-t border-gold/20 py-16 text-center relative overflow-hidden">
      <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-burgundy/10 rounded-full blur-[100px]" />

      <div className="relative z-10 max-w-4xl mx-auto px-6">
        <Leaf size={24} className="text-gold mx-auto mb-4" />
        <p className="font-serif text-3xl font-bold text-ivory">
          {author.name}
        </p>
        <p className="text-xs text-cream/50 italic mt-2">{author.title}</p>

        <div className="flex justify-center gap-8 mt-8 flex-wrap">
          <button
            onClick={scrollToTop}
            className="text-cream/50 hover:text-gold transition-colors text-sm uppercase tracking-wider cursor-pointer"
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection("book")}
            className="text-cream/50 hover:text-gold transition-colors text-sm uppercase tracking-wider cursor-pointer"
          >
            Tara
          </button>
          <button
            onClick={() => scrollToSection("story")}
            className="text-cream/50 hover:text-gold transition-colors text-sm uppercase tracking-wider cursor-pointer"
          >
            Story
          </button>
          <button
            onClick={() => scrollToSection("author")}
            className="text-cream/50 hover:text-gold transition-colors text-sm uppercase tracking-wider cursor-pointer"
          >
            Author
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="text-cream/50 hover:text-gold transition-colors text-sm uppercase tracking-wider cursor-pointer"
          >
            Contact
          </button>
        </div>

        <a
          href={`mailto:${author.email}`}
          className="text-cream/50 hover:text-gold transition-colors text-sm mt-6 inline-flex items-center gap-2"
        >
          <Mail size={14} />
          {author.email}
        </a>

        {/* Divider */}
        <div className="flex items-center justify-center gap-3 my-8">
          <div className="w-16 h-[1px] bg-gold/30" />
          <div className="w-1.5 h-1.5 rotate-45 bg-gold/50" />
          <div className="w-16 h-[1px] bg-gold/30" />
        </div>

        {/* Stripe Payment */}
        <div className="flex justify-center">
          <a
            href="https://buy.stripe.com/7sY5kEdVm6vNfRU8Ey2kw07"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-burgundy via-copper to-burgundy text-ivory text-lg font-bold py-5 px-10 md:px-14 rounded-full shadow-2xl shadow-burgundy/40 transform transition-all duration-300 hover:scale-105 hover:shadow-gold/30 animate-pulse border border-gold/40"
          >
            <Rocket size={20} />
            Launch & Go-Live Portal
          </a>
        </div>

        <p className="text-cream/30 text-xs mt-8">
          © {new Date().getFullYear()} {author.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
