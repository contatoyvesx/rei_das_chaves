import { useState } from "react";
import logoCrown from "@/assets/logo-crown.png";
import { Menu, X, MessageCircle } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/5500000000000?text=Olá! Preciso de um chaveiro urgente!";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <div className="container flex h-16 items-center justify-between">
        <a href="#" className="flex items-center gap-3">
          <img src={logoCrown} alt="Logo" width={36} height={36} className="h-9 w-9" />
          <span className="font-display text-xl font-bold uppercase">Rei das Chaves</span>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#servicos" className="text-sm text-muted-foreground hover:text-primary transition-colors">Serviços</a>
          <a href="#sobre" className="text-sm text-muted-foreground hover:text-primary transition-colors">Sobre</a>
          <a href="#contato" className="text-sm text-muted-foreground hover:text-primary transition-colors">Contato</a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-bold text-primary-foreground transition-all hover:scale-105"
          >
            <MessageCircle className="h-4 w-4" />
            WhatsApp
          </a>
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-foreground">
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-xl px-6 py-6 space-y-4">
          <a href="#servicos" onClick={() => setOpen(false)} className="block text-foreground hover:text-primary">Serviços</a>
          <a href="#sobre" onClick={() => setOpen(false)} className="block text-foreground hover:text-primary">Sobre</a>
          <a href="#contato" onClick={() => setOpen(false)} className="block text-foreground hover:text-primary">Contato</a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-5 py-3 font-bold text-primary-foreground"
          >
            <MessageCircle className="h-4 w-4" />
            Chamar no WhatsApp
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
