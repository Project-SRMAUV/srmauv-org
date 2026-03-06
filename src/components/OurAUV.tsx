import SectionWrapper from "./SectionWrapper";
import SectionHeading from "./SectionHeading";
import { motion } from "framer-motion";
import sednaImg from "@/assets/vehicles/sedna.png";
import alpheusImg from "@/assets/vehicles/alpheus.png";
import zarnaImg from "@/assets/vehicles/zarna.png";
import vatkhdImg from "@/assets/vehicles/vatkhd.png";

const vehicles = [
  { year: "2014–2016", name: "Sedna", desc: "Established foundational underwater navigation and multi-axis control systems.", img: sednaImg },
  { year: "—", name: "Alpheus", desc: "Improved structural robustness and subsystem coordination, enhancing maneuverability and reliability.", img: alpheusImg },
  { year: "—", name: "Zarna", desc: "Advanced mission readiness with enhanced sensing capabilities and structured task execution mechanisms.", img: zarnaImg },
  { year: "2023–2024", name: "Vatkhd", desc: "Focused on navigation refinement, perception enhancement, and structured validation cycles under real-world aquatic constraints.", img: vatkhdImg },
  { year: "2025–2026", name: "NEMO", desc: "Current generation platform emphasizing modular architecture, distributed software systems, and scalable research integration.", current: true },
];

const OurAUV = () => (
  <SectionWrapper id="our-auv">
    <SectionHeading title="Vehicle Generations" subtitle="Each platform represents measurable advancement in system capability" />

    <div className="relative max-w-3xl mx-auto">
      {/* Vertical line */}
      <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-ocean via-aqua to-ocean/30" />

      {vehicles.map((v, i) => {
        // Sedna (0), Zarna (2), NEMO (4) = even → left side of timeline (text on right/left-aligned)
        // Alpheus (1), Vatkhd (3) = odd → right side of timeline (text on left/right-aligned)
        const isEven = i % 2 === 0;

        return (
          <motion.div
            key={v.name}
            initial={{ opacity: 0, x: isEven ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.12, duration: 0.5 }}
            className={`relative flex items-start mb-12 ${isEven ? "md:flex-row-reverse" : "md:flex-row"} flex-row`}
          >
            <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-accent glow-aqua-strong z-10 mt-1" />
            <div className={`ml-12 md:ml-0 md:w-[45%] ${isEven ? "md:pl-12 md:text-left" : "md:pr-12 md:text-right"}`}>
              {v.year !== "—" && <span className="font-orbitron text-accent text-sm font-bold">{v.year}</span>}
              <h4 className="font-orbitron font-semibold text-xl mt-1 flex items-center gap-3 justify-start">
                {v.name}
                {v.current && (
                  <span className="text-xs bg-accent/20 text-accent px-2 py-0.5 rounded-full font-normal">Current</span>
                )}
              </h4>
              {v.img && (
                <div className="mt-3 rounded-lg overflow-hidden border border-border/30">
                  <img src={v.img} alt={v.name} className="w-full h-32 object-cover" />
                </div>
              )}
              <p className="text-muted-foreground text-sm mt-2">{v.desc}</p>
            </div>
          </motion.div>
        );
      })}
    </div>
  </SectionWrapper>
);

export default OurAUV;
