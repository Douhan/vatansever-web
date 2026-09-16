import { Button } from "../components/ui/Button";

export function NotFoundPage() {
  return (
    <div className="container" style={{ padding: "120px 0", textAlign: "center" }}>
      <span className="eyebrow" style={{ justifyContent: "center" }}>
        404
      </span>
      <h1 className="section-title">Aradığınız sayfa bulunamadı</h1>
      <p className="section-sub" style={{ marginInline: "auto" }}>
        Bağlantı hatalı olabilir ya da sayfa taşınmış olabilir.
      </p>
      <div style={{ marginTop: 32 }}>
        <Button to="/">Anasayfaya Dön</Button>
      </div>
    </div>
  );
}
