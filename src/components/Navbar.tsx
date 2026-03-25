import { useState, useEffect, useRef } from "react";
import logoAuv from "@/assets/logo_auv.png";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const vehicles = [
  { name: "Sedna", year: "2014–2016" },
  { name: "Alpheus", year: "2017" },
  { name: "Zarna", year: "2018–2019" },
  { name: "Vatkhd", year: "2023–2024" },
  { name: "NEMO", year: "2025–2026" },
];

const navItems = [
  "Home", "About Us", "Our AUV", "Lab & Research", "NEMO",
  "Achievements", "Team", "Gallery", "Sponsorship", "Contact Us",
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [auvDropdown, setAuvDropdown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setAuvDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const scrollTo = (item: string) => {
    setMobileOpen(false);
    setAuvDropdown(false);
    const id = item.toLowerCase().replace(/\s+/g, "-").replace("&", "and");
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToVehicle = (vehicleName: string) => {
    setMobileOpen(false);
    setAuvDropdown(false);
    const el = document.getElementById("our-auv");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-deep/90 backdrop-blur-lg shadow-lg shadow-ocean/10" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 flex items-center justify-between h-16 md:h-20">
        <button onClick={() => scrollTo("Home")} className="font-orbitron font-bold text-lg md:text-xl tracking-wider">
          <span className="text-foreground">TEAM SRM</span>{" "}
          <span className="text-accent">AUV</span>
        </button>

        {/* Desktop */}
        <div className="hidden lg:flex items-center gap-1">
          {navItems.map((item) =>
            item === "Our AUV" ? (
              <div key={item} className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setAuvDropdown(!auvDropdown)}
                  className="relative px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors group flex items-center gap-1"
                >
                  {item}
                  <ChevronDown size={14} className={`transition-transform duration-200 ${auvDropdown ? "rotate-180" : ""}`} />
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-accent rounded-full transition-all duration-300 group-hover:w-3/4" />
                </button>
                <AnimatePresence>
                  {auvDropdown && (
                    <motion.div
                      initial={{ opacity: 0, y: -8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-1 w-48 bg-deep/95 backdrop-blur-xl border border-border/30 rounded-lg shadow-xl shadow-ocean/20 overflow-hidden"
                    >
                      <button
                        onClick={() => scrollTo("Our AUV")}
                        className="w-full text-left px-4 py-2.5 text-sm font-medium text-foreground hover:bg-accent/10 transition-colors border-b border-border/20"
                      >
                        All Vehicles
                      </button>
                      {vehicles.map((v) => (
                        <button
                          key={v.name}
                          onClick={() => scrollToVehicle(v.name)}
                          className="w-full text-left px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-accent/10 transition-colors flex justify-between items-center"
                        >
                          <span>{v.name}</span>
                          <span className="text-xs text-muted-foreground/60 font-orbitron">{v.year}</span>
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <button
                key={item}
                onClick={() => scrollTo(item)}
                className="relative px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors group"
              >
                {item}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-accent rounded-full transition-all duration-300 group-hover:w-3/4" />
              </button>
            )
          )}
        </div>

        {/* Mobile toggle */}
        <button className="lg:hidden text-foreground" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-deep/95 backdrop-blur-xl border-t border-border/30"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col gap-1">
              {navItems.map((item) =>
                item === "Our AUV" ? (
                  <div key={item}>
                    <button
                      onClick={() => setAuvDropdown(!auvDropdown)}
                      className="w-full text-left px-4 py-3 text-muted-foreground hover:text-foreground hover:bg-secondary/50 rounded-lg transition-colors flex items-center justify-between"
                    >
                      {item}
                      <ChevronDown size={16} className={`transition-transform duration-200 ${auvDropdown ? "rotate-180" : ""}`} />
                    </button>
                    <AnimatePresence>
                      {auvDropdown && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="pl-4"
                        >
                          {vehicles.map((v) => (
                            <button
                              key={v.name}
                              onClick={() => scrollToVehicle(v.name)}
                              className="w-full text-left px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-secondary/50 rounded-lg transition-colors flex justify-between items-center"
                            >
                              <span>{v.name}</span>
                              <span className="text-xs text-muted-foreground/60 font-orbitron">{v.year}</span>
                            </button>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <button
                    key={item}
                    onClick={() => scrollTo(item)}
                    className="text-left px-4 py-3 text-muted-foreground hover:text-foreground hover:bg-secondary/50 rounded-lg transition-colors"
                  >
                    {item}
                  </button>
                )
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
