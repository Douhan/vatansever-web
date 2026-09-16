import { D2Header } from "./D2Header";
import { D2Footer } from "./D2Footer";
import { D2Hero } from "./D2Hero";
import { D2Services } from "./D2Services";
import { D2Portfolio } from "./D2Portfolio";
import { D2Pricing } from "./D2Pricing";
import { D2Contact } from "./D2Contact";
import { useHashScroll } from "../../hooks/useHashScroll";
import "./deneme2.css";

export function Deneme2Page() {
  useHashScroll();

  return (
    <div className="d2-page">
      <D2Header />

      <main>
        <D2Hero />
        <D2Services />
        <D2Portfolio />
        <D2Pricing />
        <D2Contact />
      </main>

      <D2Footer />
    </div>
  );
}
