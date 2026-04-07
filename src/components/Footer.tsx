import logoCrown from "@/assets/logo-crown.png";
import { Phone, MapPin, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contato" className="border-t border-border bg-card py-16">
      <div className="container">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img src={logoCrown} alt="Logo" width={40} height={40} className="h-10 w-10" loading="lazy" />
              <span className="font-display text-2xl font-bold uppercase">Rei das Chaves</span>
            </div>
            <p className="text-muted-foreground text-sm">
              Seu chaveiro de confiança, disponível 24 horas por dia.
            </p>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-display text-lg font-bold uppercase">Contato</h3>
            <div className="space-y-3 text-sm text-muted-foreground">
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-primary" />
                <span>(00) 00000-0000</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-primary" />
                <span>Sua cidade - Estado</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="h-4 w-4 text-primary" />
                <span>24 horas, 7 dias por semana</span>
              </div>
            </div>
          </div>

          {/* Links */}
          <div className="space-y-4">
            <h3 className="font-display text-lg font-bold uppercase">Navegação</h3>
            <div className="space-y-2 text-sm">
              <a href="#servicos" className="block text-muted-foreground hover:text-primary transition-colors">Serviços</a>
              <a href="#sobre" className="block text-muted-foreground hover:text-primary transition-colors">Sobre</a>
              <a href="#contato" className="block text-muted-foreground hover:text-primary transition-colors">Contato</a>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-8 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Rei das Chaves. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
