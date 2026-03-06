import SectionWrapper from "./SectionWrapper";
import SectionHeading from "./SectionHeading";
import { motion } from "framer-motion";
import { Shield, Box, Joystick, Eye, Maximize2, Wrench, Zap, Cpu, Camera, ShieldCheck, Settings } from "lucide-react";
import nemoImage from "@/assets/nemo-underwater.png";

const systemArchitecture = [
  "8-thruster omnidirectional configuration",
  "Full 6-DOF vector-based motion control",
  "Distributed ROS2 Humble framework",
  "High-level AI processing with real-time deterministic control",
  "Sensor fusion with closed-loop stabilization",
  "Electrical isolation between power and logic domains",
  "2–3 hour mission endurance",
];

const designObjectives = [
  {
    icon: Shield,
    title: "Structural Stability & Hydrodynamics",
    points: [
      "Optimized mass distribution and center alignment",
      "Reinforced acrylic pressure hull with sealed architecture",
      "Neutral buoyancy calibration and trim tuning",
    ],
  },
  {
    icon: Box,
    title: "Modular Accessibility",
    points: [
      "4T-slot aluminum frame system",
      "Rapid subsystem reconfiguration",
      "Dedicated power and sensing pods",
    ],
  },
  {
    icon: Joystick,
    title: "Precision Maneuverability",
    points: [
      "8 × T200 thruster layout",
      "Balanced thrust allocation",
      "Stable omnidirectional control across six degrees of freedom",
    ],
  },
  {
    icon: Eye,
    title: "Integrated Perception",
    points: [
      "ROS2-based real-time vision stack",
      "Structured feature extraction metrics",
      "Vision-informed autonomy state transitions",
    ],
  },
  {
    icon: Maximize2,
    title: "Research Scalability",
    points: [
      "Distributed processing architecture",
      "Expandable sensor integration",
      "Software-defined mission logic",
    ],
  },
];

const technicalHighlights = [
  {
    icon: Settings,
    title: "Mechanical",
    points: [
      "Modular aluminum frame with optimized mass distribution",
      "190 mm acrylic pressure hull with radial sealing",
      "Buoyancy and trim validated through controlled pool trials",
    ],
  },
  {
    icon: Wrench,
    title: "Propulsion",
    points: [
      "8 × T200 thrusters (4 horizontal, 4 vertical)",
      "True 6-DOF maneuverability",
      "145 N forward thrust | 205 N vertical thrust",
    ],
  },
  {
    icon: Zap,
    title: "Electrical",
    points: [
      "16.8V, 30Ah lithium-ion power system",
      "170A peak current capacity",
      "Custom power distribution PCB",
      "Segregated high-power and control circuitry",
    ],
  },
  {
    icon: Cpu,
    title: "Processing & Control",
    points: [
      "NVIDIA Jetson Nano running ROS2 Humble",
      "Teensy 4.1 low-level controller with MicroROS",
      "Cascaded PID motion control",
      "EKF-based state estimation",
    ],
  },
  {
    icon: Camera,
    title: "Perception & Autonomy",
    points: [
      "Real-time vision processing pipeline",
      "Structured metric publishing for navigation",
      "Vision-integrated autonomy state machine",
    ],
  },
  {
    icon: ShieldCheck,
    title: "Safety & Validation",
    points: [
      "Hardware and software kill systems",
      "Overcurrent and fault protection logic",
      "Performance validation through subsystem calibration and pool benchmarking",
    ],
  },
];

const NemoProject = () => (
  <SectionWrapper id="nemo" className="section-gradient">
    <SectionHeading title="Current Project: NEMO" subtitle="2025–2026 | Modular Underwater Platform" />

    {/* Description */}
    <p className="text-center text-muted-foreground max-w-3xl mx-auto text-sm leading-relaxed mb-12">
      NEMO is Team SRM AUV's current-generation underwater system built for precision control, intelligent perception, and reliable field deployment. Designed as a modular and competition-validated platform, NEMO unifies structural engineering, high-performance electronics, and distributed software into a cohesive underwater architecture. Every subsystem is engineered for stability, adaptability, and measurable performance in dynamic aquatic environments.
    </p>

    {/* AUV Image */}
    <div className="relative max-w-4xl mx-auto mb-16 rounded-2xl overflow-hidden glow-aqua">
      <img src={nemoImage} alt="NEMO Underwater Platform" className="w-full h-64 md:h-96 object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-deep/80 to-transparent" />
      <div className="absolute bottom-6 left-6">
        <span className="font-orbitron font-bold text-2xl text-gradient">NEMO</span>
        <p className="text-muted-foreground text-sm mt-1">Modular Underwater Platform</p>
      </div>
    </div>

    {/* System Architecture */}
    <h3 className="font-orbitron font-semibold text-xl text-center mb-8">System Architecture</h3>
    <div className="grid md:grid-cols-2 gap-3 max-w-4xl mx-auto mb-16">
      {systemArchitecture.map((item, i) => (
        <motion.div
          key={item}
          initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.06 }}
          className="glass-card px-5 py-4 flex items-center gap-3"
        >
          <span className="w-2 h-2 rounded-full bg-accent shrink-0" />
          <span className="text-muted-foreground text-sm">{item}</span>
        </motion.div>
      ))}
    </div>

    <p className="text-center text-accent font-orbitron text-sm mb-16">
      NEMO represents the most refined and performance-driven vehicle developed by the team to date.
    </p>

    {/* Core Design Objectives */}
    <h3 className="font-orbitron font-semibold text-xl text-center mb-8">Core Design Objectives</h3>
    <div className="grid md:grid-cols-3 gap-4 mb-16 max-w-5xl mx-auto">
      {designObjectives.map((obj, i) => (
        <motion.div
          key={obj.title}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.08 }}
          className="glass-card p-5 group hover:glow-aqua transition-all duration-500"
        >
          <obj.icon className="mb-3 text-accent" size={24} />
          <h4 className="font-orbitron text-sm font-semibold mb-3">{obj.title}</h4>
          <ul className="space-y-1.5">
            {obj.points.map((p) => (
              <li key={p} className="text-muted-foreground text-xs leading-relaxed flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0 mt-1" />
                {p}
              </li>
            ))}
          </ul>
        </motion.div>
      ))}
    </div>

    {/* Technical Highlights */}
    <h3 className="font-orbitron font-semibold text-xl text-center mb-8">Technical Highlights</h3>
    <div className="grid md:grid-cols-3 gap-4 max-w-5xl mx-auto">
      {technicalHighlights.map((section, i) => (
        <motion.div
          key={section.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.08 }}
          className="glass-card p-5 group hover:glow-aqua transition-all duration-500"
        >
          <section.icon className="mb-3 text-accent" size={24} />
          <h4 className="font-orbitron text-sm font-semibold mb-3">{section.title}</h4>
          <ul className="space-y-1.5">
            {section.points.map((p) => (
              <li key={p} className="text-muted-foreground text-xs leading-relaxed flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0 mt-1" />
                {p}
              </li>
            ))}
          </ul>
        </motion.div>
      ))}
    </div>
  </SectionWrapper>
);

export default NemoProject;
