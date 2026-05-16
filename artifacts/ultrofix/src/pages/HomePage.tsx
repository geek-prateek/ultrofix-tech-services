import Hero from "@/components/home/Hero";
import Estimator from "@/components/home/Estimator";
import Services from "@/components/home/Services";
import About from "@/components/home/About";
import Reviews from "@/components/home/Reviews";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Estimator />
      <Services />
      <About />
      <Reviews />
    </>
  );
}
