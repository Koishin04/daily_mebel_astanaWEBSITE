import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Advantages from "@/components/Advantages";
import Works from "@/components/Works";
import Steps from "@/components/Steps";
import Pricing from "@/components/Pricing";
import Reviews from "@/components/Reviews";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Advantages />
        <Works />
        <Steps />
        <Pricing />
        <Reviews />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
