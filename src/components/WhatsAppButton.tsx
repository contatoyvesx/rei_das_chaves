import { MessageCircle } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/5500000000000?text=Olá! Preciso de um chaveiro urgente!";

const WhatsAppButton = () => {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg transition-transform hover:scale-110 animate-pulse-glow"
      aria-label="Chamar no WhatsApp"
    >
      <MessageCircle className="h-8 w-8" />
    </a>
  );
};

export default WhatsAppButton;
