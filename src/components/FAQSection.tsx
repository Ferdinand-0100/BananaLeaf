import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "What is the minimum order for banana leaves?",
    a: "Our minimum order banana leaves start at 100 kg for fresh and frozen products, and 50 kg for dried banana leaves. We also offer sample shipments for first-time buyers so you can evaluate quality before committing to a larger order.",
  },
  {
    q: "How do I import banana leaves from Indonesia?",
    a: "We handle all export documentation including phytosanitary certificates, certificates of origin, and customs paperwork. You simply need an import license in your country for agricultural products. Our team guides you through the entire process.",
  },
  {
    q: "Are the banana leaves food-safe certified?",
    a: "Yes. All our banana leaves are grown without harmful pesticides and processed in HACCP-aligned facilities. We provide food-safety documentation with every shipment, meeting international standards for food-contact materials.",
  },
  {
    q: "What are the shipping options and delivery times?",
    a: "We offer both air freight (3–5 days) and sea freight (14–30 days depending on destination). Fresh leaves ship via air with cold-chain logistics. Frozen and dried products can go by sea for more economical bulk shipping.",
  },
  {
    q: "Can you provide custom-sized banana leaf portions?",
    a: "Absolutely. We offer cut-to-size services for restaurant and food service buyers. Whether you need 30cm squares for plate liners or full-length wraps, we cut to your exact specifications before packing.",
  },
];

const FAQSection = () => {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="section-padding bg-muted/50" aria-label="Frequently asked questions">
      <div className="container-narrow">
        <div className="text-center mb-14">
          <h2 className="font-display text-section font-bold text-foreground mb-4">
            Frequently Asked Questions About Buying Banana Leaves in Bulk
          </h2>
        </div>

        <div className="max-w-3xl mx-auto space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="fade-up border border-border rounded-lg bg-background overflow-hidden"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between p-6 text-left"
                aria-expanded={open === i}
              >
                <h3 className="font-display text-base font-semibold text-foreground pr-4">{faq.q}</h3>
                <ChevronDown
                  className={`w-5 h-5 text-accent flex-shrink-0 transition-transform duration-200 ${
                    open === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  open === i ? "max-h-96 pb-6" : "max-h-0"
                }`}
              >
                <p className="font-body text-sm text-muted-foreground leading-relaxed px-6">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
