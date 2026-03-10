const countries = [
  { flag: "🇺🇸", name: "USA" },
  { flag: "🇬🇧", name: "UK" },
  { flag: "🇯🇵", name: "Japan" },
  { flag: "🇦🇺", name: "Australia" },
  { flag: "🇦🇪", name: "UAE" },
  { flag: "🇩🇪", name: "Germany" },
];

const TrustBar = () => {
  return (
    <section className="section-padding pb-8" aria-label="Trusted by international buyers">
      <div className="container-narrow text-center">
        <p className="font-body text-sm font-semibold text-muted-foreground uppercase tracking-[0.15em] mb-6">
          Trusted by wholesale buyers in
        </p>
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10">
          {countries.map((c) => (
            <div key={c.name} className="flex items-center gap-2">
              <span className="text-2xl sm:text-3xl">{c.flag}</span>
              <span className="font-body text-sm font-medium text-foreground">{c.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBar;
