import heroLeaf from "@/assets/hero-leaf.jpg";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      aria-label="Hero section"
    >
      {/* Background layers */}
      <div className="absolute inset-0">
        <img
          src={heroLeaf}
          alt="Close-up of fresh Indonesian banana leaf with water droplets"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/70 to-secondary/90" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,hsl(var(--jungle)/0.5)_100%)]" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-narrow px-4 sm:px-6 lg:px-8 text-center pt-20">
        <p className="font-body text-sm sm:text-base font-semibold text-accent tracking-[0.2em] uppercase mb-6">
          From Indonesia's Farms to Your Table
        </p>
        <h1 className="font-display text-hero font-bold text-primary-foreground leading-[1.1] mb-6 max-w-4xl mx-auto">
          Premium Indonesian Banana Leaves — Direct to Your Doorstep, Anywhere in the World
        </h1>
        <p className="font-body text-lg sm:text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-10">
          Fresh, frozen &amp; dried banana leaves wholesale. Export-certified, ethically sourced from
          200+ farmer partners across North Sumatra.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#contact"
            className="px-8 py-4 bg-accent text-accent-foreground font-body font-bold text-base rounded hover:bg-gold-light transition-colors duration-200"
          >
            Get a Free Quote
          </a>
          <a
            href="#products"
            className="px-8 py-4 border-2 border-primary-foreground/40 text-primary-foreground font-body font-semibold text-base rounded hover:border-accent hover:text-accent transition-colors duration-200"
          >
            See Our Products
          </a>
        </div>
      </div>

      {/* Diagonal bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-background" style={{ clipPath: "polygon(0 100%, 100% 100%, 100% 0)" }} />
    </section>
  );
};

export default HeroSection;
