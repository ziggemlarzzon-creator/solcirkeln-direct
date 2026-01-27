import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Products from "@/components/Products";
import AboutSection from "@/components/AboutSection";
import ContactForm from "@/components/ContactForm";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Products />
      <AboutSection />
      <FAQ />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Index;
