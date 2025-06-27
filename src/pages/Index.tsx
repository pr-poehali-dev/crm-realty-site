import Hero from "@/components/Hero";
import Features from "@/components/Features";
import AdditionalServices from "@/components/AdditionalServices";
import Stats from "@/components/Stats";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import ContactForm from "@/components/ContactForm";
import OfficeVisit from "@/components/OfficeVisit";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Features />
      <AdditionalServices />
      <Stats />
      <Testimonials />
      <FAQ />
      <ContactForm />
      <OfficeVisit />
      <Footer />
    </div>
  );
};

export default Index;
