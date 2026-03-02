import SectionWrapper from "./SectionWrapper";
import SectionHeading from "./SectionHeading";
import { motion } from "framer-motion";
import { Shield, Box, Joystick, Eye, Maximize2, Cpu, Anchor, Waves, Navigation, Wrench } from "lucide-react";
import heroImage from "@/assets/hero-auv.jpg";

const objectives = [
  { icon: Shield, text: "Structural stability under dynamic aquatic conditions" },
  { icon: Box, text: "Modular subsystem accessibility" },
  { icon: Joystick, text: "Precise maneuverability across six degrees of freedom" },
  { icon: Eye, text: "Real-time perception integration" },
  { icon: Maximize2, text: "Scalability for future research modules" },
];

const highlights = [
  "Modular aluminum frame architecture with optimized mass distribution",
  "Six degree-of-freedom thruster configuration for omnidirectional control",
  "ROS2-based distributed software architecture",
  "Real-time computer vision processing pipeline",
  "Sensor-integrated navigation and feedback control systems",
  "Pool-tested buoyancy stability and trim optimization",
];

const applications = [
  { icon: Anchor, title: "Underwater Infrastructure Inspection" },
  { icon: Navigation, title: "Vision-Guided Navigation & Alignment" },
  { icon: Cpu, title: "Task-Based Mission Execution" },
  { icon: Wrench, title: "Experimental Marine Robotics Research" },
];

const NemoProject = () => (
  <SectionWrapper id="nemo" className="section-gradient">
    <SectionHeading title="Current Project: NEMO" subtitle="2025–2026 — Modular, robust, precision-engineered" />

    {/* AUV Image */}
    <div className="relative max-w-4xl mx-auto mb-16 rounded-2xl overflow-hidden glow-aqua">
      <img src={heroImage} alt="NEMO ROV Platform" className="w-full h-64 md:h-96 object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-deep/80 to-transparent" />
      <div className="absolute bottom-6 left-6">
        <span className="font-orbitron font-bold text-2xl text-gradient">NEMO</span>
        <p className="text-muted-foreground text-sm mt-1">Remotely Operated Vehicle Platform</p>
      </div>
    </div>

    {/* Core Design Objectives */}
    <h3 className="font-orbitron font-semibold text-xl text-center mb-8">Core Design Objectives</h3>
    <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-16">
      {objectives.map((o, i) => (
        <motion.div
          key={o.text}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.08 }}
          className="glass-card p-5 text-center group hover:glow-aqua transition-all duration-500"
        >
          <o.icon className="mx-auto mb-3 text-accent" size={24} />
          <p className="text-muted-foreground text-xs leading-relaxed">{o.text}</p>
        </motion.div>
      ))}
    </div>

    {/* Technical Highlights */}
    <h3 className="font-orbitron font-semibold text-xl text-center mb-8">Technical Highlights</h3>
    <div className="grid md:grid-cols-2 gap-3 max-w-4xl mx-auto mb-16">
      {highlights.map((h, i) => (
        <motion.div
          key={h}
          initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.08 }}
          className="glass-card px-5 py-4 flex items-center gap-3"
        >
          <span className="w-2 h-2 rounded-full bg-accent shrink-0" />
          <span className="text-muted-foreground text-sm">{h}</span>
        </motion.div>
      ))}
    </div>

    {/* Application Areas */}
    <h3 className="font-orbitron font-semibold text-xl text-center mb-8">Application Areas</h3>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
      {applications.map((a, i) => (
        <motion.div
          key={a.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1 }}
          className="glass-card p-6 text-center group hover:glow-aqua transition-all duration-500"
        >
          <a.icon className="mx-auto mb-3 text-accent" size={24} />
          <p className="text-sm font-medium">{a.title}</p>
        </motion.div>
      ))}
    </div>

    <p className="text-center text-muted-foreground max-w-3xl mx-auto text-sm leading-relaxed">
      NEMO reflects more than a decade of accumulated engineering maturity and marks the team's
      transition toward scalable, research-grade underwater robotic systems. The vehicle is currently
      undergoing subsystem calibration, dry validation, and controlled pool testing.
    </p>
  </SectionWrapper>
);

export default NemoProject;
