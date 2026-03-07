import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { TrustStrip } from "./components/TrustStrip";
import { Services } from "./components/Services";
import { WhyChooseUs } from "./components/WhyChooseUs";
import { Process } from "./components/Process";
import { Portfolio } from "./components/Portfolio";
import { About } from "./components/About";
import { CTA } from "./components/CTA";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TrustStrip />
        <Services />
        <WhyChooseUs />
        <Process />
        <Portfolio />
        <About />
        <CTA />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
