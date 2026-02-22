const SectionHeading = ({ title, subtitle }: { title: string; subtitle?: string }) => (
  <div className="text-center mb-16">
    <h2 className="text-3xl md:text-5xl font-orbitron font-bold mb-4">
      <span className="text-gradient">{title}</span>
    </h2>
    {subtitle && <p className="text-muted-foreground text-lg max-w-2xl mx-auto">{subtitle}</p>}
    <div className="mt-6 mx-auto w-24 h-1 rounded-full bg-gradient-to-r from-ocean to-aqua animate-glow-pulse" />
  </div>
);

export default SectionHeading;
