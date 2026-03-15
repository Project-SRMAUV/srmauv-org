import SectionWrapper from "./SectionWrapper";
import SectionHeading from "./SectionHeading";
import { motion } from "framer-motion";

import preetham from "@/assets/team/preetham.jpg";
import arunkumar from "@/assets/team/arunkumar.jpg";
import dharini from "@/assets/team/dharini.jpg";
import shylendran from "@/assets/team/shylendran.jpg";
import mohitha from "@/assets/team/mohitha.jpg";
import dheeraja from "@/assets/team/dheeraja.jpg";
import harshika from "@/assets/team/harshika.jpg";
import nivedha from "@/assets/team/nivedha.jpg";
import shrudeep from "@/assets/team/shrudeep.jpg";
import srinidhi from "@/assets/team/srinidhi.jpg";
import aditya from "@/assets/team/aditya.jpg";
import pradesh from "@/assets/team/pradesh.jpg";
import abhinav from "@/assets/team/abhinav.jpg";
import akarsh from "@/assets/team/akarsh.jpg";

type Member = {
  name: string;
  domain: string;
  position?: string;
  tagline: string;
  photo: string;
};

const leads: Member[] = [
  { name: "Preetham M", domain: "Mechanical", position: "Team Lead", tagline: "Shoot for the moon even if you miss you will land among the stars", photo: preetham },
  { name: "Arunkumar S", domain: "Software", position: "Software Lead", tagline: "Precision in every move, purpose in every step.", photo: arunkumar },
  { name: "Dharini Sakthivel", domain: "Mechanical", position: "Mechanical Lead", tagline: "Crafting stories that feel, and systems that work", photo: dharini },
  { name: "Shylendran S", domain: "Electrical", position: "Electrical Lead", tagline: "Driven by curiosity", photo: shylendran },
  { name: "Mohitha Swaminathan", domain: "Corporate", position: "Corporate Lead", tagline: "A proper mess, but oddly endearing :)", photo: mohitha },
  { name: "M G Aditya", domain: "Electrical", position: "Team Manager", tagline: "Keep Going", photo: aditya },
];

const members: Member[] = [
  { name: "Dheeraja Kambhampati", domain: "Electrical", tagline: "Brains, Balance and a hint of Bold", photo: dheeraja },
  { name: "Harshika R A", domain: "Electrical", tagline: "Growing with team", photo: harshika },
  { name: "Nivedha Rajagopal", domain: "Electrical", tagline: "Quiet creativity, infinite depth.", photo: nivedha },
  { name: "Shrudeep SR", domain: "Mechanical", tagline: "Every bolt you tighten brings you one step closer to your dream", photo: shrudeep },
  { name: "Srinidhi Dwarakanathan", domain: "Software", tagline: "Dream, learn, achieve.", photo: srinidhi },
  { name: "M G Aditya", domain: "Electrical", tagline: "Keep Going", photo: aditya },
  { name: "Pradesh PJ", domain: "Mechanical", tagline: "Try until we win 🔥", photo: pradesh },
  { name: "Abhinav S", domain: "Software", tagline: "Ideae Superant Rationem", photo: abhinav },
  { name: "Akarsh Agrawal", domain: "Electrical", tagline: "Think Big", photo: akarsh },
];

const domainColor: Record<string, string> = {
  Mechanical: "bg-orange-500/20 text-orange-300",
  Software: "bg-emerald-500/20 text-emerald-300",
  Electrical: "bg-sky-500/20 text-sky-300",
  Corporate: "bg-violet-500/20 text-violet-300",
};

const MemberCard = ({ member, index, isLead }: { member: Member; index: number; isLead?: boolean }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.08, duration: 0.5 }}
    className={`glass-card overflow-hidden group hover:glow-aqua transition-all duration-500 ${isLead ? "md:col-span-1" : ""}`}
  >
    <div className="aspect-[3/4] overflow-hidden">
      <img
        src={member.photo}
        alt={member.name}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
      />
    </div>
    <div className="p-5">
      <div className="flex items-center gap-2 mb-1">
        <h4 className="font-orbitron font-semibold text-sm">{member.name}</h4>
      </div>
      {member.position && (
        <p className="text-accent text-xs font-semibold mb-1">{member.position}</p>
      )}
      <span className={`inline-block text-[10px] font-semibold px-2 py-0.5 rounded-full mb-2 ${domainColor[member.domain] || "bg-muted text-muted-foreground"}`}>
        {member.domain}
      </span>
      <p className="text-muted-foreground text-xs italic leading-relaxed">"{member.tagline}"</p>
    </div>
  </motion.div>
);

const TeamMembers = () => (
  <SectionWrapper id="team-members">
    <SectionHeading title="Our Team" subtitle="The minds behind the machine" />

    {/* Leads */}
    <h3 className="font-orbitron font-semibold text-center text-lg mb-8">Team Leads</h3>
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 mb-16">
      {leads.map((m, i) => (
        <MemberCard key={m.name} member={m} index={i} isLead />
      ))}
    </div>

    {/* Members */}
    <h3 className="font-orbitron font-semibold text-center text-lg mb-8">Team Members</h3>
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
      {members.map((m, i) => (
        <MemberCard key={m.name} member={m} index={i} />
      ))}
    </div>
  </SectionWrapper>
);

export default TeamMembers;
