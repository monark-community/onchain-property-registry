
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import PropertyMap from "@/components/PropertyMap";
import SubmitData from "@/components/SubmitData";
import About from "@/components/About";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <PropertyMap />
      <SubmitData />
      <About />
      <Footer />
    </div>
  );
};

export default Index;
