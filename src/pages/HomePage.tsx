import { Hero } from "../components/sections/Hero";
import { Services } from "../components/sections/Services";
import { Process } from "../components/sections/Process";
import { PortfolioGrid } from "../components/sections/PortfolioGrid";
import { Pricing } from "../components/sections/Pricing";
import { CtaContact } from "../components/sections/CtaContact";
import { useHashScroll } from "../hooks/useHashScroll";

export function HomePage() {
  useHashScroll();

  return (
    <>
      <Hero />
      <Services />
      <Process />
      <PortfolioGrid />
      <Pricing />
      <CtaContact />
    </>
  );
}
