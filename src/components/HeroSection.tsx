import heroImage from "@/assets/hero-keys.jpg";
import logoCrown from "@/assets/logo-crown.png";
import { Phone, Clock, MessageCircle } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/5500000000000?text=Olá! Preciso de um chaveiro urgente!";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Chave dourada em fechadura"
          width={1920}
          height={1080}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/50" />
      </div>

      <div className="container relative z-10 py-20">
        <div className="max-w-2xl space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2">
            <Clock className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">Atendimento 24 horas</span>
          </div>

          {/* Logo + Title */}
          <div className="flex items-center gap-4">
            <img src={logoCrown} alt="Logo Rei das Chaves" width={64} height={64} className="h-16 w-16" />
            <h1 className="text-5xl md:text-7xl font-display font-bold uppercase tracking-tight">
              Rei das <span className="text-gradient">Chaves</span>
            </h1>
          </div>

          <p className="text-lg md:text-xl text-muted-foreground max-w-lg">
            Chaveiro profissional 24 horas. Atendemos residências, veículos e empresas com rapidez e segurança.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 rounded-lg bg-primary px-8 py-4 text-lg font-bold text-primary-foreground transition-all hover:scale-105 glow-primary"
            >
              <MessageCircle className="h-6 w-6" />
              Chamar no WhatsApp
            </a>
            <a
              href="tel:+5500000000000"
              className="inline-flex items-center justify-center gap-3 rounded-lg border border-primary/30 bg-secondary px-8 py-4 text-lg font-semibold text-foreground transition-all hover:bg-primary/10"
            >
              <Phone className="h-5 w-5 text-primary" />
              Ligar Agora
            </a>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap gap-6 pt-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-success" />
              Disponível agora
            </div>
            <div>⚡ Chegamos em até 30 min</div>
            <div>🔒 +10 anos de experiência</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
