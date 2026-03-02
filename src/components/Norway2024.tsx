import SectionWrapper from "./SectionWrapper";
import SectionHeading from "./SectionHeading";
import { motion } from "framer-motion";
import { Globe, Navigation, Eye, Brain, Wrench, CheckCircle } from "lucide-react";

const tasks = [
  { icon: Navigation, text: "High-precision navigation and closed-loop stabilization" },
  { icon: Eye, text: "Vision-based object detection and alignment" },
  { icon: Brain, text: "Autonomous decision-making in dynamic aquatic environments" },
  { icon: Wrench, text: "Seamless mechanical-electrical-software coordination" },
];

const outcomes = [
  "Strengthened validation frameworks",
  "Improved environmental adaptability",
  "Enhanced mission reliability metrics",
  "Integration of global best practices into the NEMO architecture",
];

const Norway2024 = () => (
  <SectionWrapper id="norway-2024">
    <SectionHeading title="International: Norway 2024" subtitle="Representing India at the Underwater Robotics Challenge" />

    <div className="max-w-4xl mx-auto">
      <div className="grid md:grid-cols-2 gap-6 mb-10">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="glass-card p-8"
        >
          <h3 className="font-orbitron font-semibold text-lg mb-5 flex items-center gap-2">
            <Globe className="text-accent" size={20} /> Mission Tasks
          </h3>
          <ul className="space-y-4">
            {tasks.map((t) => (
              <li key={t.text} className="flex items-start gap-3">
                <t.icon className="text-accent shrink-0 mt-0.5" size={18} />
                <span className="text-muted-foreground text-sm">{t.text}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="glass-card p-8"
        >
          <h3 className="font-orbitron font-semibold text-lg mb-5 flex items-center gap-2">
            <CheckCircle className="text-accent" size={20} /> Key Outcomes
          </h3>
          <ul className="space-y-3">
            {outcomes.map((o) => (
              <li key={o} className="text-muted-foreground text-sm flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0" />
                {o}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>

      <p className="text-center text-muted-foreground text-sm leading-relaxed">
        Participation provided benchmarking against global engineering standards and exposed the team
        to diverse environmental constraints beyond domestic platforms.
      </p>
    </div>
  </SectionWrapper>
);

export default Norway2024;
