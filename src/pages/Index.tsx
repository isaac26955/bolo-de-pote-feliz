import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Products from "@/components/Products";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Products />
      <Contact />
      <Footer />
      <WhatsAppFloat />
    </main>
  );
};

export default Index;
