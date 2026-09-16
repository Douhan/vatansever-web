export interface Service {
  id: string;
  title: string;
  description: string;
  points: string[];
}

export const services: Service[] = [
  {
    id: "mobile",
    title: "Mobil Uygulama Geliştirme",
    description:
      "iOS ve Android için native performansa sahip, App Store ve Play Store yayına hazır uygulamalar tasarlıyor ve geliştiriyoruz.",
    points: ["React Native & Swift", "Push bildirim & offline destek", "App Store / Play Store yayınlama"],
  },
  {
    id: "web",
    title: "Web Sitesi & Web Uygulaması",
    description:
      "Kurumsal siteden karmaşık web uygulamalarına kadar hızlı, ölçeklenebilir ve arama motorlarında görünür ürünler kuruyoruz.",
    points: ["React & Next.js", "SEO odaklı mimari", "Panel / dashboard geliştirme"],
  },
  {
    id: "design",
    title: "UI/UX Tasarım",
    description:
      "Kullanıcı araştırmasından yüksek çözünürlüklü arayüz tasarımına kadar; markanızı yansıtan, kullanımı kolay deneyimler kurguluyoruz.",
    points: ["Kullanıcı akışları & wireframe", "Tasarım sistemi", "Etkileşimli prototip"],
  },
  {
    id: "growth",
    title: "Bakım & Büyüme",
    description:
      "Yayına aldığımız ürünleri; performans, güvenlik ve yeni özelliklerle büyütmeye devam ediyoruz.",
    points: ["Performans & güvenlik takibi", "Analytics & raporlama", "Sürekli özellik geliştirme"],
  },
];
