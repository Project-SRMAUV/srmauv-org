import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import OurAUV from "@/components/OurAUV";
import LabResearch from "@/components/LabResearch";
import Achievements from "@/components/Achievements";
import TeamSection from "@/components/TeamSection";
import Gallery from "@/components/Gallery";
import Sponsorship from "@/components/Sponsorship";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import RippleDivider from "@/components/RippleDivider";

const Index = () => (
  <div className="min-h-screen ocean-gradient">
    <Navbar />
    <Hero />
    <RippleDivider />
    <About />
    <RippleDivider />
    <OurAUV />
    <RippleDivider />
    <LabResearch />
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
