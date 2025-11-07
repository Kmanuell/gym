import Marquee from "react-fast-marquee";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const plans = [
   {
    name: "Diario",
    price: "4.990",
    period: "dia",
    features: [
      "Acceso el a cualquier sede",
      "Diaria",
      "Acceso a los vestuarios",
      "Evaluación duchas",
      "Ingreso el dia de la contratacion",
    ],
    link: "https://shop.agenciamarketingbtm.cl/?add-to-cart=13",
    popular: false,
  },
  {
    name: "Basico",
    price: "29.990",
    period: "mes",
    features: [
      "Acceso a las instalaciones del gimnasio",
      "2 clases grupales por semana",
      "Acceso a los vestuarios",
      "Evaluación física",
      "Acceso a la aplicación móvil",
    ],
    link: "https://shop.agenciamarketingbtm.cl/?add-to-cart=91",
    popular: false,
  },
  {
    name: "Pro",
    price: "59.990",
    period: "mes",
    features: [
      "Acceso ilimitado al gimnasio",
      "Clases grupales ilimitadas",
      "Sesión de entrenamiento personal",
      "Consulta nutricional",
      "Taquilla premium",
      "Pases de invitado (2/mes)",
    ],
    link: "https://shop.agenciamarketingbtm.cl/?add-to-cart=92",
    popular: true,
  },
  {
    name: "Elite",
    price: "99.990",
    period: "mes",
    features: [
     "Acceso ilimitado al gimnasio",
      "Clases grupales ilimitadas",
      "Sesión de entrenamiento personal",
      "Consulta nutricional",
      "Taquilla premium",
      "Pases de invitado (2/mes)",
    ],
    link: "https://shop.agenciamarketingbtm.cl/?add-to-cart=93",
    popular: false,
  },
  {
    name: "Estudiante",
    price: "25.990",
    period: "mes",
    features: [
      "Acceso ilimitado al gimnasio",
      "Clases grupales ilimitadas",
      "Sesión de entrenamiento personal",
      "Consulta nutricional",
      "Taquilla premium",
      "Pases de invitado (2/mes)",
    ],
    link: "https://shop.agenciamarketingbtm.cl/?add-to-cart=94",
    popular: false,
  },
  {
    name: "Trimestal",
    price: "149.990",
    period: "mes",
    features: [
     "Acceso ilimitado al gimnasio",
      "Clases grupales ilimitadas",
      "Sesión de entrenamiento personal",
      "Consulta nutricional",
      "Taquilla premium",
      "Pases de invitado (2/mes)",
    ],
    link: "https://shop.agenciamarketingbtm.cl/?add-to-cart=95",
    popular: false,
  },
];

const PlansMarquee = () => {
  return (
    <section id="plans" className="py-2 bg-background overflow-hidden">
      <div className="container mx-auto px-4 mb-62">
        <p className="text-primary text-sm font-roboto font-medium mb-4 uppercase tracking-wider">
          Planes disponibles
        </p>
        <h2 className="text-4xl md:text-6xl font-impact mb-6">
          Elige tu Plan de Fitness Perfecto
        </h2>
        <p className="text-lg text-muted-foreground font-roboto max-w-2xl">
          Selecciona el plan que se adapte a tu estilo de vida y objetivos. Todos los planes incluyen
          acceso a nuestras instalaciones de última generación y soporte experto.
        </p>
      </div>

      <Marquee gradient={false} speed={40} pauseOnHover={true} className="py-8">
        {plans.map((plan, index) => (
          <div
            key={index}
            className="relative mx-4 w-[320px] bg-card border-2 border-border rounded-lg p-8 hover:border-primary transition-all duration-300 group"
          >
            {plan.popular && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-xs font-roboto font-bold uppercase">
                Más Popular
              </div>
            )}

            <div className="mb-6">
              <h3 className="text-2xl font-impact mb-4 text-foreground group-hover:text-primary transition-colors">
                {plan.name}
              </h3>
              <div className="flex items-baseline gap-2">
                <span className="text-5xl font-impact text-primary">${plan.price}</span>
                <span className="text-muted-foreground font-roboto">/{plan.period}</span>
              </div>
            </div>

            <ul className="space-y-4 mb-8">
              {plan.features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-primary" />
                  </div>
                  <span className="text-sm font-roboto text-foreground">{feature}</span>
                </li>
              ))}
            </ul>

            <Button
                asChild
              className={`w-full font-roboto ${
               plan.popular
               ? "bg-primary hover:bg-primary/90 text-primary-foreground"
              : "bg-secondary hover:bg-secondary/80 text-secondary-foreground"
              }`}
                    >
            <a href={plan.link} target="_blank" rel="noopener noreferrer">¡Empezar!</a>
          </Button>
          </div>
        ))}
      </Marquee>

      <Marquee gradient={false} speed={40} direction="right" pauseOnHover={true} className="py-8">
        {plans.map((plan, index) => (
          <div
            key={`reverse-${index}`}
            className="relative mx-4 w-[320px] bg-card border-2 border-border rounded-lg p-8 hover:border-primary transition-all duration-300 group"
          >
            {plan.popular && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-xs font-roboto font-bold uppercase">
                Más Popular
              </div>
            )}

            <div className="mb-6">
              <h3 className="text-2xl font-impact mb-4 text-foreground group-hover:text-primary transition-colors">
                {plan.name}
              </h3>
              <div className="flex items-baseline gap-2">
                <span className="text-5xl font-impact text-primary">${plan.price}</span>
                <span className="text-muted-foreground font-roboto">/{plan.period}</span>
              </div>
            </div>

            <ul className="space-y-4 mb-8">
              {plan.features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-primary" />
                  </div>
                  <span className="text-sm font-roboto text-foreground">{feature}</span>
                </li>
              ))}
            </ul>

             <Button
                asChild
              className={`w-full font-roboto ${
               plan.popular
               ? "bg-primary hover:bg-primary/90 text-primary-foreground"
              : "bg-secondary hover:bg-secondary/80 text-secondary-foreground"
              }`}
                    >
            <a href={plan.link} target="_blank" rel="noopener noreferrer">¡Empezar!</a>
          </Button>
          </div>
        ))}
      </Marquee>
    </section>
  );
};

export default PlansMarquee;
