import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MapPin, MessageCircle, Clock, Phone } from "lucide-react";
import { QRCodeSVG } from "qrcode.react";

const Contact = () => {
  const whatsappNumber = "5511952096809";
  const whatsappMessage = encodeURIComponent("Olá! Gostaria de fazer um pedido de bolo de pote 🍰");
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;
  
  // URL atual do app para o QR Code
  const appUrl = typeof window !== 'undefined' ? window.location.href : 'https://loukosporbolo.lovable.app';

  return (
    <section id="contato" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-4">
            Entre em Contato
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            Faça seu <span className="text-gradient bg-gradient-hero">Pedido</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto font-body">
            Entre em contato pelo WhatsApp ou visite nosso endereço. 
            Estamos esperando você!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-6">
            <Card className="p-6 flex items-start gap-4 hover:border-primary/30 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-display font-semibold text-foreground mb-1">
                  Endereço
                </h3>
                <p className="text-muted-foreground font-body">
                  Rua Margarida Cardoso dos Santos, 57
                </p>
              </div>
            </Card>

            <Card className="p-6 flex items-start gap-4 hover:border-primary/30 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center flex-shrink-0">
                <Phone className="w-6 h-6 text-secondary" />
              </div>
              <div>
                <h3 className="font-display font-semibold text-foreground mb-1">
                  WhatsApp
                </h3>
                <p className="text-muted-foreground font-body">
                  (11) 95209-6809
                </p>
              </div>
            </Card>

            <Card className="p-6 flex items-start gap-4 hover:border-primary/30 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                <Clock className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="font-display font-semibold text-foreground mb-1">
                  Horário de Funcionamento
                </h3>
                <p className="text-muted-foreground font-body">
                  Segunda a Sábado: 9h às 20h
                </p>
              </div>
            </Card>

            <Button 
              variant="whatsapp" 
              size="lg" 
              asChild
              className="w-full mt-4"
            >
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5" />
                Chamar no WhatsApp
              </a>
            </Button>
          </div>

          {/* QR Code */}
          <Card className="p-8 flex flex-col items-center justify-center text-center">
            <h3 className="font-display font-semibold text-foreground text-xl mb-2">
              Acesse pelo celular
            </h3>
            <p className="text-muted-foreground text-sm mb-6 font-body">
              Escaneie o QR Code para acessar nosso cardápio
            </p>
            <div className="p-4 bg-card rounded-2xl shadow-soft border border-border">
              <QRCodeSVG 
                value={appUrl}
                size={200}
                level="H"
                includeMargin={true}
                fgColor="hsl(25, 40%, 15%)"
                bgColor="transparent"
              />
            </div>
            <p className="text-muted-foreground text-xs mt-4 font-body">
              Compartilhe com amigos e familiares! 🍰
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
