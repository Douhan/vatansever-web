import sentinelopsAdminDashboard from "../assets/case-studies/sentinelops/dashboard.jpg";
import sentinelopsAdminDashboardThumb from "../assets/case-studies/sentinelops/dashboard-thumb.jpg";
import sentinelopsAdminPersonnel from "../assets/case-studies/sentinelops/personnel.jpg";
import sentinelopsAdminCheckpoints from "../assets/case-studies/sentinelops/checkpoints.jpg";
import sentinelopsAdminPatrols from "../assets/case-studies/sentinelops/patrols.jpg";
import sentinelopsAdminLiveTracking from "../assets/case-studies/sentinelops/live-tracking.jpg";
import sentinelopsAdminReports from "../assets/case-studies/sentinelops/reports.jpg";
import sentinelopsGuardHome from "../assets/case-studies/sentinelopsguard/home.png";
import sentinelopsGuardSchedule from "../assets/case-studies/sentinelopsguard/schedule.png";
import sentinelopsGuardHistory from "../assets/case-studies/sentinelopsguard/history.png";
import sentinelopsGuardProfile from "../assets/case-studies/sentinelopsguard/profile.png";
import okulTakipSplash from "../assets/case-studies/okul-takip/splash.png";
import okulTakipHome from "../assets/case-studies/okul-takip/home.png";
import okulTakipTracking from "../assets/case-studies/okul-takip/tracking.png";
import okulTakipNotification from "../assets/case-studies/okul-takip/notification.png";
import okulTakipTeacherDashboard from "../assets/case-studies/okul-takip/teacher-dashboard.png";
import okulTakipAdminPanel from "../assets/case-studies/okul-takip/admin-panel.png";
import okulTakipAdminStudents from "../assets/case-studies/okul-takip/admin-students.png";
import okulTakipHistory from "../assets/case-studies/okul-takip/history.png";
import jenishHero from "../assets/case-studies/jenish-design/hero.jpg";
import jenishHeroThumb from "../assets/case-studies/jenish-design/hero-thumb.jpg";
import jenishServices from "../assets/case-studies/jenish-design/services.jpg";
import jenishWork from "../assets/case-studies/jenish-design/work.jpg";
import jenishClients from "../assets/case-studies/jenish-design/clients.jpg";
import jenishClosing from "../assets/case-studies/jenish-design/closing.jpg";

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
  /**
   * A tighter crop of `screenshot`, used wherever the image renders small
   * (portfolio card, hero carousel). Dense screens read as noise at ~250px;
   * this shows one clean focal area instead of the whole page shrunk down.
   * Falls back to `screenshot` when the full screen is already simple enough.
   */
  screenshotThumb?: string;
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
    screenshots: [sentinelopsGuardHome, sentinelopsGuardSchedule, sentinelopsGuardHistory, sentinelopsGuardProfile],
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
    screenshotThumb: sentinelopsAdminDashboardThumb,
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
    slug: "okul-takip",
    name: "Okul Takip",
    category: "Mobil Uygulama",
    mockup: "phone",
    accent: "linear-gradient(160deg, #4a6d94, #1E3A5F)",
    screenshot: okulTakipHome,
    screenshots: [
      okulTakipSplash,
      okulTakipHome,
      okulTakipTracking,
      okulTakipNotification,
      okulTakipTeacherDashboard,
      okulTakipAdminPanel,
      okulTakipAdminStudents,
      okulTakipHistory,
    ],
    summary:
      "Velilerin okula varış sürelerini canlı paylaştığı, öğretmenlerin anlık bildirim aldığı ve okul yönetiminin veli/öğretmen/sınıf kayıtlarını tek panelden yönettiği bir okul-veli iletişim uygulaması.",
    tags: ["React Native", "Expo", "Supabase", "Canlı Konum", "Push Bildirim", "Çoklu Rol"],
    stats: [
      { label: "Kullanıcı rolü", value: "Veli / Öğretmen / Yönetim" },
      { label: "Bildirim", value: "Anlık Push" },
      { label: "Konum paylaşımı", value: "Sadece Yol Boyunca" },
    ],
    overview:
      "Okul Takip, velilerin çocuklarını okuldan almaya geldiklerinde konumlarını okula gerçek zamanlı bildirdiği, öğretmenlerin bu bildirimi anlık gördüğü ve okul yönetiminin tüm veli/öğretmen/sınıf kayıtlarını tek panelden yönettiği bir mobil uygulamadır.",
    challenge:
      "Veli alım saatlerinde okul önünde kimin ne zaman geleceği belli olmuyor, öğretmenler her veliyi telefonla ya da göz kararıyla takip etmek zorunda kalıyor, okul yönetimi de veli/öğrenci/sınıf kayıtlarını dağınık tablolarla yönetiyordu.",
    solution:
      "Veli yola çıktığında konumunu yalnızca okula varana kadar paylaşan bir takip ekranı, okula 100 metre kala öğretmene otomatik push bildirim gönderen bir uyarı sistemi ve yönetim tarafında veli/öğretmen/sınıf kayıtlarını tek yerden yönetilebilen bir panel kurduk.",
    result:
      "Öğretmenler veli geldiğinde önceden haberdar oluyor, alım süreci saniyeler içinde tamamlanıyor; okul yönetimi de tüm kullanıcı ve sınıf kayıtlarını tek panelden yönetiyor.",
  },
  {
    slug: "jenish-design",
    name: "Jenish Design",
    category: "Web Sitesi",
    mockup: "browser",
    accent: "linear-gradient(160deg, #3a5fb0, #101a3d)",
    screenshot: jenishHero,
    screenshotThumb: jenishHeroThumb,
    screenshots: [jenishHero, jenishServices, jenishWork, jenishClients, jenishClosing],
    summary:
      "Bişkek merkezli bir marka ve pazarlama stüdyosunun; logo, ambalaj, tabela, kurumsal giyim ve dijital işlerini tek çatı altında sunduğu, 50'den fazla markanın kimliğini kurduğu kurumsal tanıtım sitesi.",
    tags: ["Next.js", "Prisma", "next-intl", "Çoklu Dil"],
    stats: [
      { label: "Marka sayısı", value: "50+" },
      { label: "Dil desteği", value: "5 Dil" },
      { label: "Paket kalemi", value: "24 Teslim" },
    ],
    overview:
      "Jenish Design, Bişkek merkezli bir marka ve pazarlama stüdyosunun; logo, ambalaj, tabela, kurumsal giyim ve dijital projelerini beş dilde anlattığı kurumsal web sitesidir.",
    challenge:
      "Stüdyonun 50'den fazla marka için ürettiği çok kanallı iş (tabela, ambalaj, araç giydirme, dijital) tek bir yerde, hizmet alanına göre filtrelenebilir ve ziyaretçinin saniyeler içinde 'bana uygun paket hangisi' sorusuna cevap bulabileceği şekilde sunulmalıydı.",
    solution:
      "Hizmet alanına göre filtrelenebilen bir iş vitrini, üç net paket seçeneği ve gerçek marka logolarının yer aldığı bir güven şeridiyle, ziyaretçinin hızla 'bu stüdyo benim işimi yapabilir mi' sorusuna cevap bulmasını sağladık.",
    result:
      "Site beş dilde yayında; potansiyel müşteriler hizmet alanına göre filtreleyip ilgili örnek işleri görebiliyor, paket karşılaştırmasını tek sayfada yapabiliyor.",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}
