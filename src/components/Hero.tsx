import FadeIn from "./FadeIn";
import logo from "@/assets/logo-solcirkeln.png";

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById("kontakt")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-secondary/20" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <FadeIn delay={0.1}>
            <img src={logo} alt="Solcirkeln" className="h-24 md:h-32 w-auto mx-auto mb-8" />
          </FadeIn>
          
          <FadeIn delay={0.2}>
            <h1 className="section-heading text-foreground mb-6">
              Solskydd för alla lägen
            </h1>
          </FadeIn>
          
          <FadeIn delay={0.3}>
            <p className="section-subheading mx-auto mb-4">
              Skräddarsytt solskydd till ditt hem eller företag – med kostnadsfritt hembesök och offert.
            </p>
          </FadeIn>
          
          <FadeIn delay={0.4}>
            <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
              Solcirkeln erbjuder kvalitetslösningar för både inomhus- och utomhussolskydd som kombinerar funktion, design och hållbarhet. Våra produkter hjälper dig skapa skugga, sänka värmen inomhus och ge skydd mot solens strålar – anpassat efter dina behov.
            </p>
          </FadeIn>
          
          <FadeIn delay={0.5}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button 
                onClick={scrollToContact}
                className="bg-primary text-primary-foreground px-8 py-4 rounded-full font-medium hover:bg-primary/90 transition-all hover:scale-105"
              >
                Boka kostnadsfritt hembesök
              </button>
              <button 
                onClick={() => document.getElementById("produkter")?.scrollIntoView({ behavior: "smooth" })}
                className="border border-border text-foreground px-8 py-4 rounded-full font-medium hover:bg-secondary transition-colors"
              >
                Se våra produkter
              </button>
            </div>
          </FadeIn>
          
          <FadeIn delay={0.6}>
            <p className="text-primary font-medium mt-8 text-sm tracking-wide uppercase">
              Täcker Storstockholm
            </p>
          </FadeIn>
        </div>
      </div>
      
      {/* Decorative element */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-secondary/10 to-transparent" />
    </section>
  );
};

export default Hero;
