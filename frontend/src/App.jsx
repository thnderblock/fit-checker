import { useEffect } from "react";
import Lenis from "lenis";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";

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
        <div>How to</div>
        <div>Effectiveness/Results</div>
        <div>CTA</div>
        <div>Footer</div>
      </main>
    </>
  );
}

export default App;
