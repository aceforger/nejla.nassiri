import { Award, Briefcase, User, BookOpen } from "lucide-react";
import { motion } from "framer-motion";
import { author } from "../data/siteContent";
import ScrollReveal from "./ScrollReveal";

export default function AuthorSection() {
  return (
    <section
      id="author"
      className="relative py-32 bg-cream overflow-hidden scroll-mt-20"
    >
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-burgundy/5 rounded-full blur-[100px]" />

      <div className="relative max-w-6xl mx-auto px-6">
        <ScrollReveal animation="fadeUp">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="w-8 h-[1px] bg-burgundy" />
              <User size={14} className="text-burgundy" />
              <span className="text-xs tracking-[0.4em] uppercase text-burgundy font-bold">
                The Author
              </span>
              <User size={14} className="text-burgundy" />
              <div className="w-8 h-[1px] bg-burgundy" />
            </div>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-burgundy">
              {author.name}
            </h2>
            <p className="text-espresso/60 italic mt-3">{author.title}</p>
            <div className="w-24 h-[2px] bg-gold mx-auto mt-6" />
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Profile Photo */}
          <ScrollReveal
            animation="slideRight"
            delay={0.2}
            className="lg:col-span-2"
          >
            <div className="relative mx-auto max-w-xs">
              {/* Decorative frame */}
              <div className="absolute -inset-4 border-2 border-gold/40" />
              <div className="absolute -inset-8 border border-burgundy/20" />

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="relative w-full aspect-[3/4] overflow-hidden shadow-2xl"
              >
                <img
                  src="/images/profile.png"
                  alt={author.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = "none";
                    e.target.nextElementSibling.style.display = "flex";
                  }}
                />
                {/* Fallback SVG */}
                <div
                  className="absolute inset-0 bg-gradient-to-br from-cream to-parchment flex items-center justify-center"
                  style={{ display: "none" }}
                >
                  <div className="text-center">
                    <User size={80} className="text-burgundy/40 mx-auto" />
                    <p className="font-serif text-burgundy mt-4">
                      {author.name}
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </ScrollReveal>

          {/* Bio + Journey */}
          <ScrollReveal
            animation="slideLeft"
            delay={0.4}
            className="lg:col-span-3"
          >
            <div className="space-y-6">
              <p className="text-espresso leading-relaxed text-base">
                {author.bio}
              </p>
              <p className="text-espresso/80 leading-relaxed text-sm">
                {author.bioExtended}
              </p>

              {/* Journey timeline */}
              <div className="pt-6">
                <div className="flex items-center gap-2 mb-4">
                  <Briefcase size={16} className="text-gold" />
                  <h3 className="font-serif text-lg font-bold text-burgundy">
                    Professional Journey
                  </h3>
                </div>
                <div className="space-y-2">
                  {author.journey.map((item, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ x: 5 }}
                      className="flex items-center gap-4 bg-white/60 border-l-2 border-gold px-4 py-3"
                    >
                      <span className="text-xs font-bold text-gold min-w-[100px]">
                        {item.year}
                      </span>
                      <span className="text-sm text-espresso font-medium">
                        {item.role}
                      </span>
                      {item.place && (
                        <span className="text-xs text-espresso/50 ml-auto">
                          {item.place}
                        </span>
                      )}
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
