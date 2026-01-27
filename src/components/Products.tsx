import FadeIn from "./FadeIn";

const outdoorProducts = [
  {
    name: "Terrassmarkis",
    description: "Perfekt för altan och balkong. Måttbeställd och anpassad efter dina önskemål med olika vävar och färger.",
    image: "https://hestramarkis.se/wp-content/uploads/2018/03/terrassmarkis-1-1000x667.jpg"
  },
  {
    name: "Fönstermarkis",
    description: "Klassiska och vertikalmarkiser som ger ett effektivt skydd mot sol och värme.",
    image: "https://hestramarkis.se/wp-content/uploads/2018/03/fonstermarkis-klassisk-3-1000x667.jpg"
  },
  {
    name: "Sidomarkis",
    description: "Flexibelt vindskydd som enkelt kan dras ut vid behov.",
    image: "https://hestramarkis.se/wp-content/uploads/2020/10/sidomarkis-1-1.jpg"
  }
];

const indoorProducts = [
  {
    name: "Rullgardin",
    description: "Klassiskt och stilrent solskydd som passar alla rum.",
    image: "https://hestramarkis.se/wp-content/uploads/2018/04/rullgardiner-1000x667.jpg"
  },
  {
    name: "Plisségardin",
    description: "Elegant och platssnål gardin med unik veckning.",
    image: "https://hestramarkis.se/wp-content/uploads/2018/04/plissegardin-1-1000x667.jpg"
  },
  {
    name: "Persienn",
    description: "Tidlös design med exakt ljusreglering.",
    image: "https://hestramarkis.se/wp-content/uploads/2018/04/persienner-1000x667.jpg"
  },
  {
    name: "Lamellgardin",
    description: "Perfekt för stora fönsterytor med enkel manövrering.",
    image: "https://hestramarkis.se/wp-content/uploads/2018/04/lamellgardin-1-1000x667.jpg"
  }
];

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

        {/* Outdoor Products */}
        <FadeIn delay={0.1}>
          <h3 className="font-heading text-2xl md:text-3xl mb-8 text-primary">Solskydd utomhus</h3>
        </FadeIn>
        
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {outdoorProducts.map((product, index) => (
            <FadeIn key={product.name} delay={0.2 + index * 0.1}>
              <div className="glass-card overflow-hidden group">
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h4 className="font-heading text-xl mb-2">{product.name}</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">{product.description}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Indoor Products */}
        <FadeIn delay={0.1}>
          <h3 className="font-heading text-2xl md:text-3xl mb-8 text-primary">Solskydd inomhus</h3>
        </FadeIn>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {indoorProducts.map((product, index) => (
            <FadeIn key={product.name} delay={0.2 + index * 0.1}>
              <div className="glass-card overflow-hidden group">
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5">
                  <h4 className="font-heading text-lg mb-2">{product.name}</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">{product.description}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
