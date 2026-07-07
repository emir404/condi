import Hero from "@/components/hero/Hero";
import Menu from "@/components/menu/Menu";
import About from "@/components/about/About";
import SundayBreakfast from "@/components/sunday/SundayBreakfast";
import Contact from "@/components/contact/Contact";
import Footer from "@/components/footer/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Menu />
      <SundayBreakfast />
      <Contact />
      <Footer />
    </>
  );
}
