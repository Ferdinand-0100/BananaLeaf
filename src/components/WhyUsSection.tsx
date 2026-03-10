import { Leaf, ShieldCheck, Package, Truck, Layers, UserCheck } from "lucide-react";

const usps = [
  { icon: Leaf, title: "Direct from Farm", desc: "No middlemen. We work directly with 200+ farmer partners in North Sumatra, ensuring fair prices and premium quality." },
  { icon: ShieldCheck, title: "Export Certified", desc: "All products meet international food safety standards. HACCP-aligned processes, phytosanitary certificates included." },
  { icon: Package, title: "Custom Packaging", desc: "Vacuum-sealed, bulk bales, or retail-ready packs. We customize packaging to your market requirements." },
  { icon: Truck, title: "Cold-Chain Logistics", desc: "Temperature-controlled shipping for fresh and frozen products. Air and sea freight options worldwide." },
  { icon: Layers, title: "Minimum Order Flexibility", desc: "From sample shipments to full container loads. We scale with your business needs." },
  { icon: UserCheck, title: "Dedicated Account Manager", desc: "Every buyer gets a personal point of contact for quotes, logistics updates, and quality assurance." },
];

const WhyUsSection = () => {
  return (
    <section
      id="why-us"
      className="relative bg-primary text-primary-foreground diagonal-both py-28 sm:py-32"
      aria-label="Why choose BananaLeaf"
    >
      <div className="container-narrow px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="font-display text-section font-bold mb-4">
            Why Global Buyers Choose BananaLeaf
          </h2>
          <p className="font-body text-lg text-primary-foreground/70 max-w-2xl mx-auto">
            We're not just a banana leaf wholesale supplier — we're your dedicated sourcing partner in Indonesia.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {usps.map((usp) => (
            <div
              key={usp.title}
              className="fade-up p-8 rounded-lg border border-secondary/50 hover:border-accent/50 transition-all duration-300 hover:-translate-y-1 group"
            >
              <usp.icon className="w-8 h-8 text-accent mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="font-display text-lg font-semibold mb-3">{usp.title}</h3>
              <p className="font-body text-sm text-primary-foreground/70 leading-relaxed">{usp.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
