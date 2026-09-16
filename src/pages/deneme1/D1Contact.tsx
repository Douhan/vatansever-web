import { useState, type FormEvent } from "react";
import { Reveal } from "../../components/motion/Reveal";

type Status = "idle" | "submitting" | "success";

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function D1Contact() {
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
    <section id="iletisim" className="d1-section">
      <div className="d1-container d1-contact__grid">
        <Reveal>
          <span className="d1-eyebrow">İletişim</span>
          <h2 className="d1-section-title">Projenizi konuşalım</h2>
          <p className="d1-section-sub">
            Formu doldurun, 1 iş günü içinde dönüş yapalım. İsterseniz doğrudan e-posta da atabilirsiniz.
          </p>
          <a className="d1-contact__email" href="mailto:doguhanvatansever27@gmail.com">
            doguhanvatansever27@gmail.com
          </a>
        </Reveal>

        <Reveal delay={100} className="d1-glass d1-contact__card">
          {status === "success" ? (
            <div className="d1-contact__success">
              <h3>Mesajınız alındı 🎉</h3>
              <p>Teşekkürler! En kısa sürede size dönüş yapacağız.</p>
              <button type="button" className="d1-btn d1-btn-ghost d1-btn-sm" onClick={resetForm}>
                Yeni mesaj gönder
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate>
              <div className="d1-field">
                <label htmlFor="d1-name">Ad Soyad</label>
                <input id="d1-name" value={name} onChange={(event) => setName(event.target.value)} placeholder="Adınız Soyadınız" />
                {errors.name ? <span className="d1-field-error">{errors.name}</span> : null}
              </div>

              <div className="d1-field">
                <label htmlFor="d1-email">E-posta</label>
                <input
                  id="d1-email"
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="ornek@sirket.com"
                />
                {errors.email ? <span className="d1-field-error">{errors.email}</span> : null}
              </div>

              <div className="d1-field">
                <label htmlFor="d1-projectType">Proje Türü</label>
                <select id="d1-projectType" value={projectType} onChange={(event) => setProjectType(event.target.value)}>
                  <option>Mobil Uygulama</option>
                  <option>Web Sitesi</option>
                  <option>Web Uygulaması</option>
                  <option>UI/UX Tasarım</option>
                  <option>Diğer</option>
                </select>
              </div>

              <div className="d1-field">
                <label htmlFor="d1-message">Proje Detayı</label>
                <textarea
                  id="d1-message"
                  rows={4}
                  value={message}
                  onChange={(event) => setMessage(event.target.value)}
                  placeholder="Projenizden kısaca bahsedin..."
                />
                {errors.message ? <span className="d1-field-error">{errors.message}</span> : null}
              </div>

              <button type="submit" className="d1-btn d1-btn-primary d1-btn-block" disabled={status === "submitting"}>
                {status === "submitting" ? "Gönderiliyor…" : "Mesajı Gönder"}
              </button>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}
