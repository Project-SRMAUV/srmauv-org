import { useEffect, useRef, useState } from "react";
import SectionWrapper from "./SectionWrapper";
import SectionHeading from "./SectionHeading";
import { motion, useInView } from "framer-motion";
import { Trophy, Calendar, Users, Award } from "lucide-react";

const timeline = [
  { year: "2018", title: "Team Founded", desc: "Team SRM AUV was established at SRM University." },
  { year: "2019", title: "First Competition", desc: "Participated in NIOT SAVe, India's premier AUV challenge." },
  { year: "2020", title: "Design Innovation Award", desc: "Won the Best Design Award at National Robotics Championship." },
  { year: "2022", title: "International Debut", desc: "Competed in RoboSub, San Diego — Top 20 globally." },
  { year: "2024", title: "AI Integration", desc: "Implemented deep learning-based vision and autonomous planning." },
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
    <SectionHeading title="Achievements" subtitle="A legacy of excellence and innovation" />

    {/* Counters */}
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
      <Counter end={6} label="Years Active" icon={Calendar} />
      <Counter end={12} label="Competitions" icon={Trophy} />
      <Counter end={8} label="Awards" icon={Award} />
      <Counter end={60} label="Team Members" icon={Users} />
    </div>

    {/* Timeline */}
    <div className="relative max-w-3xl mx-auto">
      {/* Vertical line */}
      <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-ocean via-aqua to-ocean/30" />

      {timeline.map((item, i) => (
        <motion.div
          key={item.year}
          initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1, duration: 0.5 }}
          className={`relative flex items-start mb-12 ${
            i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
          } flex-row`}
        >
          {/* Dot */}
          <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-accent glow-aqua-strong z-10 mt-1" />

          {/* Card */}
          <div className={`ml-12 md:ml-0 md:w-[45%] ${i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
            <span className="font-orbitron text-accent text-sm font-bold">{item.year}</span>
            <h4 className="font-semibold text-lg mt-1">{item.title}</h4>
            <p className="text-muted-foreground text-sm mt-1">{item.desc}</p>
          </div>
        </motion.div>
      ))}
    </div>
  </SectionWrapper>
);

export default Achievements;
