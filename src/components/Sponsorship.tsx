import SectionWrapper from "./SectionWrapper";
import SectionHeading from "./SectionHeading";
import { motion } from "framer-motion";

const institutional = ["SRM Institute of Science and Technology", "Directorate of Sports, SRMIST", "Government of India", "National Institute of Ocean Technology", "IEEE Oceanic Engineering Society"];
import nvidiaLogo from "@/assets/sponsors/nvidia.png";
import blueroboticsLogo from "@/assets/sponsors/bluerobotics.png";
import solidworksLogo from "@/assets/sponsors/solidworks.png";
import altiumLogo from "@/assets/sponsors/altium.png";
import pcbpowerLogo from "@/assets/sponsors/pcbpower.png";
import matlabLogo from "@/assets/sponsors/matlab.png";
import waterlinkedLogo from "@/assets/sponsors/waterlinked.png";
import navicomLogo from "@/assets/sponsors/navicom.png";

const industry = [
  { name: "NVIDIA", logo: nvidiaLogo, size: "h-14 md:h-18" },
  { name: "Blue Robotics", logo: blueroboticsLogo, size: "h-14 md:h-18" },
  { name: "Dassault Systèmes SOLIDWORKS", logo: solidworksLogo },
  { name: "Altium", logo: altiumLogo, size: "h-14 md:h-18" },
  { name: "PCB Power Market", logo: pcbpowerLogo },
  { name: "MATLAB", logo: matlabLogo, size: "h-14 md:h-18" },
  { name: "Water Linked", logo: waterlinkedLogo },
  { name: "Navicom Technology International", logo: navicomLogo },
];

const benefits = [
  "Direct engagement with high-performing multidisciplinary engineering talent",
  "Brand visibility at international competitions and national exhibitions",
  "Exposure across conferences, exhibitions, and research publications",
  "Access to a recruitment pipeline trained in real-world robotics system integration",
];

const Sponsorship = () => (
  <SectionWrapper id="sponsorship" className="section-gradient">
    <SectionHeading title="Support & Sponsorship" subtitle="Partner With Innovation" />

    <div className="max-w-3xl mx-auto text-center mb-12">
      <p className="text-muted-foreground text-lg leading-relaxed">
        With over a decade of structured engineering cycles, international representation, and
        industry collaboration, Team SRM AUV offers credibility, continuity, and measurable
        technical impact.
      </p>
    </div>

    {/* Institutional Support */}
    <h3 className="font-orbitron font-semibold text-center text-lg mb-6">Institutional & Government Support</h3>
    <div className="flex flex-wrap justify-center gap-4 mb-12 max-w-4xl mx-auto">
      {institutional.map((s, i) => (
        <motion.div
          key={s}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.06 }}
          className="glass-card p-4 flex items-center justify-center hover:glow-aqua transition-all duration-500 w-[calc(33.333%-1rem)] min-w-[140px]"
        >
          <span className="font-orbitron text-xs font-semibold text-muted-foreground text-center leading-tight">{s}</span>
        </motion.div>
      ))}
    </div>

    {/* Industry Sponsors */}
    <h3 className="font-orbitron font-semibold text-center text-lg mb-6">Industry & Technical Sponsors</h3>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16 max-w-4xl mx-auto">
      {industry.map((s, i) => (
        <motion.div
          key={s.name}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.06 }}
          className="glass-card p-5 flex items-center justify-center hover:glow-aqua transition-all duration-500 bg-white/5"
        >
          <img src={s.logo} alt={s.name} className={`${s.size || "h-10 md:h-12"} object-contain max-w-full`} />
        </motion.div>
      ))}
    </div>

    {/* Why Partner */}
    <h3 className="font-orbitron font-semibold text-center text-lg mb-6">Why Partner With Us</h3>
    <div className="max-w-2xl mx-auto mb-12 pl-8 md:pl-16">
      <ul className="space-y-3">
        {benefits.map((b) => (
          <li key={b} className="text-muted-foreground text-sm flex items-start gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0" />
            {b}
          </li>
        ))}
      </ul>
    </div>

    <div className="text-center">
      <p className="text-muted-foreground italic mb-6">Together, we engineer depths and navigate future.</p>
      <button className="px-8 py-4 rounded-lg font-semibold bg-gradient-to-r from-ocean to-accent text-foreground glow-aqua hover:glow-aqua-strong transition-all duration-300 hover:scale-105">
        Become a Sponsor
      </button>
    </div>
  </SectionWrapper>
);

export default Sponsorship;
