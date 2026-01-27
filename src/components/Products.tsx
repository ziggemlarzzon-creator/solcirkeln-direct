import FadeIn from "./FadeIn";

const outdoorProducts = [
  {
    name: "Terrassmarkis",
    description: "Perfekt för altan och balkong. Måttbeställd och anpassad efter dina önskemål med olika vävar och färger.",
  },
  {
    name: "Fönstermarkis",
    description: "Klassiska och vertikalmarkiser som ger ett effektivt skydd mot sol och värme.",
  },
  {
    name: "Sidomarkis",
    description: "Flexibelt vindskydd som enkelt kan dras ut vid behov.",
  }
];

const indoorProducts = [
  {
    name: "Rullgardin",
    description: "Klassiskt och stilrent solskydd som passar alla rum.",
  },
  {
    name: "Plisségardin",
    description: "Elegant och platssnål gardin med unik veckning.",
  },
  {
    name: "Persienn",
    description: "Tidlös design med exakt ljusreglering.",
  },
  {
    name: "Lamellgardin",
    description: "Perfekt för stora fönsterytor med enkel manövrering.",
  }
];

const ProductItem = ({ name, description }: { name: string; description: string }) => (
  <div className="group py-4 border-b border-border/50 last:border-b-0 hover:bg-primary/5 transition-colors px-4 -mx-4 rounded-lg">
    <div className="flex items-start gap-4">
      <span className="w-2 h-2 rounded-full bg-primary mt-3 flex-shrink-0" />
      <div>
        <h4 className="font-heading text-xl md:text-2xl text-foreground group-hover:text-primary transition-colors">
          {name}
        </h4>
        <p className="text-muted-foreground text-sm md:text-base mt-1 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  </div>
);

const Products = () => {
  return (
    <section id="produkter" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="section-heading mb-4">Våra produkter</h2>
            <div className="accent-line mx-auto mb-6" />
            <p className="section-subheading mx-auto">
              Kvalitetslösningar för både inomhus- och utomhusbruk
            </p>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-12 md:gap-16 max-w-4xl mx-auto">
          {/* Outdoor Products */}
          <FadeIn delay={0.1}>
            <div>
              <h3 className="font-heading text-lg uppercase tracking-widest text-primary mb-6 pb-2 border-b-2 border-primary">
                Utomhus
              </h3>
              <div className="space-y-0">
                {outdoorProducts.map((product) => (
                  <ProductItem key={product.name} {...product} />
                ))}
              </div>
            </div>
          </FadeIn>

          {/* Indoor Products */}
          <FadeIn delay={0.2}>
            <div>
              <h3 className="font-heading text-lg uppercase tracking-widest text-primary mb-6 pb-2 border-b-2 border-primary">
                Inomhus
              </h3>
              <div className="space-y-0">
                {indoorProducts.map((product) => (
                  <ProductItem key={product.name} {...product} />
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default Products;
