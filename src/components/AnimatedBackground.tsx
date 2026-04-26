const AnimatedBackground = () => {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* Animated gradient blobs */}
      <div className="absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-primary/20 blur-3xl animate-blob" />
      <div
        className="absolute top-1/3 -right-40 h-[600px] w-[600px] rounded-full bg-secondary/20 blur-3xl animate-blob"
        style={{ animationDelay: "-6s" }}
      />
      <div
        className="absolute bottom-0 left-1/4 h-[450px] w-[450px] rounded-full bg-accent/15 blur-3xl animate-blob"
        style={{ animationDelay: "-12s" }}
      />

      {/* Grid */}
      <div className="absolute inset-0 grid-bg opacity-50" />

      {/* Noise */}
      <div className="noise" />
    </div>
  );
};

export default AnimatedBackground;
