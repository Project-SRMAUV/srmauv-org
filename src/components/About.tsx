import SectionWrapper from "./SectionWrapper";
import SectionHeading from "./SectionHeading";
import { motion } from "framer-motion";
import { Eye, Target, Heart } from "lucide-react";

const cards = [
  {
    icon: Eye,
    title: "Our Vision",
    desc: "To pioneer underwater robotics innovation and represent India on the global stage of autonomous vehicle competitions.",
  },
  {
    icon: Target,
    title: "Our Mission",
    desc: "To design, build, and deploy cutting-edge AUVs while fostering interdisciplinary learning and research excellence.",
  },
  {
    icon: Heart,
    title: "Our Core Values",
    desc: "Innovation, collaboration, perseverance, and a relentless pursuit of engineering excellence in marine autonomy.",
  },
];

const About = () => (
  <SectionWrapper id="about-us" className="section-gradient">
    <SectionHeading title="About Us" subtitle="Driven by curiosity, powered by innovation" />
    <div className="max-w-3xl mx-auto text-center mb-16">
      <p className="text-muted-foreground text-lg leading-relaxed">
        Founded in 2018, Team SRM is a multidisciplinary student team at SRM University dedicated
        to designing Autonomous Underwater Vehicles. We participate in national and international
        competitions, pushing the boundaries of robotics, control systems, artificial intelligence,
        and marine autonomy.
      </p>
    </div>
    <div className="grid md:grid-cols-3 gap-6">
      {cards.map((card, i) => (
        <motion.div
          key={card.title}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.15, duration: 0.5 }}
          className="glass-card p-8 text-center group hover:glow-aqua transition-all duration-500"
        >
          <div className="w-16 h-16 mx-auto mb-6 rounded-xl bg-gradient-to-br from-ocean/20 to-aqua/20 flex items-center justify-center group-hover:from-ocean/40 group-hover:to-aqua/40 transition-all duration-500">
            <card.icon className="text-accent" size={28} />
          </div>
          <h3 className="font-orbitron font-semibold text-xl mb-3">{card.title}</h3>
          <p className="text-muted-foreground leading-relaxed">{card.desc}</p>
        </motion.div>
      ))}
    </div>
  </SectionWrapper>
);

export default About;
