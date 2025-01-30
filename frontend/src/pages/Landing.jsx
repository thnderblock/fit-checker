import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import Steps from "../components/Steps";
import Results from "../components/Results";
import CTA from "../components/CTA";

const Landing = () => {
  return (
    <div>
      <NavBar />
      <Hero />
      <Steps />
      <Results />
      <CTA />
      <div>Footer</div>
    </div>
  );
};

export default Landing;
