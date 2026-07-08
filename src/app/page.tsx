import Hero from "@/components/hero/Hero";
import OfferingsHub from "@/components/home/OfferingsHub";
import About from "@/components/about/About";
import Contact from "@/components/contact/Contact";
import Footer from "@/components/footer/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <OfferingsHub />
      <About />
      <Contact />
      <Footer />
    </>
  );
}
