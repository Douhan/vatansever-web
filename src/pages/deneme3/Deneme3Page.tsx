import { D3Header } from "./D3Header";
import { D3Footer } from "./D3Footer";
import { D3Hero } from "./D3Hero";
import { D3Highlight } from "./D3Highlight";
import { D3Services } from "./D3Services";
import { D3Portfolio } from "./D3Portfolio";
import { D3Pricing } from "./D3Pricing";
import { D3Contact } from "./D3Contact";
import { useHashScroll } from "../../hooks/useHashScroll";
import "./deneme3.css";

export function Deneme3Page() {
  useHashScroll();

  return (
    <div className="d3-page">
      <D3Header />

      <main>
        <D3Hero />
        <D3Highlight />
        <D3Services />
        <D3Portfolio />
        <D3Pricing />
        <D3Contact />
      </main>

      <D3Footer />
    </div>
  );
}
