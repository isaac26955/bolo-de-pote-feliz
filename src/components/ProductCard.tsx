import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

interface ProductCardProps {
  name: string;
  description: string;
  price: string;
  image: string;
  delay?: number;
}

const ProductCard = ({ name, description, price, image, delay = 0 }: ProductCardProps) => {
  const whatsappNumber = "5511952096809";
  const whatsappMessage = encodeURIComponent(`Olá! Gostaria de pedir um ${name} 🍰`);
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <Card 
      className="group overflow-hidden bg-card border-border/50 hover:border-primary/30"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="relative overflow-hidden aspect-square">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
          <Button variant="whatsapp" size="sm" asChild className="w-full">
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="w-4 h-4" />
              Pedir Agora
            </a>
          </Button>
        </div>
      </div>
      
      <CardContent className="p-5">
        <h3 className="text-xl font-display font-semibold text-foreground mb-2">
          {name}
        </h3>
        <p className="text-muted-foreground text-sm mb-4 font-body">
          {description}
        </p>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-primary font-display">
            {price}
          </span>
          <span className="text-xs text-muted-foreground bg-muted px-3 py-1 rounded-full">
            Pronta Entrega
          </span>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
