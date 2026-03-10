const testimonials = [
  {
    quote: "BananaLeaf has been our sole supplier for two years. Their frozen banana leaves arrive in perfect condition every time — consistent quality that our kitchen team relies on.",
    name: "Takeshi Yamamoto",
    country: "Japan",
    business: "Executive Chef, Nikkei Restaurant Group",
  },
  {
    quote: "Finding a reliable Indonesian banana leaf supplier was a challenge until we discovered BananaLeaf. Their export documentation is impeccable, and the account manager makes everything seamless.",
    name: "Sarah Mitchell",
    country: "United Kingdom",
    business: "Procurement Director, TropicFoods Ltd",
  },
  {
    quote: "We import 20 tons per month for our food packaging line. BananaLeaf's cut-to-size service saved us significant labor costs. The minimum order banana leaves flexibility is a huge advantage.",
    name: "Ahmad Al-Rashid",
    country: "UAE",
    business: "Operations Manager, Gulf Catering Co.",
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="section-padding" aria-label="Customer testimonials">
      <div className="container-narrow">
        <div className="text-center mb-14">
          <h2 className="font-display text-section font-bold text-foreground mb-4">
            What Our Buyers Say
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-xl mx-auto">
            Trusted by wholesale buyers and food businesses across four continents.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <article
              key={t.name}
              className="fade-up p-8 rounded-lg border border-border bg-background card-hover"
            >
              <blockquote className="font-body text-sm text-foreground/80 leading-relaxed mb-6 italic">
                "{t.quote}"
              </blockquote>
              <div className="border-t border-border pt-4">
                <p className="font-display text-base font-semibold text-foreground">{t.name}</p>
                <p className="font-body text-xs text-muted-foreground">{t.business}</p>
                <p className="font-body text-xs text-accent font-medium mt-1">{t.country}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
