import { Key, Car, Home, Building2, Shield, Wrench } from "lucide-react";

const services = [
  {
    icon: Home,
    title: "Residencial",
    description: "Abertura de portas, troca de fechaduras, instalação de fechaduras tetra e multiponto.",
  },
  {
    icon: Car,
    title: "Automotivo",
    description: "Cópia de chaves codificadas, abertura de veículos e programação de controles.",
  },
  {
    icon: Building2,
    title: "Comercial",
    description: "Fechaduras de alta segurança, sistemas de controle de acesso e cofres.",
  },
  {
    icon: Key,
    title: "Cópia de Chaves",
    description: "Cópia de todos os tipos de chaves: residenciais, automotivas e especiais.",
  },
  {
    icon: Shield,
    title: "Fechaduras Digitais",
    description: "Instalação e manutenção de fechaduras eletrônicas e biométricas.",
  },
  {
    icon: Wrench,
    title: "Manutenção",
    description: "Reparo e lubrificação de fechaduras, dobradiças e mecanismos de segurança.",
  },
];

const ServicesSection = () => {
  return (
    <section id="servicos" className="py-24 bg-secondary/50">
      <div className="container">
        <div className="text-center mb-16 space-y-4">
          <span className="text-primary font-semibold text-sm uppercase tracking-widest">Nossos Serviços</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold uppercase">
            Soluções <span className="text-gradient">Completas</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Oferecemos serviços completos para sua segurança, com atendimento rápido e profissional.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="group rounded-xl border border-border bg-card p-8 transition-all hover:border-primary/40 hover:shadow-[0_0_30px_hsl(30_78%_55%/0.1)]"
            >
              <div className="mb-5 inline-flex rounded-lg bg-primary/10 p-3">
                <service.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-xl font-display font-bold mb-3">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
