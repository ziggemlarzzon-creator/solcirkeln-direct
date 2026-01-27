import FadeIn from "./FadeIn";

const testimonials = [
  {
    name: "Anna Lindström",
    location: "Bromma",
    text: "Fantastisk service från första kontakt till färdig installation. Terrassmarkisen har gjort stor skillnad för vår balkong.",
  },
  {
    name: "Erik Johansson",
    location: "Täby",
    text: "Professionellt bemötande och bra kvalitet på persiennerna. Värmen inomhus har minskat märkbart.",
  },
  {
    name: "Maria Andersson",
    location: "Nacka",
    text: "Snabb leverans och snygg montering. Våra nya rullgardiner passade perfekt. Rekommenderas varmt!",
  },
];

const Testimonials = () => {
  return (
    <section className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="section-heading mb-4">Vad våra kunder säger</h2>
            <div className="accent-line mx-auto" />
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <FadeIn key={testimonial.name} delay={0.1 + index * 0.1}>
              <div className="glass-card p-8 h-full">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-foreground mb-6 leading-relaxed italic">"{testimonial.text}"</p>
                <div className="border-t border-border pt-4">
                  <p className="font-medium">{testimonial.name}</p>
                  <p className="text-muted-foreground text-sm">{testimonial.location}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
