import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import Features from "./components/Features";
import SeeInAction from "./components/SeeInAction";
import CallToAction from "./components/CallToAction";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <Hero />

        <Features />

        <SeeInAction />

        <CallToAction />
      </main>

      <Footer />
    </>
  );
}
