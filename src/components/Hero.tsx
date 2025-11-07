import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import heroImage from "@/assets/hero-fitness.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20">
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Fitness training" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 bg-card/80 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-primary/20">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-primary text-primary" />
              ))}
            </div>
            <span className="text-2xl font-bold font-roboto">4.7</span>
            <span className="text-sm text-muted-foreground font-roboto">Cliente satisfecho</span>
          </div>

          <p className="text-primary text-sm font-roboto font-medium mb-4 uppercase tracking-wider">
            ¡Transforma tu cuerpo y mente hoy mismo!
          </p>

          <h1 className="text-5xl md:text-7xl font-impact mb-6 leading-tight">
            Explora planes & alcanza tus metas.
          </h1>

          <p className="text-lg text-muted-foreground font-roboto mb-4">
            En Seven , ofrecemos soluciones de fitness personalizadas para adaptarse a tus objetivos y estilo de vida únicos. Ya seas principiante o atleta avanzado,
            nuestras clases dirigidas por expertos están diseñadas para desafiar e inspirar.
          </p>

          <p className="text-base text-muted-foreground font-roboto mb-8">
              Enjoy flexibility, intense training for fat loss and performance,
              functional fitness, and expert guidance with personalized progress
              tracking. Build muscle, agility, and unleash power!
          </p>

          <div className="flex flex-wrap gap-4">
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-roboto px-8 py-6 text-base">
              <a href="#classes">Ver clases</a>
            </Button>
            <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-roboto px-8 py-6 text-base">
              <a href="https://wa.me/56936585146" target="_blank">Contáctanos</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
