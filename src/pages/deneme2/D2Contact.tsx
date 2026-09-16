import { useState, type FormEvent } from "react";
import { Reveal } from "../../components/motion/Reveal";

type Status = "idle" | "submitting" | "success";

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function D2Contact() {
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
    <section id="iletisim" className="d2-section">
      <div className="d2-container d2-contact__grid">
        <Reveal>
          <span className="d2-eyebrow">İletişim</span>
          <h2 className="d2-section-title">Projenizi konuşalım</h2>
          <p className="d2-section-sub">
            Formu doldurun, 1 iş günü içinde dönüş yapalım. İsterseniz doğrudan e-posta da atabilirsiniz.
          </p>
          <a className="d2-contact__email" href="mailto:doguhanvatansever27@gmail.com">
            doguhanvatansever27@gmail.com
          </a>
        </Reveal>

        <Reveal delay={100} className="d2-contact__card">
          {status === "success" ? (
            <div className="d2-contact__success">
              <h3>Mesajınız alındı</h3>
              <p>Teşekkürler! En kısa sürede size dönüş yapacağız.</p>
              <button type="button" className="d2-btn d2-btn-ghost d2-btn-sm" onClick={resetForm}>
                Yeni mesaj gönder
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate>
              <div className="d2-field">
                <label htmlFor="d2-name">Ad Soyad</label>
                <input id="d2-name" value={name} onChange={(event) => setName(event.target.value)} placeholder="Adınız Soyadınız" />
                {errors.name ? <span className="d2-field-error">{errors.name}</span> : null}
              </div>

              <div className="d2-field">
                <label htmlFor="d2-email">E-posta</label>
                <input
                  id="d2-email"
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="ornek@sirket.com"
                />
                {errors.email ? <span className="d2-field-error">{errors.email}</span> : null}
              </div>

              <div className="d2-field">
                <label htmlFor="d2-projectType">Proje Türü</label>
                <select id="d2-projectType" value={projectType} onChange={(event) => setProjectType(event.target.value)}>
                  <option>Mobil Uygulama</option>
                  <option>Web Sitesi</option>
                  <option>Web Uygulaması</option>
                  <option>UI/UX Tasarım</option>
                  <option>Diğer</option>
                </select>
              </div>

              <div className="d2-field">
                <label htmlFor="d2-message">Proje Detayı</label>
                <textarea
                  id="d2-message"
                  rows={4}
                  value={message}
                  onChange={(event) => setMessage(event.target.value)}
                  placeholder="Projenizden kısaca bahsedin..."
                />
                {errors.message ? <span className="d2-field-error">{errors.message}</span> : null}
              </div>

              <button type="submit" className="d2-btn d2-btn-primary d2-btn-block" disabled={status === "submitting"}>
                {status === "submitting" ? "Gönderiliyor…" : "Mesajı Gönder"}
              </button>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}
