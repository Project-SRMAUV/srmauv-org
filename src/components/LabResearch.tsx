import SectionWrapper from "./SectionWrapper";
import SectionHeading from "./SectionHeading";
import { motion } from "framer-motion";
import { Wrench, Zap, Code, Palette } from "lucide-react";

const divisions = [
  { icon: Wrench, title: "Mechanical Division", desc: "Hull design, hydrodynamics, 3D modeling, and structural analysis.", color: "from-blue-500/20 to-cyan-500/20" },
  { icon: Zap, title: "Electrical Division", desc: "Power systems, PCB design, sensor integration, and signal processing.", color: "from-yellow-500/20 to-orange-500/20" },
  { icon: Code, title: "Software Division", desc: "Computer vision, path planning, ROS, and machine learning pipelines.", color: "from-green-500/20 to-emerald-500/20" },
  { icon: Palette, title: "PR & Design Division", desc: "Branding, outreach, sponsorship, and creative media production.", color: "from-pink-500/20 to-purple-500/20" },
];

const LabResearch = () => (
  <SectionWrapper id="lab-and-research" className="section-gradient">
    <SectionHeading title="Lab & Research" subtitle="Four divisions, one mission — underwater excellence" />
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
      {divisions.map((d, i) => (
        <motion.div
          key={d.title}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.12, duration: 0.5 }}
          className="glass-card p-8 text-center group hover:glow-aqua hover:-translate-y-2 transition-all duration-500"
        >
          <div className={`w-16 h-16 mx-auto mb-6 rounded-xl bg-gradient-to-br ${d.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-500`}>
            <d.icon className="text-accent" size={28} />
          </div>
          <h3 className="font-orbitron font-semibold text-lg mb-3">{d.title}</h3>
          <p className="text-muted-foreground text-sm leading-relaxed">{d.desc}</p>
        </motion.div>
      ))}
    </div>
  </SectionWrapper>
);

export default LabResearch;
