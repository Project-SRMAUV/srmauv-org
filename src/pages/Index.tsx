import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import OurAUV from "@/components/OurAUV";
import LabResearch from "@/components/LabResearch";
import NemoProject from "@/components/NemoProject";
import Achievements from "@/components/Achievements";
import TeamSection from "@/components/TeamSection";
import TeamMembers from "@/components/TeamMembers";
import Gallery from "@/components/Gallery";
import Sponsorship from "@/components/Sponsorship";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import RippleDivider from "@/components/RippleDivider";
import CursorGlow from "@/components/CursorGlow";

const Index = () => (
  <div className="min-h-screen ocean-gradient">
    <CursorGlow />
    <Navbar />
    <Hero />
    <RippleDivider />
    <About />
    <RippleDivider />
    <LabResearch />
    <RippleDivider />
    <OurAUV />
    <RippleDivider />
    <NemoProject />
    <RippleDivider />
    <Achievements />
    <RippleDivider />
    <TeamSection />
    <RippleDivider />
    <Gallery />
    <RippleDivider />
    <Sponsorship />
    <RippleDivider />
    <Contact />
    <Footer />
  </div>
);

export default Index;
