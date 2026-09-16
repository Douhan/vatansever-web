export interface PricingTier {
  id: string;
  name: string;
  price: string;
  priceNote: string;
  description: string;
  features: string[];
  highlighted?: boolean;
  ctaLabel: string;
}

export const pricingTiers: PricingTier[] = [
  {
    id: "starter",
    name: "Başlangıç",
    price: "45.000 ₺",
    priceNote: "başlangıç fiyatı",
    description: "Tek bir platformda (web veya mobil) hızlıca hayata geçmek isteyen projeler için.",
    features: ["Web sitesi veya mobil uygulama", "5 sayfa / ekrana kadar", "Temel SEO kurulumu", "2 hafta destek"],
    ctaLabel: "Teklif Al",
  },
  {
    id: "growth",
    name: "Büyüme",
    price: "110.000 ₺",
    priceNote: "başlangıç fiyatı",
    description: "Web ve mobili birlikte, uçtan uca tasarım ve geliştirme süreciyle isteyen markalar için.",
    features: [
      "Web sitesi + mobil uygulama",
      "Özel UI/UX tasarım sistemi",
      "Panel / admin entegrasyonu",
      "1 ay yayın sonrası destek",
    ],
    highlighted: true,
    ctaLabel: "Teklif Al",
  },
  {
    id: "enterprise",
    name: "Kurumsal",
    price: "Özel Teklif",
    priceNote: "ihtiyaca göre",
    description: "Karmaşık entegrasyonlar, çoklu ekip ve uzun vadeli ürün ortaklığı gerektiren projeler için.",
    features: ["Uçtan uca ürün geliştirme", "Özel entegrasyonlar & API", "Ayrılmış proje ekibi", "Sürekli bakım & büyüme"],
    ctaLabel: "Bize Ulaşın",
  },
];
