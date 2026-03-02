import SectionWrapper from "./SectionWrapper";
import SectionHeading from "./SectionHeading";
import { motion } from "framer-motion";

const institutional = ["SRM Institute of Science and Technology", "Directorate of Sports, SRMIST", "Government of India", "National Institute of Ocean Technology", "IEEE Oceanic Engineering Society"];
const industry = ["NVIDIA", "Blue Robotics", "Dassault Systèmes SOLIDWORKS", "Altium", "PCB Power Market", "MATLAB", "Water Linked", "Navicom Technology International"];

const benefits = [
  "Direct engagement with high-performing multidisciplinary engineering talent",
  "Brand visibility at international competitions and national exhibitions",
  "Logo placement on vehicles, apparel, and technical documentation",
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
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 mb-12">
      {institutional.map((s, i) => (
        <motion.div
          key={s}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.06 }}
          className="glass-card p-4 flex items-center justify-center hover:glow-aqua transition-all duration-500"
        >
          <span className="font-orbitron text-[10px] font-semibold text-muted-foreground text-center leading-tight">{s}</span>
        </motion.div>
      ))}
    </div>

    {/* Industry Sponsors */}
    <h3 className="font-orbitron font-semibold text-center text-lg mb-6">Industry & Technical Sponsors</h3>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-16">
      {industry.map((s, i) => (
        <motion.div
          key={s}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.06 }}
          className="glass-card p-5 flex items-center justify-center hover:glow-aqua transition-all duration-500"
        >
          <span className="font-orbitron text-xs font-semibold text-muted-foreground text-center">{s}</span>
        </motion.div>
      ))}
    </div>

    {/* Why Partner */}
    <h3 className="font-orbitron font-semibold text-center text-lg mb-6">Why Partner With Us</h3>
    <div className="max-w-3xl mx-auto mb-12">
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
      <p className="text-muted-foreground italic mb-6">Together, we engineer depth and navigate the future.</p>
      <button className="px-8 py-4 rounded-lg font-semibold bg-gradient-to-r from-ocean to-accent text-foreground glow-aqua hover:glow-aqua-strong transition-all duration-300 hover:scale-105">
        Become a Sponsor
      </button>
    </div>
  </SectionWrapper>
);

export default Sponsorship;
