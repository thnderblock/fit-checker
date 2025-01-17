import { useEffect } from "react";
import Lenis from "lenis";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Steps from "./components/Steps";
import Results from "./components/Results";
import CTA from "./components/CTA";

function App() {
  //Smooth Scroll
  useEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis();

    // Use requestAnimationFrame to continuously update the scroll
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <>
      <main>
        <NavBar />
        <Hero />
        <Steps />
        <Results />
        <CTA />
        <div>Footer</div>
      </main>
    </>
  );
}

export default App;
