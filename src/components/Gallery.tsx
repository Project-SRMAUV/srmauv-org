import { useState } from "react";
import SectionWrapper from "./SectionWrapper";
import SectionHeading from "./SectionHeading";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const galleryItems = [
  { title: "AUV Testing", color: "from-ocean/40 to-aqua/20" },
  { title: "Competition Day", color: "from-blue-600/40 to-cyan-400/20" },
  { title: "Lab Workshop", color: "from-indigo-500/40 to-blue-400/20" },
  { title: "Team Photo", color: "from-teal-500/40 to-emerald-400/20" },
  { title: "Pool Trials", color: "from-cyan-600/40 to-sky-400/20" },
  { title: "Award Ceremony", color: "from-blue-500/40 to-violet-400/20" },
];

const Gallery = () => {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <SectionWrapper id="gallery">
      <SectionHeading title="Gallery" subtitle="Moments from our journey" />
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {galleryItems.map((item, i) => (
          <motion.button
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            onClick={() => setSelected(i)}
            className={`relative aspect-video rounded-xl overflow-hidden bg-gradient-to-br ${item.color} group cursor-pointer border border-border/30 hover:glow-aqua transition-all duration-500`}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="font-orbitron text-sm md:text-base font-semibold text-foreground/80 group-hover:scale-110 transition-transform duration-300">
                {item.title}
              </span>
            </div>
          </motion.button>
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selected !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-deep/90 backdrop-blur-lg flex items-center justify-center p-8"
            onClick={() => setSelected(null)}
          >
            <button className="absolute top-6 right-6 text-foreground hover:text-accent transition-colors">
              <X size={32} />
            </button>
            <div className={`w-full max-w-3xl aspect-video rounded-2xl bg-gradient-to-br ${galleryItems[selected].color} flex items-center justify-center glow-aqua-strong`}>
              <span className="font-orbitron text-2xl font-bold">{galleryItems[selected].title}</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </SectionWrapper>
  );
};

export default Gallery;
