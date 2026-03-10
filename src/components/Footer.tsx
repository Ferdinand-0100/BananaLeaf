const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground pt-16 pb-8" aria-label="Site footer">
      <div className="container-narrow px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#home" className="font-display text-2xl font-bold tracking-tight">
              Banana<span className="text-accent">Leaf</span>
            </a>
            <p className="font-body text-sm text-primary-foreground/60 mt-3 max-w-sm leading-relaxed">
              From Indonesia's Farms to Your Table. Premium banana leaves wholesale — fresh, frozen &amp; dried. Export-certified, globally shipped.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-body text-sm font-semibold uppercase tracking-wider text-accent mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {["Products", "Why Us", "How It Works", "Testimonials", "FAQ", "Contact"].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase().replace(/ /g, "-")}`} className="font-body text-sm text-primary-foreground/60 hover:text-accent transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-body text-sm font-semibold uppercase tracking-wider text-accent mb-4">Contact</h4>
            <ul className="space-y-2 font-body text-sm text-primary-foreground/60">
              <li>
                <a href="https://wa.me/62895324633717" className="hover:text-accent transition-colors">
                  WhatsApp: +62 895 3246 33717
                </a>
              </li>
              <li>
                <a href="mailto:sales@bananaleaf.co" className="hover:text-accent transition-colors">
                  sales@bananaleaf.co
                </a>
              </li>
              <li className="pt-2">
                Jl. Langsa No. 105A<br />
                Medan, North Sumatra<br />
                Indonesia 20352
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-secondary/30 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-body text-xs text-primary-foreground/40">
            © {new Date().getFullYear()} BananaLeaf. All rights reserved. BananaLeaf is a registered Indonesian export company.
          </p>
          <div className="flex items-center gap-4">
            <a href="https://linkedin.com" aria-label="LinkedIn" className="text-primary-foreground/40 hover:text-accent transition-colors text-sm">LinkedIn</a>
            <a href="https://instagram.com" aria-label="Instagram" className="text-primary-foreground/40 hover:text-accent transition-colors text-sm">Instagram</a>
            <a href="https://wa.me/6281234567890" aria-label="WhatsApp" className="text-primary-foreground/40 hover:text-accent transition-colors text-sm">WhatsApp</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
