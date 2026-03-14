import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import heroImage from "@/assets/nemo-underwater.png";

const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById("about-us")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img src={heroImage} alt="Autonomous Underwater Vehicle" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-deep/80 via-deep/60 to-deep" />
        <div className="absolute inset-0 bg-gradient-to-r from-deep/70 via-transparent to-deep/70" />
      </div>

      {/* Animated wave overlay at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 overflow-hidden">
        <svg className="absolute bottom-0 w-[200%] animate-wave" viewBox="0 0 1440 120" preserveAspectRatio="none">
          <path d="M0,60 C360,120 720,0 1080,60 C1260,90 1350,30 1440,60 L1440,120 L0,120 Z" fill="hsl(213 80% 8% / 0.6)" />
        </svg>
        <svg className="absolute bottom-0 w-[200%] animate-wave" style={{ animationDelay: "-3s", animationDuration: "10s" }} viewBox="0 0 1440 120" preserveAspectRatio="none">
          <path d="M0,80 C360,20 720,100 1080,40 C1260,60 1350,80 1440,40 L1440,120 L0,120 Z" fill="hsl(213 80% 8% / 0.4)" />
        </svg>
      </div>

      {/* Light ray effects */}
      <div className="absolute top-0 left-1/4 w-1 h-[60%] bg-gradient-to-b from-aqua/20 to-transparent rotate-12 blur-sm" />
      <div className="absolute top-0 right-1/3 w-0.5 h-[50%] bg-gradient-to-b from-ocean/15 to-transparent -rotate-6 blur-sm" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <p className="font-orbitron text-accent text-sm md:text-base tracking-[0.3em] uppercase mb-6">
            Team SRM — Autonomous Underwater Vehicle
          </p>
          <h1 className="font-orbitron font-bold text-4xl md:text-6xl lg:text-7xl leading-tight mb-6">
            Engineering Depths,
            <br />
            <span className="text-gradient">Navigating Future</span>
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto mb-10 leading-relaxed">
            Established in 2013, Team SRM AUV is the official Autonomous Underwater Vehicle team
            of SRM Institute of Science and Technology — designing, developing, and deploying
            intelligent underwater robotic systems.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => document.getElementById("nemo")?.scrollIntoView({ behavior: "smooth" })}
              className="px-8 py-4 rounded-lg font-semibold bg-gradient-to-r from-ocean to-accent text-foreground glow-aqua hover:glow-aqua-strong transition-all duration-300 hover:scale-105"
            >
              Explore NEMO
            </button>
            <button
              onClick={() => document.getElementById("contact-us")?.scrollIntoView({ behavior: "smooth" })}
              className="px-8 py-4 rounded-lg font-semibold border border-accent/50 text-accent hover:bg-accent/10 transition-all duration-300 hover:scale-105"
            >
              Partner With Us
            </button>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={scrollToAbout}
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-accent/60 hover:text-accent transition-colors"
      >
        <ChevronDown size={32} />
      </motion.button>
    </section>
  );
};

export default Hero;
