import sentinelopsAdminDashboard from "../assets/case-studies/sentinelops/dashboard.png";
import sentinelopsAdminPersonnel from "../assets/case-studies/sentinelops/personnel.png";
import sentinelopsAdminCheckpoints from "../assets/case-studies/sentinelops/checkpoints.png";
import sentinelopsAdminPatrols from "../assets/case-studies/sentinelops/patrols.png";
import sentinelopsAdminLiveTracking from "../assets/case-studies/sentinelops/live-tracking.png";
import sentinelopsAdminReports from "../assets/case-studies/sentinelops/reports.png";
import sentinelopsGuardSplash from "../assets/case-studies/sentinelopsguard/splash.png";
import sentinelopsGuardHome from "../assets/case-studies/sentinelopsguard/home.png";
import sentinelopsGuardNotification from "../assets/case-studies/sentinelopsguard/notification.png";
import sentinelopsGuardChecklist from "../assets/case-studies/sentinelopsguard/checklist.png";
import sentinelopsGuardQrScan from "../assets/case-studies/sentinelopsguard/qr-scan.png";
import sentinelopsGuardSchedule from "../assets/case-studies/sentinelopsguard/schedule.png";
import sentinelopsGuardHistory from "../assets/case-studies/sentinelopsguard/history.png";
import sentinelopsGuardProfile from "../assets/case-studies/sentinelopsguard/profile.png";

export type ProjectCategory = "Mobil Uygulama" | "Web Uygulaması" | "Web Sitesi";
export type MockupType = "phone" | "browser";

export interface ProjectStat {
  label: string;
  value: string;
}

export interface Project {
  slug: string;
  name: string;
  category: ProjectCategory;
  mockup: MockupType;
  accent: string;
  summary: string;
  tags: string[];
  stats: ProjectStat[];
  overview: string;
  challenge: string;
  solution: string;
  result: string;
  /** Real product screenshot used on the portfolio card, in place of the abstract mockup. */
  screenshot?: string;
  /** Full screenshot gallery shown on the project detail page. */
  screenshots?: string[];
}

export const projects: Project[] = [
  {
    slug: "sentinelopsguard",
    name: "SentinelOpsGuard",
    category: "Mobil Uygulama",
    mockup: "phone",
    accent: "linear-gradient(160deg, #4f6bdb, #1a2447)",
    screenshot: sentinelopsGuardHome,
    screenshots: [
      sentinelopsGuardSplash,
      sentinelopsGuardHome,
      sentinelopsGuardNotification,
      sentinelopsGuardChecklist,
      sentinelopsGuardQrScan,
      sentinelopsGuardSchedule,
      sentinelopsGuardHistory,
      sentinelopsGuardProfile,
    ],
    summary:
      "Güvenlik personelinin QR ve konum doğrulamalı devriye turlarını yürüttüğü, vardiya programını ve geçmişini takip ettiği saha uygulaması.",
    tags: ["React Native", "Expo", "Supabase", "QR Doğrulama", "Konum Takibi", "Push Bildirim"],
    stats: [
      { label: "Doğrulama yöntemi", value: "QR + Konum" },
      { label: "Dil desteği", value: "3 Dil" },
      { label: "Konum paylaşımı", value: "Gerçek Zamanlı" },
    ],
    overview:
      "SentinelOpsGuard, saha personelinin devriye rotalarını QR kod ve konum doğrulamasıyla tamamladığı, vardiya programını ve geçmiş performansını görebildiği bir mobil saha uygulamasıdır.",
    challenge:
      "Kağıt tabanlı devriye çizelgeleri ve sözlü teyitler, hangi kontrol noktasının ne zaman ziyaret edildiğini doğrulamayı zorlaştırıyor; sahadaki ekiple yönetim arasında gerçek zamanlı görünürlük eksikti.",
    solution:
      "Her kontrol noktasına özel QR kod ve konum doğrulaması, canlı vardiya programı ve geçmiş devriye kayıtlarını tek bir uygulamada birleştirdik; devriye başlama vaktini push bildirimle hatırlattık ve Türkçe, İngilizce, Rusça dil desteğiyle farklı milliyetten ekiplerin rahatça kullanabilmesini sağladık.",
    result:
      "Personel devriyesini artık uygulama üzerinden başlatıp tamamlıyor; her QR doğrulaması anlık olarak yönetim paneline düşüyor.",
  },
  {
    slug: "sentinelops",
    name: "SentinelOps",
    category: "Web Uygulaması",
    mockup: "browser",
    accent: "linear-gradient(160deg, #3b4f9e, #12172e)",
    screenshot: sentinelopsAdminDashboard,
    screenshots: [
      sentinelopsAdminDashboard,
      sentinelopsAdminLiveTracking,
      sentinelopsAdminPersonnel,
      sentinelopsAdminCheckpoints,
      sentinelopsAdminPatrols,
      sentinelopsAdminReports,
    ],
    summary:
      "Güvenlik şirketlerinin sahadaki personelini, kontrol noktalarını ve devriye rotalarını tek panelden yönettiği operasyon platformu.",
    tags: ["React", "Supabase", "Leaflet", "Recharts"],
    stats: [
      { label: "Anlık personel konumu", value: "Canlı Harita" },
      { label: "Kontrol noktası bazlı", value: "QR Doğrulama" },
      { label: "Dil desteği", value: "3 Dil" },
    ],
    overview:
      "SentinelOps, güvenlik şirketlerinin personel, kontrol noktası ve devriye rotalarını tek bir panelden yönetmesini sağlayan bir operasyon platformudur.",
    challenge:
      "Şirketler hangi personelin sahada olduğunu ve hangi kontrol noktalarının zamanında ziyaret edildiğini gerçek zamanlı göremiyor, raporlamayı elle tutulan tablolarla yapıyordu.",
    solution:
      "Canlı harita üzerinde personel takibi, QR doğrulamalı kontrol noktaları, devriye rota planlama ve tarih aralığına göre filtrelenebilir performans raporlarını tek panelde topladık.",
    result:
      "Yöneticiler artık sahadaki her doğrulamayı anlık izleyebiliyor, devriye başarı oranını ve personel bazlı performansı tek tıkla raporlayabiliyor.",
  },
  {
    slug: "finca",
    name: "Finca",
    category: "Mobil Uygulama",
    mockup: "phone",
    accent: "linear-gradient(160deg, #ffb04d, #ff6a1a)",
    summary: "Kişisel bütçe ve harcama takibini basitleştiren mobil finans uygulaması.",
    tags: ["React Native", "Swift", "Grafik & Raporlama"],
    stats: [
      { label: "İndirme", value: "50K+" },
      { label: "Mağaza puanı", value: "4.8/5" },
      { label: "Geliştirme süresi", value: "9 hafta" },
    ],
    overview:
      "Finca, kullanıcıların günlük harcamalarını kolayca kaydedip bütçe hedefleri belirleyebildiği bir kişisel finans uygulaması.",
    challenge:
      "Kullanıcıların çoğu mevcut finans uygulamalarını karmaşık buluyor ve birkaç kullanımdan sonra bırakıyordu.",
    solution:
      "Tek ekranda hızlı harcama girişi, otomatik kategori önerileri ve sade grafiklerle odak, karmaşadan sadeliğe kaydırıldı.",
    result:
      "Lansmandan sonraki ilk 3 ayda 50.000'in üzerinde indirme ve %68 haftalık aktif kullanım oranına ulaşıldı.",
  },
  {
    slug: "rotaly",
    name: "Rotaly",
    category: "Web Uygulaması",
    mockup: "browser",
    accent: "linear-gradient(160deg, #ffcf86, #ff8a3a)",
    summary: "Ekip seyahatlerini planlayan, bütçeyi ve rotayı tek panelde toplayan web uygulaması.",
    tags: ["Next.js", "PostgreSQL", "Harita Entegrasyonu"],
    stats: [
      { label: "Aktif ekip", value: "220+" },
      { label: "Planlama süresi", value: "%55 azaldı" },
      { label: "Geliştirme süresi", value: "12 hafta" },
    ],
    overview:
      "Rotaly, şirketlerin ekip seyahatlerini; uçuş, konaklama ve bütçe onayını tek bir panelden yönetmesini sağlıyor.",
    challenge:
      "Seyahat planlaması e-posta ve tablolar arasında dağılmış durumdaydı; onay süreçleri günler sürüyordu.",
    solution:
      "Rota, bütçe ve onay akışını tek bir çalışma alanında birleştiren, gerçek zamanlı işbirliğine açık bir panel kurduk.",
    result: "Ortalama planlama süresi %55 azaldı, onay süreçleri günlerden saatlere indi.",
  },
  {
    slug: "marketo",
    name: "Marketo",
    category: "Web Sitesi",
    mockup: "browser",
    accent: "linear-gradient(160deg, #ff8a3a, #c73f0a)",
    summary: "Butik bir moda markası için yüksek dönüşümlü e-ticaret sitesi.",
    tags: ["Next.js", "Headless Commerce", "SEO"],
    stats: [
      { label: "Dönüşüm oranı", value: "%120 artış" },
      { label: "Sayfa yükleme", value: "%40 daha hızlı" },
      { label: "Geliştirme süresi", value: "7 hafta" },
    ],
    overview: "Marketo, hazır e-ticaret altyapılarının sınırlarını aşmak isteyen bir moda markasının yeni web sitesi.",
    challenge: "Eski site yavaştı, mobilde zor kullanılıyordu ve marka kimliğini yansıtmıyordu.",
    solution:
      "Headless mimari ile hem performansı hem tasarım özgürlüğünü artırdık; ürün sayfalarını dönüşüm odaklı yeniden kurguladık.",
    result: "İlk çeyrekte dönüşüm oranı %120 arttı, ortalama sayfa yükleme süresi %40 kısaldı.",
  },
  {
    slug: "studio-blanc",
    name: "Studio Blanc",
    category: "Web Sitesi",
    mockup: "browser",
    accent: "linear-gradient(160deg, #ffd9a8, #ff6a1a)",
    summary: "Bir iç mimarlık stüdyosu için portfolyo ağırlıklı tanıtım sitesi.",
    tags: ["React", "Vite", "Mikro Animasyon"],
    stats: [
      { label: "Teklif talebi", value: "%80 artış" },
      { label: "Ortalama ziyaret süresi", value: "3.4 dk" },
      { label: "Geliştirme süresi", value: "5 hafta" },
    ],
    overview: "Studio Blanc, projelerini büyük görsellerle anlatan bir iç mimarlık stüdyosunun tanıtım sitesi.",
    challenge: "Stüdyonun eski sitesi projeleri küçük galerilerde gösteriyor, marka hissini yansıtmıyordu.",
    solution: "Tam ekran proje anlatımları, ince geçiş animasyonları ve sade bir tipografi ile sitenin tamamını yeniden kurguladık.",
    result: "Yayına girdikten sonraki 2 ayda teklif taleplerinde %80 artış gözlendi.",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}
