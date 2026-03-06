import { useState } from "react";
import SectionWrapper from "./SectionWrapper";
import SectionHeading from "./SectionHeading";
import { motion } from "framer-motion";
import { Mail, MapPin, Send, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // placeholder
  };

  return (
    <SectionWrapper id="contact-us">
      <SectionHeading title="Contact Us" subtitle="Let's connect and build the future together" />
      <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
        {/* Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-5"
        >
          {[
            { key: "name", label: "Name", type: "text" },
            { key: "email", label: "Email", type: "email" },
          ].map((f) => (
            <div key={f.key}>
              <label className="text-sm text-muted-foreground mb-1 block">{f.label}</label>
              <input
                type={f.type}
                value={form[f.key as keyof typeof form]}
                onChange={(e) => setForm({ ...form, [f.key]: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-secondary/50 border border-border/50 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all"
                placeholder={`Your ${f.label.toLowerCase()}`}
              />
            </div>
          ))}
          <div>
            <label className="text-sm text-muted-foreground mb-1 block">Message</label>
            <textarea
              rows={4}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full px-4 py-3 rounded-lg bg-secondary/50 border border-border/50 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all resize-none"
              placeholder="Your message"
            />
          </div>
          <button
            type="submit"
            className="w-full px-8 py-4 rounded-lg font-semibold bg-gradient-to-r from-ocean to-accent text-foreground glow-aqua hover:glow-aqua-strong transition-all duration-300 hover:scale-[1.02] flex items-center justify-center gap-2"
          >
            <Send size={18} /> Send Message
          </button>
        </motion.form>

        {/* Info */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div className="glass-card p-6 flex items-start gap-4">
            <Mail className="text-accent shrink-0 mt-1" size={22} />
            <div>
              <h4 className="font-semibold mb-1">Email Us</h4>
              <p className="text-muted-foreground text-sm">teamsrmauv@srmist.edu.in</p>
            </div>
          </div>
          <div className="glass-card p-6 flex items-start gap-4">
            <MapPin className="text-accent shrink-0 mt-1" size={22} />
            <div>
              <h4 className="font-semibold mb-1">Location</h4>
              <p className="text-muted-foreground text-sm">SRM Institute of Science & Technology, Kattankulathur, Chennai, India</p>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Follow Us</h4>
            <div className="flex gap-4">
              {[
                { Icon: Instagram, href: "https://www.instagram.com/srm.auv/" },
                { Icon: Linkedin, href: "https://www.linkedin.com/company/team-srmauv/" },
                { Icon: Twitter, href: "#" },
                { Icon: Youtube, href: "#" },
              ].map(({ Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-lg bg-secondary/50 border border-border/50 flex items-center justify-center text-muted-foreground hover:text-accent hover:glow-aqua transition-all duration-300"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default Contact;
