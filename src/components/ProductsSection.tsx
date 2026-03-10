import productFresh from "@/assets/product-fresh.jpg";
import productFrozen from "@/assets/product-frozen.jpg";
import productDried from "@/assets/product-dried.jpg";
import productCut from "@/assets/product-cut.jpg";

const products = [
  {
    title: "Fresh Banana Leaves",
    description: "Harvested weekly from our partner farms. Vibrant green, pliable, and perfect for wrapping, steaming, and traditional cooking.",
    image: productFresh,
    alt: "Fresh green banana leaves stacked for wholesale export",
  },
  {
    title: "Frozen Banana Leaves",
    description: "Flash-frozen for extended shelf life up to 12 months. Ideal for overseas buyers needing consistent year-round supply.",
    image: productFrozen,
    alt: "Frozen banana leaves in vacuum-sealed commercial packaging",
  },
  {
    title: "Dried Banana Leaves",
    description: "Naturally sun-dried, perfect for craft, décor, food presentation, and traditional packaging applications.",
    image: productDried,
    alt: "Dried banana leaves arranged for craft and décor use",
  },
  {
    title: "Cut-to-Size Portions",
    description: "Pre-cut to your exact specifications. Restaurant-ready portions that save your kitchen staff valuable prep time.",
    image: productCut,
    alt: "Precisely cut banana leaf portions stacked for restaurant use",
  },
];

const ProductsSection = () => {
  return (
    <section id="products" className="section-padding" aria-label="Our banana leaf products">
      <div className="container-narrow">
        <div className="text-center mb-14">
          <h2 className="font-display text-section font-bold text-foreground mb-4">
            Banana Leaves for Every Need
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            Whether you need fresh banana leaves for your restaurant or dried banana leaves for craft — we deliver wholesale, worldwide.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((p) => (
            <article
              key={p.title}
              className="fade-up card-hover bg-background rounded-lg border border-border overflow-hidden group"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={p.image}
                  alt={p.alt}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">{p.title}</h3>
                <p className="font-body text-sm text-muted-foreground mb-4 leading-relaxed">{p.description}</p>
                <a
                  href="#contact"
                  className="font-body text-sm font-semibold text-accent hover:text-gold-light transition-colors"
                >
                  Inquire Now →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
