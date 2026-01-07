import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import heroCake from "@/assets/hero-cake.jpg";

const Hero = () => {
  const whatsappNumber = "5511952096809";
  const whatsappMessage = encodeURIComponent("Olá! Gostaria de fazer um pedido de bolo de pote 🍰");
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroCake}
          alt="Delicioso bolo de pote artesanal"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/70 via-foreground/50 to-foreground/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto animate-slide-up">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/20 text-primary-foreground text-sm font-medium mb-6 backdrop-blur-sm border border-primary/30">
            ✨ Feitos com amor e ingredientes selecionados
          </span>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-primary-foreground mb-6 leading-tight">
            Loukos por{" "}
            <span className="text-gradient bg-gradient-hero">Bolo de Pote</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-10 max-w-2xl mx-auto font-body">
            Sabores irresistíveis em cada camada. Descubra nossos bolos artesanais 
            feitos com ingredientes frescos e muito carinho.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              variant="hero" 
              size="lg" 
              asChild
              className="min-w-[200px]"
            >
              <a href="#produtos">
                Ver Sabores
              </a>
            </Button>
            
            <Button 
              variant="whatsapp" 
              size="lg" 
              asChild
              className="min-w-[200px]"
            >
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5" />
                Fazer Pedido
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex justify-center">
          <div className="w-1.5 h-3 bg-primary-foreground/50 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
