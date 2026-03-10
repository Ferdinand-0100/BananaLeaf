import { useState } from "react";

const ContactSection = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="section-padding" aria-label="Request a wholesale quote">
      <div className="container-narrow">
        <div className="text-center mb-14">
          <h2 className="font-display text-section font-bold text-foreground mb-4">
            Request a Wholesale Quote
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-xl mx-auto">
            Tell us about your banana leaf requirements and we'll respond within 24 hours with a custom quote.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          {submitted ? (
            <div className="text-center py-16 fade-up visible">
              <div className="text-4xl mb-4">✓</div>
              <h3 className="font-display text-2xl font-bold text-foreground mb-2">Thank You!</h3>
              <p className="font-body text-muted-foreground">We've received your inquiry and will respond within 24 hours.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="fade-up space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="font-body text-sm font-medium text-foreground block mb-1.5">Full Name *</label>
                  <input type="text" id="name" name="name" required className="w-full px-4 py-3 rounded border border-input bg-background font-body text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-accent" />
                </div>
                <div>
                  <label htmlFor="company" className="font-body text-sm font-medium text-foreground block mb-1.5">Company *</label>
                  <input type="text" id="company" name="company" required className="w-full px-4 py-3 rounded border border-input bg-background font-body text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-accent" />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="email" className="font-body text-sm font-medium text-foreground block mb-1.5">Email *</label>
                  <input type="email" id="email" name="email" required className="w-full px-4 py-3 rounded border border-input bg-background font-body text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-accent" />
                </div>
                <div>
                  <label htmlFor="country" className="font-body text-sm font-medium text-foreground block mb-1.5">Country *</label>
                  <input type="text" id="country" name="country" required className="w-full px-4 py-3 rounded border border-input bg-background font-body text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-accent" />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="whatsapp" className="font-body text-sm font-medium text-foreground block mb-1.5">WhatsApp Number</label>
                  <input type="tel" id="whatsapp" name="whatsapp" className="w-full px-4 py-3 rounded border border-input bg-background font-body text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-accent" />
                </div>
                <div>
                  <label htmlFor="product" className="font-body text-sm font-medium text-foreground block mb-1.5">Product Interest *</label>
                  <select id="product" name="product" required className="w-full px-4 py-3 rounded border border-input bg-background font-body text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-accent">
                    <option value="">Select a product</option>
                    <option value="fresh">Fresh Banana Leaves</option>
                    <option value="frozen">Frozen Banana Leaves</option>
                    <option value="dried">Dried Banana Leaves</option>
                    <option value="cut">Cut-to-Size Portions</option>
                    <option value="multiple">Multiple Products</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="volume" className="font-body text-sm font-medium text-foreground block mb-1.5">Estimated Monthly Volume</label>
                <input type="text" id="volume" name="volume" placeholder="e.g. 500 kg/month" className="w-full px-4 py-3 rounded border border-input bg-background font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent" />
              </div>

              <div>
                <label htmlFor="message" className="font-body text-sm font-medium text-foreground block mb-1.5">Message</label>
                <textarea id="message" name="message" rows={4} className="w-full px-4 py-3 rounded border border-input bg-background font-body text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-accent resize-none" />
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-accent text-accent-foreground font-body font-bold text-base rounded hover:bg-gold-light transition-colors duration-200"
              >
                Submit Inquiry
              </button>
              <p className="font-body text-xs text-muted-foreground text-center">We respond within 24 hours. Your information is kept confidential.</p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
