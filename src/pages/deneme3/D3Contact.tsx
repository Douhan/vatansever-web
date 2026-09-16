import { useState, type FormEvent } from "react";
import { Reveal } from "../../components/motion/Reveal";

type Status = "idle" | "submitting" | "success";

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function D3Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [projectType, setProjectType] = useState("Mobil Uygulama");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const nextErrors: FormErrors = {};
    if (name.trim().length < 2) nextErrors.name = "Adınızı yazar mısınız?";
    if (!EMAIL_PATTERN.test(email)) nextErrors.email = "Geçerli bir e-posta adresi girin.";
    if (message.trim().length < 10) nextErrors.message = "Projenizden biraz daha bahseder misiniz?";

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setStatus("submitting");
    window.setTimeout(() => setStatus("success"), 1100);
  };

  const resetForm = () => {
    setName("");
    setEmail("");
    setProjectType("Mobil Uygulama");
    setMessage("");
    setErrors({});
    setStatus("idle");
  };

  return (
    <section id="iletisim" className="d3-section">
      <div className="d3-container">
        <Reveal>
          <span className="d3-eyebrow">İletişim</span>
          <h2 className="d3-section-title">Projenizi konuşalım.</h2>
          <p className="d3-section-sub">Formu doldurun, 1 iş günü içinde dönüş yapalım.</p>
          <p className="d3-section-sub">
            <a className="d3-link" href="mailto:doguhanvatansever27@gmail.com">
              doguhanvatansever27@gmail.com
            </a>
          </p>
        </Reveal>

        <Reveal delay={100} className="d3-contact__card">
          {status === "success" ? (
            <div className="d3-contact__success">
              <h3>Mesajınız alındı</h3>
              <p>Teşekkürler! En kısa sürede size dönüş yapacağız.</p>
              <button type="button" className="d3-btn-pill d3-btn-pill--ghost" onClick={resetForm}>
                Yeni mesaj gönder
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate>
              <div className="d3-field">
                <label htmlFor="d3-name">Ad Soyad</label>
                <input id="d3-name" value={name} onChange={(event) => setName(event.target.value)} placeholder="Adınız Soyadınız" />
                {errors.name ? <span className="d3-field-error">{errors.name}</span> : null}
              </div>

              <div className="d3-field">
                <label htmlFor="d3-email">E-posta</label>
                <input
                  id="d3-email"
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="ornek@sirket.com"
                />
                {errors.email ? <span className="d3-field-error">{errors.email}</span> : null}
              </div>

              <div className="d3-field">
                <label htmlFor="d3-projectType">Proje Türü</label>
                <select id="d3-projectType" value={projectType} onChange={(event) => setProjectType(event.target.value)}>
                  <option>Mobil Uygulama</option>
                  <option>Web Sitesi</option>
                  <option>Web Uygulaması</option>
                  <option>UI/UX Tasarım</option>
                  <option>Diğer</option>
                </select>
              </div>

              <div className="d3-field">
                <label htmlFor="d3-message">Proje Detayı</label>
                <textarea
                  id="d3-message"
                  rows={4}
                  value={message}
                  onChange={(event) => setMessage(event.target.value)}
                  placeholder="Projenizden kısaca bahsedin..."
                />
                {errors.message ? <span className="d3-field-error">{errors.message}</span> : null}
              </div>

              <button type="submit" className="d3-btn-pill d3-btn-block" disabled={status === "submitting"}>
                {status === "submitting" ? "Gönderiliyor…" : "Mesajı Gönder"}
              </button>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}
