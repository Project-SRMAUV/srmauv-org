import SectionWrapper from "./SectionWrapper";
import SectionHeading from "./SectionHeading";
import { motion } from "framer-motion";
import { Wrench, Zap, Code, Megaphone } from "lucide-react";

const divisions = [
  {
    icon: Wrench,
    title: "Mechanical Systems",
    color: "from-blue-500/20 to-cyan-500/20",
    desc: "Vehicle architecture and physical design.",
    points: [
      "Frame design and structural stress distribution",
      "Hydrodynamic optimization for drag reduction",
      "Buoyancy calculation and trim calibration",
      "Center-of-mass and center-of-buoyancy alignment",
      "Modular payload mounting systems",
      "Waterproof enclosure and sealing mechanisms",
    ],
    footer: "Mechanical design prioritizes stability, structural durability, and maintainability.",
  },
  {
    icon: Zap,
    title: "Electrical Systems",
    color: "from-yellow-500/20 to-orange-500/20",
    desc: "Electrical reliability and subsystem integration.",
    points: [
      "Power distribution network design",
      "Battery management and safety systems",
      "Embedded control board integration",
      "Thruster driver circuitry",
      "Sensor interfacing and calibration",
      "Waterproof connectors and insulation protocols",
    ],
    footer: "Designed for signal integrity, power efficiency, and operational safety under aquatic conditions.",
  },
  {
    icon: Code,
    title: "Software & Intelligence",
    color: "from-green-500/20 to-emerald-500/20",
    desc: "Control systems and perception intelligence.",
    points: [
      "Navigation and control algorithm development",
      "PID-based closed-loop stabilization",
      "Sensor fusion and feedback control",
      "Real-time computer vision processing",
      "Object detection and alignment",
      "ROS2-based distributed software architecture",
    ],
    footer: "Emphasizes modularity, scalability, and real-time responsiveness.",
  },
  {
    icon: Megaphone,
    title: "Corporate",
    color: "from-pink-500/20 to-purple-500/20",
    desc: "Continuity and external engagement.",
    points: [
      "Technical documentation and reporting",
      "Sponsorship and partnership development",
      "Outreach and public representation",
      "Logistics and procurement management",
      "Knowledge transfer across vehicle generations",
    ],
    footer: "Ensures each vehicle platform is cohesive, validated, and deployment-ready.",
  },
];

const LabResearch = () => (
  <SectionWrapper id="lab-and-research" className="section-gradient">
    <SectionHeading title="Organizational Structure" subtitle="Structured technical and operational divisions for system-level integration" />
    <div className="grid md:grid-cols-2 gap-6">
      {divisions.map((d, i) => (
        <motion.div
          key={d.title}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.12, duration: 0.5 }}
          className="glass-card p-8 group hover:glow-aqua hover:-translate-y-1 transition-all duration-500"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${d.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-500`}>
              <d.icon className="text-accent" size={26} />
            </div>
            <div>
              <h3 className="font-orbitron font-semibold text-lg">{d.title}</h3>
              <p className="text-muted-foreground text-sm">{d.desc}</p>
            </div>
          </div>
          <ul className="space-y-1.5 mb-4">
            {d.points.map((p) => (
              <li key={p} className="text-muted-foreground text-sm flex items-start gap-2">
                <span className="text-accent mt-1.5 w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                {p}
              </li>
            ))}
          </ul>
          <p className="text-muted-foreground/70 text-xs italic">{d.footer}</p>
        </motion.div>
      ))}
    </div>
  </SectionWrapper>
);

export default LabResearch;
