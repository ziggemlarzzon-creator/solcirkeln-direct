import logo from "@/assets/logo-solcirkeln.png";

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border/30">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Solcirkeln" className="h-8 w-auto" />
            <span className="font-heading text-lg">Solcirkeln</span>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-muted-foreground text-sm">
              Stambanevägen 125 • 070-764 42 05 • kontakt.solcirkeln@gmail.com
            </p>
            <p className="text-muted-foreground/60 text-xs mt-2">
              © {new Date().getFullYear()} Solcirkeln. Alla rättigheter förbehållna.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
