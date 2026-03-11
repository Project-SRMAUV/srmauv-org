import { useState } from "react";
import SectionWrapper from "./SectionWrapper";
import SectionHeading from "./SectionHeading";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

import auvTesting from "@/assets/gallery/auv-testing.png";
import teamPhoto from "@/assets/gallery/team-photo.png";
import awardCeremony from "@/assets/gallery/award-ceremony.png";
import competitionDay from "@/assets/gallery/competition-day.png";
import labWorkshop from "@/assets/gallery/lab-workshop.png";
import labWorkshop1 from "@/assets/gallery/lab-workshop-1.png";
import labWorkshop2 from "@/assets/gallery/lab-workshop-2.png";
import poolTrials from "@/assets/gallery/pool-trials.png";
import poolTrials1 from "@/assets/gallery/pool-trials-1.png";
import poolTrials2 from "@/assets/gallery/pool-trials-2.png";

const galleryItems = [
  { title: "AUV Testing", image: auvTesting, lightboxImages: [auvTesting] },
  { title: "Team Photo", image: teamPhoto, lightboxImages: [teamPhoto] },
  { title: "Award Ceremony", image: awardCeremony, lightboxImages: [awardCeremony] },
  { title: "Competition Day", image: competitionDay, lightboxImages: [competitionDay] },
  { title: "Lab Workshop", image: labWorkshop, lightboxImages: [labWorkshop1, labWorkshop2] },
  { title: "Pool Trials", image: poolTrials, lightboxImages: [poolTrials1, poolTrials2] },
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
            className="relative aspect-video rounded-xl overflow-hidden group cursor-pointer border border-border/30 hover:glow-aqua transition-all duration-500"
          >
            <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-deep/50 group-hover:bg-deep/30 transition-colors duration-300 flex items-end p-3">
              <span className="font-orbitron text-xs md:text-sm font-semibold text-foreground/90">
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
            <div className={`flex ${galleryItems[selected].lightboxImages.length > 1 ? 'gap-4 flex-col md:flex-row' : ''} items-center justify-center max-w-full max-h-[80vh]`}>
              {galleryItems[selected].lightboxImages.map((img, idx) => (
                <img
                  key={idx}
                  src={img}
                  alt={`${galleryItems[selected].title} ${idx + 1}`}
                  className="max-h-[80vh] rounded-2xl object-contain glow-aqua-strong"
                  style={{ maxWidth: galleryItems[selected].lightboxImages.length > 1 ? '48%' : '100%' }}
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </SectionWrapper>
  );
};

export default Gallery;
