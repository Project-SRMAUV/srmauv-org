import SectionWrapper from "./SectionWrapper";
import SectionHeading from "./SectionHeading";
import { motion } from "framer-motion";
import { Shield, Navigation, Eye, Box, AlertTriangle, Radio } from "lucide-react";

const capabilities = [
  { icon: Shield, text: "Structural integrity under submerged conditions" },
  { icon: Navigation, text: "Closed-loop navigation precision" },
  { icon: Box, text: "Modular subsystem integration" },
  { icon: AlertTriangle, text: "Fault tolerance and redundancy" },
  { icon: Eye, text: "Real-time sensing and perception" },
  { icon: Radio, text: "Stable hydrodynamic performance" },
];

const About = () => (
  <SectionWrapper id="about-us" className="section-gradient">
    <SectionHeading title="About Team SRM AUV" subtitle="Engineering Depths, Navigating the Future" />
    <div className="max-w-4xl mx-auto text-center mb-12">
      <p className="text-muted-foreground text-lg leading-relaxed mb-6">
        Established in 2013, Team SRM AUV is the official Autonomous Underwater Vehicle team of
        SRM Institute of Science and Technology. What began as a student-led initiative has evolved
        into one of the university's flagship technical teams dedicated to the design, development,
        validation, and deployment of intelligent underwater robotic systems for national and
        international platforms.
      </p>
      <p className="text-muted-foreground text-lg leading-relaxed mb-6">
        Over more than a decade, the team has developed a culture centered on disciplined engineering,
        structured iteration, and performance-driven validation. Every vehicle generation reflects
        cumulative technical learning, subsystem refinement, and measurable progression in reliability
        and operational capability.
      </p>
      <p className="text-muted-foreground text-lg leading-relaxed">
        By integrating mechanical engineering, embedded electronics, control theory, computer vision,
        and systems engineering, Team SRM AUV builds mission-capable underwater vehicles engineered for:
      </p>
    </div>

    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto mb-12">
      {capabilities.map((cap, i) => (
        <motion.div
          key={cap.text}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1, duration: 0.4 }}
          className="glass-card p-5 flex items-center gap-3 group hover:glow-aqua transition-all duration-500"
        >
          <cap.icon className="text-accent shrink-0" size={20} />
          <span className="text-sm text-muted-foreground">{cap.text}</span>
        </motion.div>
      ))}
    </div>

    <div className="max-w-4xl mx-auto text-center">
      <p className="text-muted-foreground leading-relaxed">
        Our work transforms academic theory into deployable robotic systems. Team SRM AUV not only
        represents India at global platforms but also serves as a practical training ground for
        engineers specializing in marine robotics and autonomous systems.
      </p>
    </div>
  </SectionWrapper>
);

export default About;
