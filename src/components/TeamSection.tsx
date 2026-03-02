import SectionWrapper from "./SectionWrapper";
import SectionHeading from "./SectionHeading";
import { motion } from "framer-motion";
import { GraduationCap, Building, FlaskConical, Droplets } from "lucide-react";

const facilities = [
  "Mechanical fabrication and precision assembly",
  "Electronics integration and subsystem debugging",
  "Software development and architecture validation",
  "Controlled pool testing and buoyancy calibration",
];

const poolTesting = [
  "Neutral buoyancy stability",
  "Thruster balancing and maneuverability",
  "Control system responsiveness",
  "Sensor reliability and data consistency",
  "Real-time operational performance",
];

const TeamSection = () => (
  <SectionWrapper id="team" className="section-gradient">
    <SectionHeading title="Faculty & Infrastructure" subtitle="Guided mentorship and dedicated facilities" />

    {/* Faculty */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="glass-card p-8 md:p-10 max-w-3xl mx-auto mb-16 text-center"
    >
      <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-ocean/30 to-aqua/30 flex items-center justify-center">
        <GraduationCap className="text-accent" size={36} />
      </div>
      <h3 className="font-orbitron font-semibold text-xl mb-2">Faculty Guidance</h3>
      <p className="text-accent font-semibold mb-1">Dr. Annapurani Panaiyappan Kumarappan</p>
      <p className="text-muted-foreground text-sm mb-4">
        Professor, Department of Computer Science and Engineering<br />
        SRM Institute of Science and Technology
      </p>
      <p className="text-muted-foreground text-sm leading-relaxed max-w-2xl mx-auto">
        Her mentorship ensures adherence to structured engineering methodology, documentation
        discipline, and systematic development cycles. Faculty oversight bridges theoretical
        coursework and applied marine robotics research, enabling students to translate classroom
        knowledge into robust underwater systems.
      </p>
    </motion.div>

    {/* Infrastructure */}
    <div className="grid md:grid-cols-2 gap-6">
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="glass-card p-8"
      >
        <div className="flex items-center gap-3 mb-5">
          <Building className="text-accent" size={24} />
          <h3 className="font-orbitron font-semibold text-lg">Laboratory Facilities</h3>
        </div>
        <p className="text-muted-foreground text-sm mb-4">
          The team operates from dedicated laboratory facilities within SRMIST, supporting end-to-end development cycles.
        </p>
        <ul className="space-y-2">
          {facilities.map((f) => (
            <li key={f} className="text-muted-foreground text-sm flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0" />
              {f}
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
        <div className="flex items-center gap-3 mb-5">
          <Droplets className="text-accent" size={24} />
          <h3 className="font-orbitron font-semibold text-lg">Pool Testing & Validation</h3>
        </div>
        <p className="text-muted-foreground text-sm mb-4">
          Access to structured aquatic environments ensures vehicles are performance-validated prior to competitive deployment.
        </p>
        <ul className="space-y-2">
          {poolTesting.map((p) => (
            <li key={p} className="text-muted-foreground text-sm flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0" />
              {p}
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  </SectionWrapper>
);

export default TeamSection;
