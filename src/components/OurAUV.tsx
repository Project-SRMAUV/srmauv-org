import SectionWrapper from "./SectionWrapper";
import SectionHeading from "./SectionHeading";
import { motion } from "framer-motion";
import { Navigation, Eye, Map, Shield, Cpu, Anchor, Weight, Radio } from "lucide-react";
import heroImage from "@/assets/hero-auv.jpg";

const specs = [
  { icon: Anchor, label: "Depth Rating", value: "30m" },
  { icon: Weight, label: "Weight", value: "25 kg" },
  { icon: Radio, label: "Sensors", value: "DVL, IMU, Hydrophones" },
  { icon: Cpu, label: "Onboard Computer", value: "NVIDIA Jetson" },
];

const features = [
  { icon: Navigation, title: "Autonomous Navigation", desc: "GPS-denied underwater path planning using advanced algorithms." },
  { icon: Eye, title: "Computer Vision", desc: "Real-time object detection and tracking with deep learning models." },
  { icon: Map, title: "Underwater Mapping", desc: "Sonar-based environment mapping and SLAM integration." },
  { icon: Shield, title: "Stability Control", desc: "6-DOF control system with adaptive PID and thruster allocation." },
];

const OurAUV = () => (
  <SectionWrapper id="our-auv">
    <SectionHeading title="Our AUV" subtitle="Engineered for the deep — built for competition" />

    {/* AUV Image */}
    <div className="relative max-w-4xl mx-auto mb-16 rounded-2xl overflow-hidden glow-aqua">
      <img src={heroImage} alt="Team SRM AUV" className="w-full h-64 md:h-96 object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-deep/80 to-transparent" />
    </div>

    {/* Specs */}
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
      {specs.map((s, i) => (
        <motion.div
          key={s.label}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1 }}
          className="glass-card p-6 text-center group hover:glow-aqua transition-all duration-500"
        >
          <s.icon className="mx-auto mb-3 text-accent" size={24} />
          <p className="text-muted-foreground text-xs uppercase tracking-wider mb-1">{s.label}</p>
          <p className="font-orbitron font-semibold text-lg">{s.value}</p>
        </motion.div>
      ))}
    </div>

    {/* Features */}
    <div className="grid md:grid-cols-2 gap-6">
      {features.map((f, i) => (
        <motion.div
          key={f.title}
          initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1, duration: 0.5 }}
          className="glass-card p-6 flex gap-5 group hover:glow-aqua transition-all duration-500"
        >
          <div className="w-12 h-12 shrink-0 rounded-lg bg-gradient-to-br from-ocean/20 to-aqua/20 flex items-center justify-center">
            <f.icon className="text-accent" size={22} />
          </div>
          <div>
            <h4 className="font-orbitron font-semibold mb-2">{f.title}</h4>
            <p className="text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
          </div>
        </motion.div>
      ))}
    </div>
  </SectionWrapper>
);

export default OurAUV;
