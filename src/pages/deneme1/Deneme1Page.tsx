import { D1Header } from "./D1Header";
import { D1Footer } from "./D1Footer";
import { D1Hero } from "./D1Hero";
import { D1Services } from "./D1Services";
import { D1Portfolio } from "./D1Portfolio";
import { D1Pricing } from "./D1Pricing";
import { D1Contact } from "./D1Contact";
import { useHashScroll } from "../../hooks/useHashScroll";
import "./deneme1.css";

export function Deneme1Page() {
  useHashScroll();

  return (
    <div className="d1-page">
      <D1Header />

      <main>
        <D1Hero />
        <D1Services />
        <D1Portfolio />
        <D1Pricing />
        <D1Contact />
      </main>

      <D1Footer />
    </div>
  );
}
