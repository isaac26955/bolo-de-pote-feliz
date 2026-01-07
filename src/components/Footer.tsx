import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 bg-foreground text-primary-foreground">
      <div className="container mx-auto px-4 text-center">
        <p className="font-display text-2xl font-bold mb-2">
          Loukos por Bolo de Pote
        </p>
        <p className="text-primary-foreground/70 text-sm font-body flex items-center justify-center gap-1">
          Feito com <Heart className="w-4 h-4 text-secondary fill-secondary" /> em São Paulo
        </p>
        <p className="text-primary-foreground/50 text-xs mt-4 font-body">
          © {new Date().getFullYear()} Loukos por Bolo de Pote. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
