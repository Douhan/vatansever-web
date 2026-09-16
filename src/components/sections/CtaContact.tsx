import { useState, type FormEvent } from "react";
import { SectionHeading } from "../ui/SectionHeading";
import { Reveal } from "../motion/Reveal";
import "./CtaContact.css";

type Status = "idle" | "submitting" | "success";

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function CtaContact() {
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
    if (message.trim().length < 10) nextErrors.message = "Projenizden biraz daha bahseder misiniz? (en az 10 karakter)";

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setStatus("submitting");
    window.setTimeout(() => {
      setStatus("success");
    }, 1100);
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
    <section id="iletisim" className="section contact">
      <div className="container contact__grid">
        <Reveal>
          <SectionHeading
            eyebrow="İletişim"
            title="Projenizi konuşalım"
            subtitle="Formu doldurun, 1 iş günü içinde size dönüş yapalım. İsterseniz doğrudan e-posta da atabilirsiniz."
          />
          <a className="contact__email" href="mailto:doguhanvatansever27@gmail.com">
            doguhanvatansever27@gmail.com
          </a>
        </Reveal>

        <Reveal delay={100} className="card contact__card">
          {status === "success" ? (
            <div className="contact__success">
              <h3>Mesajınız alındı 🎉</h3>
              <p>Teşekkürler! En kısa sürede size dönüş yapacağız.</p>
              <button type="button" className="btn btn-ghost btn-sm" onClick={resetForm}>
                Yeni mesaj gönder
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate>
              <div className="contact__field">
                <label htmlFor="name">Ad Soyad</label>
                <input id="name" value={name} onChange={(event) => setName(event.target.value)} placeholder="Adınız Soyadınız" />
                {errors.name ? <span className="contact__error">{errors.name}</span> : null}
              </div>

              <div className="contact__field">
                <label htmlFor="email">E-posta</label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="ornek@sirket.com"
                />
                {errors.email ? <span className="contact__error">{errors.email}</span> : null}
              </div>

              <div className="contact__field">
                <label htmlFor="projectType">Proje Türü</label>
                <select id="projectType" value={projectType} onChange={(event) => setProjectType(event.target.value)}>
                  <option>Mobil Uygulama</option>
                  <option>Web Sitesi</option>
                  <option>Web Uygulaması</option>
                  <option>UI/UX Tasarım</option>
                  <option>Diğer</option>
                </select>
              </div>

              <div className="contact__field">
                <label htmlFor="message">Proje Detayı</label>
                <textarea
                  id="message"
                  rows={4}
                  value={message}
                  onChange={(event) => setMessage(event.target.value)}
                  placeholder="Projenizden kısaca bahsedin..."
                />
                {errors.message ? <span className="contact__error">{errors.message}</span> : null}
              </div>

              <button type="submit" className="btn btn-primary contact__submit" disabled={status === "submitting"}>
                {status === "submitting" ? "Gönderiliyor…" : "Mesajı Gönder"}
              </button>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}
