import { Apple, Dumbbell, Calendar, Users } from "lucide-react";

const benefits = [
  {
    icon: Apple,
    title: "Alimentación saludable",
    description: "Planes de comidas orgánicas, prácticas de atención plena y coaching de bienestar para apoyar tu viaje de fitness completo.",
  },
  {
    icon: Dumbbell,
    title: "Amplia Gama de Clases",
    description: "Desde HIIT hasta yoga, entrenamiento de fuerza hasta cardio: programas diversos diseñados para cada nivel de fitness y objetivo.",
  },
  {
    icon: Calendar,
    title: "Planes de Membresía Flexibles",
    description: "Elige entre membresías mensuales, trimestrales o anuales sin compromisos a largo plazo y con fácil cancelación.",
  },
  {
    icon: Users,
    title: "Comunidad de Fitness Solidaria",
    description: "Únete a una comunidad motivadora de personas con ideas afines que inspiran y apoyan el viaje de fitness de cada uno.",
  },
];

const Benefits = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-primary text-sm font-roboto font-medium mb-4 uppercase tracking-wider">
            ¿Por qué elegirnos?
          </p>
          <h2 className="text-4xl md:text-6xl font-impact mb-6">
             Entrenamiento con clases dirigidas por expertos
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="text-center group"
              >
                <div className="w-20 h-20 rounded-full bg-card border-2 border-primary flex items-center justify-center mx-auto mb-6 group-hover:bg-primary transition-all duration-300">
                  <Icon className="w-10 h-10 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                
                <h3 className="text-xl font-impact mb-4 text-foreground">
                  {benefit.title}
                </h3>
                
                <p className="text-muted-foreground font-roboto text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
