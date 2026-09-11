import { BookOpen, Heart, Sparkles, Feather } from "lucide-react";
import { motion } from "framer-motion";
import { author } from "../data/siteContent";
import ScrollReveal from "./ScrollReveal";

export default function StorySection() {
  return (
    <section
      id="story"
      className="relative py-32 bg-cream overflow-hidden scroll-mt-20"
    >
      {/* Decorative subtle texture */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-burgundy/5 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold/10 rounded-full blur-[100px]" />

      <div className="relative max-w-5xl mx-auto px-6">
        <ScrollReveal animation="fadeUp">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="w-8 h-[1px] bg-burgundy" />
              <Feather size={14} className="text-burgundy" />
              <span className="text-xs tracking-[0.4em] uppercase text-burgundy font-bold">
                The Story
              </span>
              <Feather size={14} className="text-burgundy" />
              <div className="w-8 h-[1px] bg-burgundy" />
            </div>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-burgundy">
              Behind Every Story
            </h2>
            <div className="w-24 h-[2px] bg-gold mx-auto mt-6" />
          </div>
        </ScrollReveal>

        <ScrollReveal animation="fadeUp" delay={0.2}>
          <div className="space-y-6 text-espresso leading-relaxed">
            <p className="text-lg md:text-xl text-center max-w-3xl mx-auto font-serif italic">
              "{author.mission}"
            </p>
          </div>
        </ScrollReveal>

        {/* Alternating story cards */}
        <div className="grid md:grid-cols-2 gap-8 mt-16">
          <ScrollReveal animation="slideRight" delay={0.3}>
            <div className="bg-white/60 border-l-4 border-burgundy p-8 h-full">
              <BookOpen size={24} className="text-burgundy mb-4" />
              <h3 className="font-serif text-2xl font-bold text-burgundy mb-3">
                Stories Born from Experience
              </h3>
              <p className="text-espresso/80 text-sm leading-relaxed">
                Nejla lived through the Iran-Iraq War and knows the wounds of
                explosion, the smell of fresh blood, and the value of life. Her
                stories carry the weight of real experience and the hope of
                survival.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="slideLeft" delay={0.4}>
            <div className="bg-white/60 border-l-4 border-gold p-8 h-full">
              <Heart size={24} className="text-gold mb-4" />
              <h3 className="font-serif text-2xl font-bold text-burgundy mb-3">
                Fighters, Not Victims
              </h3>
              <p className="text-espresso/80 text-sm leading-relaxed">
                The characters in her stories are not victims — they are
                fighters with great hope, fighting to win but fighting to live.
                Nejla's stories celebrate life not as it is, but as it should
                be.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
