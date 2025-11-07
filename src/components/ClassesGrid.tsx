import { Dumbbell, Heart, Flame, Zap, User, Activity } from "lucide-react";
import { Button } from "@/components/ui/button";

const classes = [
  {
    icon: User,
    title: "Entrenamiento Personal",
    description: "Planes de entrenamiento personalizados uno a uno adaptados a tus objetivos de fitness con apoyo dedicado.",
  },
  {
    icon: Heart,
    title: "Fuerza y Acondicionamiento",
    description: "Desarrolla fuerza y resistencia a través de entrenamiento de resistencia progresiva y movimientos funcionales.",
  },
  {
    icon: Flame,
    title: "HIIT & Cardio",
    description: "Entrenamiento en intervalos de alta intensidad diseñado para maximizar la quema de calorías y la condición cardiovascular.",
  },
  {
    icon: Activity,
    title: "Yoga & Mindfulness",
    description: "Mejora la flexibilidad, el equilibrio y la claridad mental a través de prácticas guiadas de yoga y meditación.",
  },
  {
    icon: Zap,
    title: "Boxing & Combat Training",
    description: "Entrenamientos de boxeo de alta energía que involucran todo tu cuerpo y desarrollan fuerza y agilidad.",
  },
  {
    icon: Dumbbell,
    title: "Rendimiento Atlético y Agilidad",
    description: "Entrenamiento especializado para mejorar la velocidad, la potencia y el rendimiento atlético para todos los niveles de habilidad.",
  },
];

const ClassesGrid = () => {
  return (
    <section id="classes" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mb-16">
          <p className="text-primary text-sm font-roboto font-medium mb-4 uppercase tracking-wider">
            Explora Clases
          </p>
          <h2 className="text-4xl md:text-6xl font-impact mb-6">
            Encuentra la Clase de Fitness Perfecta para tus Objetivos
          </h2>
          <p className="text-lg text-muted-foreground font-roboto mb-6">
            Nuestras instalaciones bien equipadas están diseñadas para ofrecer una experiencia de fitness dinámica e inspiradora. Enfocados en la innovación, la inclusividad y la excelencia, Seven brinda un entorno premium diseñado para empoderar a cada miembro.
          </p>
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-roboto">
            VER HORARIO
          </Button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {classes.map((classItem, index) => {
            const Icon = classItem.icon;
            return (
              <div
                key={index}
                className="group relative bg-card border border-border rounded-lg p-8 hover:border-primary transition-all duration-300 overflow-hidden"
              >
                <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  
                  <h3 className="text-2xl font-impact mb-4 text-foreground group-hover:text-primary transition-colors">
                    {classItem.title}
                  </h3>
                  
                  <p className="text-muted-foreground font-roboto text-sm leading-relaxed">
                    {classItem.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ClassesGrid;
