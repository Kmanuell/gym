import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ClassesGrid from "@/components/ClassesGrid";
import Stats from "@/components/Stats";
import Benefits from "@/components/Benefits";
import PlansMarquee from "@/components/PlansMarquee";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <ClassesGrid />
        <PlansMarquee />
        <Stats />
        <Benefits />
        <Footer/>
      </main>
    </div>
  );
};

export default Index;
