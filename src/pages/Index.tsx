
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import RoleBasedValue from "@/components/RoleBasedValue";
import PropertyMap from "@/components/PropertyMap";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <RoleBasedValue />
      <PropertyMap />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Index;
