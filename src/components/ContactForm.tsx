import { useState } from "react";
import FadeIn from "./FadeIn";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { format } from "date-fns";
import { sv } from "date-fns/locale";
import { CalendarIcon, Mail, MapPin, Phone } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const products = [
  "Terrassmarkis",
  "Fönstermarkis",
  "Sidomarkis",
  "Persienner",
  "Rullgardin",
  "Plisségardin",
  "Lamellgardin",
  "Zipscreen",
];

const ContactForm = () => {
  const { toast } = useToast();
  const [date, setDate] = useState<Date>();
  const [selectedProducts, setSelectedProducts] = useState<string[]>([]);
  const [otherProduct, setOtherProduct] = useState("");
  const [consent, setConsent] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    street: "",
    postalCode: "",
    city: "",
    message: "",
  });

  const handleProductToggle = (product: string) => {
    setSelectedProducts(prev =>
      prev.includes(product)
        ? prev.filter(p => p !== product)
        : [...prev, product]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!consent) {
      toast({
        title: "Samtycke krävs",
        description: "Du måste godkänna att vi använder dina uppgifter.",
        variant: "destructive",
      });
      return;
    }

    const allProducts = [...selectedProducts, otherProduct].filter(Boolean).join(", ");
    const formattedDate = date ? format(date, "yyyy-MM-dd", { locale: sv }) : "Ej angivet";

    const mailtoLink = `mailto:kontakt.solcirkeln@gmail.com?subject=Offertförfrågan från ${encodeURIComponent(formData.name)}&body=${encodeURIComponent(
`Offertförfrågan från Solcirkelns hemsida

KONTAKTINFORMATION
Namn: ${formData.name}
E-post: ${formData.email}
Telefon: ${formData.phone}

ADRESS
${formData.street}
${formData.postalCode} ${formData.city}

INTRESSERAD AV
${allProducts || "Ej angivet"}

ÖNSKAT DATUM FÖR HEMBESÖK
${formattedDate}

BESKRIVNING
${formData.message}
`
    )}`;

    window.location.href = mailtoLink;

    toast({
      title: "Förfrågan skickad!",
      description: "Vi återkommer så snart som möjligt.",
    });
  };

  return (
    <section id="kontakt" className="py-24 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-2">
            <FadeIn>
              <h2 className="section-heading mb-4">Kontakta oss</h2>
              <div className="accent-line mb-8" />
            </FadeIn>
            
            <FadeIn delay={0.1}>
              <p className="text-muted-foreground text-lg mb-10">
                Fyll i formuläret så återkommer vi inom kort för att boka in ditt kostnadsfria hembesök.
              </p>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Adress</h4>
                    <p className="text-muted-foreground">Stambanevägen 125</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Telefon</h4>
                    <a href="tel:0707644205" className="text-muted-foreground hover:text-primary transition-colors">
                      070-764 42 05
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">E-post</h4>
                    <a href="mailto:kontakt.solcirkeln@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                      kontakt.solcirkeln@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <FadeIn delay={0.2}>
              <form onSubmit={handleSubmit} className="glass-card p-8 md:p-10">
                <h3 className="font-heading text-2xl mb-8">Offertförfrågan</h3>
                
                {/* Contact Information */}
                <div className="space-y-4 mb-8">
                  <h4 className="text-sm font-medium text-primary uppercase tracking-wide">Kontaktinformation</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="Namn *"
                      required
                      value={formData.name}
                      onChange={e => setFormData({ ...formData, name: e.target.value })}
                      className="bg-input border border-border rounded-lg px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-primary/50"
                    />
                    <input
                      type="email"
                      placeholder="E-post *"
                      required
                      value={formData.email}
                      onChange={e => setFormData({ ...formData, email: e.target.value })}
                      className="bg-input border border-border rounded-lg px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-primary/50"
                    />
                  </div>
                  <input
                    type="tel"
                    placeholder="Telefonnummer *"
                    required
                    value={formData.phone}
                    onChange={e => setFormData({ ...formData, phone: e.target.value })}
                    className="bg-input border border-border rounded-lg px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-primary/50"
                  />
                </div>

                {/* Address */}
                <div className="space-y-4 mb-8">
                  <h4 className="text-sm font-medium text-primary uppercase tracking-wide">Adress för hembesök</h4>
                  <input
                    type="text"
                    placeholder="Gatuadress *"
                    required
                    value={formData.street}
                    onChange={e => setFormData({ ...formData, street: e.target.value })}
                    className="bg-input border border-border rounded-lg px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-primary/50"
                  />
                  <div className="grid grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="Postnummer *"
                      required
                      value={formData.postalCode}
                      onChange={e => setFormData({ ...formData, postalCode: e.target.value })}
                      className="bg-input border border-border rounded-lg px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-primary/50"
                    />
                    <input
                      type="text"
                      placeholder="Ort *"
                      required
                      value={formData.city}
                      onChange={e => setFormData({ ...formData, city: e.target.value })}
                      className="bg-input border border-border rounded-lg px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-primary/50"
                    />
                  </div>
                </div>

                {/* Products */}
                <div className="space-y-4 mb-8">
                  <h4 className="text-sm font-medium text-primary uppercase tracking-wide">Produkter / tjänster</h4>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {products.map(product => (
                      <label
                        key={product}
                        className={`flex items-center gap-2 px-4 py-3 rounded-lg border cursor-pointer transition-all ${
                          selectedProducts.includes(product)
                            ? "bg-primary/20 border-primary"
                            : "bg-input border-border hover:border-primary/50"
                        }`}
                      >
                        <input
                          type="checkbox"
                          checked={selectedProducts.includes(product)}
                          onChange={() => handleProductToggle(product)}
                          className="sr-only"
                        />
                        <span className="text-sm">{product}</span>
                      </label>
                    ))}
                  </div>
                  <input
                    type="text"
                    placeholder="Annat/Övrigt"
                    value={otherProduct}
                    onChange={e => setOtherProduct(e.target.value)}
                    className="bg-input border border-border rounded-lg px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-primary/50"
                  />
                </div>

                {/* Date picker */}
                <div className="space-y-4 mb-8">
                  <h4 className="text-sm font-medium text-primary uppercase tracking-wide">Önskat datum för hembesök</h4>
                  <Popover>
                    <PopoverTrigger asChild>
                      <button
                        type="button"
                        className="bg-input border border-border rounded-lg px-4 py-3 w-full text-left flex items-center gap-2 hover:border-primary/50 transition-colors"
                      >
                        <CalendarIcon className="w-4 h-4 text-muted-foreground" />
                        <span className={date ? "text-foreground" : "text-muted-foreground"}>
                          {date ? format(date, "d MMMM yyyy", { locale: sv }) : "Välj datum"}
                        </span>
                      </button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0 bg-card border-border" align="start">
                      <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        disabled={(date) => date < new Date()}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                </div>

                {/* Message */}
                <div className="space-y-4 mb-8">
                  <h4 className="text-sm font-medium text-primary uppercase tracking-wide">Beskriv kort ditt projekt</h4>
                  <textarea
                    placeholder="Berätta mer om vad du önskar, storlek, färg, placering etc."
                    rows={4}
                    value={formData.message}
                    onChange={e => setFormData({ ...formData, message: e.target.value })}
                    className="bg-input border border-border rounded-lg px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
                  />
                </div>

                {/* Consent */}
                <label className="flex items-start gap-3 mb-8 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={consent}
                    onChange={e => setConsent(e.target.checked)}
                    className="mt-1 w-4 h-4 rounded border-border bg-input text-primary focus:ring-primary/50"
                  />
                  <span className="text-sm text-muted-foreground">
                    Jag godkänner att mina uppgifter används för att ta fram offert och kontakt enligt{" "}
                    <span className="text-foreground">GDPR</span>.
                  </span>
                </label>

                <button
                  type="submit"
                  className="w-full bg-primary text-primary-foreground py-4 rounded-full font-medium hover:bg-primary/90 transition-all hover:scale-[1.02]"
                >
                  Skicka offertförfrågan
                </button>
              </form>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
