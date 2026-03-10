const steps = [
  { num: "01", title: "Submit Inquiry", desc: "Tell us what you need — product type, volume, delivery schedule, and destination." },
  { num: "02", title: "Get Custom Quote", desc: "We respond within 24 hours with pricing, shipping options, and lead times." },
  { num: "03", title: "We Harvest & Pack", desc: "Your order is harvested fresh, quality-inspected, and packed to your specifications." },
  { num: "04", title: "Delivered Worldwide", desc: "From our facility in Medan to your warehouse — tracked, insured, and on time." },
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="section-padding" aria-label="How to buy banana leaves from Indonesia">
      <div className="container-narrow">
        <div className="text-center mb-14">
          <h2 className="font-display text-section font-bold text-foreground mb-4">
            From Indonesian Farm to Your Business in 4 Steps
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            Buying banana leaves in bulk has never been simpler. Here's how to import banana leaves from Indonesia.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <div key={step.num} className="fade-up text-center relative">
              <div className="font-display text-5xl font-bold text-accent/20 mb-2">{step.num}</div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-3">{step.title}</h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 -right-4 w-8 text-accent/30 text-2xl">→</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
