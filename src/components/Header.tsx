import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

const Header = () => {
  const whatsappNumber = "5511952096809";
  const whatsappMessage = encodeURIComponent("Olá! Gostaria de fazer um pedido de bolo de pote 🍰");
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <a href="/" className="font-display text-xl font-bold text-foreground">
            🍰 Loukos por <span className="text-primary">Bolo</span>
          </a>
          
          <nav className="hidden md:flex items-center gap-6">
            <a 
              href="#produtos" 
              className="text-muted-foreground hover:text-foreground transition-colors font-body text-sm"
            >
              Sabores
            </a>
            <a 
              href="#contato" 
              className="text-muted-foreground hover:text-foreground transition-colors font-body text-sm"
            >
              Contato
            </a>
            <Button variant="whatsapp" size="sm" asChild>
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-4 h-4" />
                Pedir
              </a>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
