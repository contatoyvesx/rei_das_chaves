import { CheckCircle2 } from "lucide-react";

const highlights = [
  "Mais de 10 anos de experiência",
  "Atendimento 24 horas, 7 dias por semana",
  "Profissionais treinados e certificados",
  "Chegamos em até 30 minutos",
  "Preço justo e transparente",
  "Garantia em todos os serviços",
];

const AboutSection = () => {
  return (
    <section id="sobre" className="py-24">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <span className="text-primary font-semibold text-sm uppercase tracking-widest">
                Por que nos escolher?
              </span>
              <h2 className="text-4xl md:text-5xl font-display font-bold uppercase">
                Confiança e <span className="text-gradient">Segurança</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                O Rei das Chaves é referência em serviços de chaveiro na região. 
                Nossa equipe está sempre pronta para atender você com agilidade e profissionalismo, 
                seja de dia ou de noite.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {highlights.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground/80">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-6">
            {[
              { number: "10+", label: "Anos de experiência" },
              { number: "5000+", label: "Clientes atendidos" },
              { number: "24/7", label: "Sempre disponível" },
              { number: "30min", label: "Tempo médio de chegada" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl border border-border bg-card p-8 text-center"
              >
                <div className="text-4xl font-display font-bold text-gradient mb-2">{stat.number}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
