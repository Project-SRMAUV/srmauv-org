import SectionWrapper from "./SectionWrapper";
import SectionHeading from "./SectionHeading";
import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";

const members = [
  { name: "Arjun Mehta", role: "Team Lead" },
  { name: "Priya Sharma", role: "Mechanical Head" },
  { name: "Rohan Das", role: "Software Lead" },
  { name: "Sneha Iyer", role: "Electrical Head" },
  { name: "Karthik Raj", role: "AI & Vision Lead" },
  { name: "Ananya Gupta", role: "PR & Design Head" },
  { name: "Vikram Singh", role: "Controls Engineer" },
  { name: "Meera Nair", role: "Embedded Systems" },
];

const TeamSection = () => (
  <SectionWrapper id="team" className="section-gradient">
    <SectionHeading title="Our Team" subtitle="The minds behind the machine" />
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
      {members.map((m, i) => (
        <motion.div
          key={m.name}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.08, duration: 0.4 }}
          className="glass-card p-6 text-center group hover:-translate-y-2 hover:glow-aqua transition-all duration-500"
        >
          <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-ocean/30 to-aqua/30 flex items-center justify-center text-2xl font-orbitron font-bold text-accent">
            {m.name.charAt(0)}
          </div>
          <h4 className="font-semibold text-sm">{m.name}</h4>
          <p className="text-muted-foreground text-xs mt-1">{m.role}</p>
          <div className="mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <a href="#" className="text-accent hover:text-foreground transition-colors">
              <Linkedin size={18} className="mx-auto" />
            </a>
          </div>
        </motion.div>
      ))}
    </div>
  </SectionWrapper>
);

export default TeamSection;
