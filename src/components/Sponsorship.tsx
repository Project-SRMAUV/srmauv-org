import SectionWrapper from "./SectionWrapper";
import SectionHeading from "./SectionHeading";
import { motion } from "framer-motion";

const sponsors = ["SRM University", "NVIDIA", "Altium", "SolidWorks", "Intel", "MathWorks"];

const Sponsorship = () => (
  <SectionWrapper id="sponsorship" className="section-gradient">
    <SectionHeading title="Sponsorship" subtitle="Partner With Innovation" />
    <div className="max-w-2xl mx-auto text-center mb-12">
      <p className="text-muted-foreground text-lg leading-relaxed">
        Support the next generation of engineers pushing the boundaries of underwater autonomy.
        Your partnership directly fuels groundbreaking research, competition participation, and
        student-led innovation.
      </p>
    </div>

    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
      {sponsors.map((s, i) => (
        <motion.div
          key={s}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.08 }}
          className="glass-card p-6 flex items-center justify-center hover:glow-aqua transition-all duration-500"
        >
          <span className="font-orbitron text-xs font-semibold text-muted-foreground">{s}</span>
        </motion.div>
      ))}
    </div>

    <div className="text-center">
      <button className="px-8 py-4 rounded-lg font-semibold bg-gradient-to-r from-ocean to-accent text-foreground glow-aqua hover:glow-aqua-strong transition-all duration-300 hover:scale-105">
        Become a Sponsor
      </button>
    </div>
  </SectionWrapper>
);

export default Sponsorship;
