import FadeIn from "./FadeIn";
import { CheckCircle } from "lucide-react";

const benefits = [
  "Kostnadsfritt hembesök och mätning",
  "Personlig rådgivning på plats",
  "Skräddarsydda lösningar efter era behov",
  "Professionell montering ingår"
];

const AboutSection = () => {
  return (
    <section id="om-oss" className="py-24 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <FadeIn>
              <h2 className="section-heading mb-4">Så fungerar det</h2>
              <div className="accent-line mb-8" />
            </FadeIn>
            
            <FadeIn delay={0.1}>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                Vi på Solcirkeln erbjuder kostnadsfritt hembesök i hela Storstockholm. 
                Vår erfarna personal kommer hem till dig, tar mått och ger personlig 
                rådgivning baserat på just dina förutsättningar och önskemål.
              </p>
            </FadeIn>
            
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <FadeIn key={benefit} delay={0.2 + index * 0.1}>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">{benefit}</span>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
          
          <FadeIn delay={0.3} direction="left">
            <div className="glass-card p-8 md:p-10">
              <h3 className="font-heading text-2xl mb-6">Hur går ett hembesök till?</h3>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary/20 text-primary flex items-center justify-center font-medium flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Skicka in din förfrågan</h4>
                    <p className="text-muted-foreground text-sm">Fyll i formuläret nedan med dina kontaktuppgifter och önskemål.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary/20 text-primary flex items-center justify-center font-medium flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Vi kontaktar dig</h4>
                    <p className="text-muted-foreground text-sm">Vi ringer upp för att boka in ett passande datum för hembesök.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary/20 text-primary flex items-center justify-center font-medium flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Hembesök och mätning</h4>
                    <p className="text-muted-foreground text-sm">Vi kommer hem till dig, tar mått och diskuterar lösningar.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary/20 text-primary flex items-center justify-center font-medium flex-shrink-0">
                    4
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Offert utan förbindelse</h4>
                    <p className="text-muted-foreground text-sm">Du får en detaljerad offert att ta ställning till i lugn och ro.</p>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
