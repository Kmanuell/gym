import { ShoppingCart, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-12">
            <h1 className="text-3xl font-impact text-primary"><a href="/">SEVEN</a></h1>
            
            <nav className="hidden md:flex items-center gap-8">
              <a href="#classes" className="text-sm font-roboto text-foreground hover:text-primary transition-colors">
                Clases
              </a>
              <a href="#plans" className="text-sm font-roboto text-foreground hover:text-primary transition-colors">
                Planes
              </a>
              <a href="/QuienesSomos" className="text-sm font-roboto text-foreground hover:text-primary transition-colors">
                Quienes somos
              </a>
              <a href="/PreguntasFrecuentes" className="text-sm font-roboto text-foreground hover:text-primary transition-colors">
                Preguntas Frecuentes
              </a>
              <a href="#contact" className="text-sm font-roboto text-foreground hover:text-primary transition-colors">
                Contacto
              </a>
            </nav>
          </div>

          <div className="flex items-center gap-4">
           <a  href="https://shop.agenciamarketingbtm.cl/tienda" target="_blank" rel="noopener noreferrer">
          <Button variant="ghost" size="icon" className="relative">
               <ShoppingCart className="h-5 w-5" />
                <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center font-roboto">
                  +
                 </span>
           </Button>
          </a>
            
            <Button className="hidden md:inline-flex bg-primary hover:bg-primary/90 text-primary-foreground font-roboto">
              <a href="#plans">¡Contrata Ahora!</a>
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              <a href="#classes" className="text-sm font-roboto text-foreground hover:text-primary transition-colors">
                Classes
              </a>
              <a href="#plans" className="text-sm font-roboto text-foreground hover:text-primary transition-colors">
                Plans
              </a>
              <a href="#about" className="text-sm font-roboto text-foreground hover:text-primary transition-colors">
                About
              </a>
              <a href="#contact" className="text-sm font-roboto text-foreground hover:text-primary transition-colors">
                Contact
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
