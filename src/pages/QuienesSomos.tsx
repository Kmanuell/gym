import Header from "@/components/Header";

const QuienesSomos = () => {
  return (
    <>
      <Header />

      <main className="pt-24 container mx-auto px-4">
        <section className="text-center">
          <h1 className="text-4xl font-bold mb-4 text-primary">¿Quiénes Somos?</h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            En <strong>SEVEN</strong> somos más que un gimnasio — somos una comunidad de personas apasionadas por 
            mejorar su salud y alcanzar su máximo potencial. Nuestro enfoque combina entrenamiento funcional, 
            nutrición y bienestar integral para ayudarte a lograr tus objetivos.
          </p>
        </section>

        <section className="mt-12 grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-semibold mb-2 text-primary">Nuestra Misión</h2>
            <p className="text-muted-foreground">
              Promover un estilo de vida saludable a través del movimiento, la constancia y la disciplina.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2 text-primary">Nuestra Visión</h2>
            <p className="text-muted-foreground">
              Ser el espacio favorito de entrenamiento en Chile, donde cada persona encuentre motivación, 
              comunidad y resultados reales.
            </p>
          </div>
        </section>
      </main>
    </>
  );
};

export default QuienesSomos;
