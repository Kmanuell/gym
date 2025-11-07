import statsImage from "@/assets/stats-gym.jpg";

const stats = [
  { value: "91K+", label: "Miembros Satisfechos" },
  { value: "84K+", label: "Recomendados" },
  { value: "42+", label: "Atenciones Semanales" },
  { value: "4.7", label: "Reseñas de Clientes" },
];

const progressBars = [
  { label: "Entrenamientos para potenciar el éxito", percentage: 57 },
  { label: "Compromiso con el Entrenamiento", percentage: 78 },
  { label: "Número de Miembros Activos", percentage: 85 },
  { label: "Índice de Instalaciones de Última Generación", percentage: 92 },
];

const Stats = () => {
  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-primary text-sm font-roboto font-medium mb-4 uppercase tracking-wider">
              Resultados
            </p>
            <h2 className="text-4xl md:text-6xl font-impact mb-6">
              Construyendo una versión <span className="text-primary">+</span> de ti.
            </h2>
            <p className="text-muted-foreground font-roboto mb-8 leading-relaxed">
             Seven se sitúa a la vanguardia del entrenamiento funcional y las soluciones de fitness más innovadoras.
            Nuestro enfoque está diseñado para ayudarte a lograr resultados medibles a través de la dedicación, la experiencia y unas instalaciones de última generación.
            </p>

            <div className="space-y-6 mb-12">
              {progressBars.map((bar, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-roboto text-foreground">{bar.label}</span>
                    <span className="text-sm font-roboto text-primary font-bold">{bar.percentage}%</span>
                  </div>
                  <div className="h-2 bg-secondary rounded-full overflow-hidden">
                    <div
                      className="h-full bg-primary rounded-full transition-all duration-1000"
                      style={{ width: `${bar.percentage}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl md:text-5xl font-impact text-primary mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm font-roboto text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <img
              src={statsImage}
              alt="Gym training"
              className="w-full h-[600px] object-cover rounded-lg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent rounded-lg" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
