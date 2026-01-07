import { MessageCircle } from "lucide-react";

const WhatsAppFloat = () => {
  const whatsappNumber = "5511952096809";
  const whatsappMessage = encodeURIComponent("Olá! Gostaria de fazer um pedido de bolo de pote 🍰");
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-[hsl(142,70%,45%)] rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 animate-pulse-soft"
      aria-label="Chamar no WhatsApp"
    >
      <MessageCircle className="w-8 h-8 text-[hsl(0,0%,100%)]" />
    </a>
  );
};

export default WhatsAppFloat;
