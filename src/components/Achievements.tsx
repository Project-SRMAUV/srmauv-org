import { useEffect, useRef, useState } from "react";
import SectionWrapper from "./SectionWrapper";
import SectionHeading from "./SectionHeading";
import { motion, useInView } from "framer-motion";
import { Trophy, Calendar, Users, Award, Globe, MapPin } from "lucide-react";

const achievements = [
  "Representing India at the Underwater Robotics Challenge in Norway (2024)",
  "Winner at MarianX 2025",
  "National Champions at NIOT SAVe Competition",
  "Third Place at NEXUS 2024",
  "Top International Finish at SAUVC",
];

const recognition = [
  "Government-sponsored international representation",
  "I4C Innovation Challenge recognition",
  "NVIDIA GPU Grant for advanced perception development",
  "Sustained multi-year competitive presence",
];

const international = [
  "AUVSI RoboSub, United States",
  "Singapore Autonomous Underwater Vehicle Challenge",
  "Underwater Robotics Challenge, Norway",
];

const national = [
  "NIOT SAVe Competition",
  "NEXUS, Chennai Institute of Technology",
  "MarianX, VIT Vellore",
];

const Counter = ({ end, label, icon: Icon }: { end: number; label: string; icon: any }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 2000;
    const step = end / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [isInView, end]);

  return (
    <div ref={ref} className="text-center">
      <Icon className="mx-auto mb-3 text-accent" size={28} />
      <p className="font-orbitron font-bold text-3xl md:text-4xl text-gradient">{count}+</p>
      <p className="text-muted-foreground text-sm mt-1">{label}</p>
    </div>
  );
};

const Achievements = () => (
  <SectionWrapper id="achievements">
    <SectionHeading title="Achievements & Competitions" subtitle="Technical consistency, innovation, and competitive credibility" />

    {/* Counters */}
    <div className="grid grid-cols-3 gap-8 mb-20 max-w-2xl mx-auto">
      <Counter end={10} label="Competitions" icon={Trophy} />
      <Counter end={6} label="Awards" icon={Award} />
      <Counter end={50} label="Team Members" icon={Users} />
    </div>

    {/* Key Achievements & Recognition */}
    <div className="grid md:grid-cols-2 gap-6 mb-16">
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="glass-card p-8"
      >
        <h3 className="font-orbitron font-semibold text-lg mb-5 flex items-center gap-2">
          <Trophy className="text-accent" size={20} /> Key Achievements
        </h3>
        <ul className="space-y-3">
          {achievements.map((a) => (
            <li key={a} className="text-muted-foreground text-sm flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0" />
              {a}
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
          <Award className="text-accent" size={20} /> Recognition & Support
        </h3>
        <ul className="space-y-3">
          {recognition.map((r) => (
            <li key={r} className="text-muted-foreground text-sm flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0" />
              {r}
            </li>
          ))}
        </ul>
      </motion.div>
    </div>

    {/* Competitions */}
    <div className="grid md:grid-cols-2 gap-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="glass-card p-8"
      >
        <h3 className="font-orbitron font-semibold text-lg mb-5 flex items-center gap-2">
          <Globe className="text-accent" size={20} /> International Platforms
        </h3>
        <ul className="space-y-3">
          {international.map((c) => (
            <li key={c} className="text-muted-foreground text-sm flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0" />
              {c}
            </li>
          ))}
        </ul>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="glass-card p-8"
      >
        <h3 className="font-orbitron font-semibold text-lg mb-5 flex items-center gap-2">
          <MapPin className="text-accent" size={20} /> National Platforms
        </h3>
        <ul className="space-y-3">
          {national.map((c) => (
            <li key={c} className="text-muted-foreground text-sm flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0" />
              {c}
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  </SectionWrapper>
);

export default Achievements;
