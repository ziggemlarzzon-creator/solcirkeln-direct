import FadeIn from "./FadeIn";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Vad kostar ett hembesök?",
    answer: "Hembesöket är helt kostnadsfritt och utan förbindelser. Vi kommer hem till dig, tar mått och ger dig en offert som du kan ta ställning till i lugn och ro."
  },
  {
    question: "Vilket område täcker ni?",
    answer: "Vi täcker hela Storstockholm med omnejd. Är du osäker på om vi kommer till dig? Kontakta oss så berättar vi mer!"
  },
  {
    question: "Hur lång tid tar det från beställning till montering?",
    answer: "Leveranstiden varierar beroende på produkt och säsong. Generellt tar det 3-6 veckor från godkänd offert till färdig montering."
  },
  {
    question: "Ingår montering i priset?",
    answer: "Ja, professionell montering ingår alltid i våra offerter. Våra erfarna montörer säkerställer att allt sitter som det ska."
  },
  {
    question: "Vilka garantier erbjuder ni?",
    answer: "Vi erbjuder omfattande garantier på alla våra produkter. Garantitiden varierar beroende på produkttyp, men minst 2 år på textilier och 5 år på mekanik."
  },
  {
    question: "Kan jag se prover på tyger och färger?",
    answer: "Absolut! Vid hembesöket tar vi med oss ett stort sortiment av tyg- och färgprover så att du kan se och känna på materialen i ditt eget hem."
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="section-heading mb-4">Vanliga frågor</h2>
            <div className="accent-line mx-auto" />
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="glass-card px-6 border-none"
                >
                  <AccordionTrigger className="text-left font-heading text-lg hover:no-underline hover:text-primary py-6">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-6">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default FAQ;
