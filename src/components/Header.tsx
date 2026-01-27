import logo from "@/assets/logo-solcirkeln.png";

const Header = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/30">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src={logo} alt="Solcirkeln" className="h-10 w-auto" />
          <span className="font-heading text-xl font-medium">Solcirkeln</span>
        </div>
        
        <nav className="hidden md:flex items-center gap-8 font-body text-sm">
          <button 
            onClick={() => scrollToSection("produkter")} 
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Produkter
          </button>
          <button 
            onClick={() => scrollToSection("om-oss")} 
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Om oss
          </button>
          <button 
            onClick={() => scrollToSection("faq")} 
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            FAQ
          </button>
          <button 
            onClick={() => scrollToSection("kontakt")} 
            className="bg-primary text-primary-foreground px-5 py-2 rounded-full hover:bg-primary/90 transition-colors"
          >
            Kontakta oss
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
