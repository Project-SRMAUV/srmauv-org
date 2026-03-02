import SectionWrapper from "./SectionWrapper";
import SectionHeading from "./SectionHeading";
import { motion } from "framer-motion";
import { Rocket } from "lucide-react";

const vehicles = [
  { year: "2014–2016", name: "Sedna", desc: "Established foundational underwater navigation and multi-axis control systems." },
  { year: "—", name: "Alpheus", desc: "Improved structural robustness and subsystem coordination, enhancing maneuverability and reliability." },
  { year: "—", name: "Zarna", desc: "Advanced mission readiness with enhanced sensing capabilities and structured task execution mechanisms." },
  { year: "2023–2024", name: "Vatkhd", desc: "Focused on navigation refinement, perception enhancement, and structured validation cycles under real-world aquatic constraints." },
  { year: "2025–2026", name: "NEMO", desc: "Current generation platform emphasizing modular architecture, distributed software systems, and scalable research integration.", current: true },
];

const OurAUV = () => (
  <SectionWrapper id="our-auv">
    <SectionHeading title="Vehicle Generations" subtitle="Each platform represents measurable advancement in system capability" />

    <div className="relative max-w-3xl mx-auto">
      {/* Vertical line */}
      <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-ocean via-aqua to-ocean/30" />

      {vehicles.map((v, i) => (
        <motion.div
          key={v.name}
          initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.12, duration: 0.5 }}
          className={`relative flex items-start mb-12 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} flex-row`}
        >
          <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-accent glow-aqua-strong z-10 mt-1" />
          <div className={`ml-12 md:ml-0 md:w-[45%] ${i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
            {v.year !== "—" && <span className="font-orbitron text-accent text-sm font-bold">{v.year}</span>}
            <h4 className="font-orbitron font-semibold text-xl mt-1 flex items-center gap-2 justify-start md:justify-inherit">
              {v.name}
              {v.current && (
                <span className="text-xs bg-accent/20 text-accent px-2 py-0.5 rounded-full font-normal">Current</span>
              )}
            </h4>
            <p className="text-muted-foreground text-sm mt-2">{v.desc}</p>
          </div>
        </motion.div>
      ))}
    </div>
  </SectionWrapper>
);

export default OurAUV;
