import { useState } from "react";
import { Mail, Send, CheckCircle, MapPin, BookOpen } from "lucide-react";
import { motion } from "framer-motion";
import { author } from "../data/siteContent";
import ScrollReveal from "./ScrollReveal";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("idle");

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("sending");
    setTimeout(() => {
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setStatus("idle"), 5000);
    }, 1500);
  };

  return (
    <section
      id="contact"
      className="relative py-32 bg-dark-brown overflow-hidden scroll-mt-20"
    >
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-burgundy/15 rounded-full blur-[120px]" />

      <div className="relative max-w-6xl mx-auto px-6">
        <ScrollReveal animation="fadeUp">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="w-8 h-[1px] bg-gold" />
              <Mail size={14} className="text-gold" />
              <span className="text-xs tracking-[0.4em] uppercase text-gold font-bold">
                Get in Touch
              </span>
              <Mail size={14} className="text-gold" />
              <div className="w-8 h-[1px] bg-gold" />
            </div>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-ivory">
              Contact <span className="text-gold italic">Nejla</span>
            </h2>
            <div className="w-24 h-[2px] bg-gold mx-auto mt-6" />
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-5 gap-10 items-start">
          {/* Left - Info */}
          <ScrollReveal
            animation="slideRight"
            delay={0.2}
            className="lg:col-span-2"
          >
            <div className="space-y-6">
              <div className="flex items-start gap-4 p-5 border border-gold/20 bg-burgundy/10">
                <div className="w-10 h-10 flex items-center justify-center border border-gold/40 flex-shrink-0">
                  <Mail size={18} className="text-gold" />
                </div>
                <div>
                  <p className="text-[10px] text-cream/50 uppercase tracking-wider font-bold mb-1">
                    Email
                  </p>
                  <a
                    href={`mailto:${author.email}`}
                    className="text-sm text-ivory hover:text-gold transition-colors"
                  >
                    {author.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 border border-gold/20 bg-burgundy/10">
                <div className="w-10 h-10 flex items-center justify-center border border-gold/40 flex-shrink-0">
                  <MapPin size={18} className="text-gold" />
                </div>
                <div>
                  <p className="text-[10px] text-cream/50 uppercase tracking-wider font-bold mb-1">
                    Origin
                  </p>
                  <p className="text-sm text-ivory">{author.born}</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 border border-gold/20 bg-burgundy/10">
                <div className="w-10 h-10 flex items-center justify-center border border-gold/40 flex-shrink-0">
                  <BookOpen size={18} className="text-gold" />
                </div>
                <div>
                  <p className="text-[10px] text-cream/50 uppercase tracking-wider font-bold mb-1">
                    Debut Novel
                  </p>
                  <p className="text-sm text-ivory">Tara</p>
                </div>
              </div>

              {/* Quote */}
              <div className="border-l-2 border-gold pl-5 mt-8">
                <p className="text-cream/80 italic text-sm leading-relaxed">
                  "{author.tagline}"
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Right - Form */}
          <ScrollReveal
            animation="slideLeft"
            delay={0.4}
            className="lg:col-span-3"
          >
            <form
              onSubmit={handleSubmit}
              className="bg-burgundy/10 border border-gold/20 p-8 space-y-6"
            >
              <div>
                <label className="block text-[10px] text-cream/60 uppercase tracking-[0.2em] font-bold mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                  className="w-full bg-dark-brown/50 border border-gold/20 px-4 py-3 text-ivory placeholder:text-cream/30 focus:outline-none focus:border-gold/60 transition-all"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label className="block text-[10px] text-cream/60 uppercase tracking-[0.2em] font-bold mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                  className="w-full bg-dark-brown/50 border border-gold/20 px-4 py-3 text-ivory placeholder:text-cream/30 focus:outline-none focus:border-gold/60 transition-all"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label className="block text-[10px] text-cream/60 uppercase tracking-[0.2em] font-bold mb-2">
                  Your Message
                </label>
                <textarea
                  rows={6}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  required
                  className="w-full bg-dark-brown/50 border border-gold/20 px-4 py-3 text-ivory placeholder:text-cream/30 focus:outline-none focus:border-gold/60 transition-all resize-none"
                  placeholder="Write your message..."
                />
              </div>

              <button
                type="submit"
                disabled={status === "sending" || status === "success"}
                className={`w-full inline-flex items-center justify-center gap-2 py-4 font-bold text-sm transition-all ${
                  status === "success"
                    ? "bg-green-700 text-ivory cursor-default"
                    : "bg-burgundy hover:bg-copper text-ivory shadow-xl shadow-burgundy/30 hover:scale-[1.02]"
                } disabled:opacity-50 disabled:cursor-not-allowed`}
              >
                {status === "sending" ? (
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity }}
                  >
                    <Send size={16} />
                  </motion.div>
                ) : status === "success" ? (
                  <CheckCircle size={16} />
                ) : (
                  <Send size={16} />
                )}
                {status === "idle"
                  ? "Send Message"
                  : status === "sending"
                    ? "Sending..."
                    : "Message Sent!"}
              </button>

              {status === "success" && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center text-sm text-gold font-medium"
                >
                  Thank you! Nejla will get back to you soon.
                </motion.p>
              )}
            </form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
