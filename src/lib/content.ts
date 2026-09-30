export const site = {
  name: "Erdoğan Doğan",
  role: "Full-Stack Developer & AI Automation",
  locale: "tr",
  url: "https://erdogan-dogan-portfolio.vercel.app",
  description:
    ".NET, Next.js ve React Native ile üretime çıkmış projeler geliştiren, API güvenliği ve yapay zekâ destekli otomasyon sistemlerine odaklanan yazılım geliştirici.",
};

export const nav = [
  { label: "Hakkımda", href: "#hakkimda" },
  { label: "Projeler", href: "#projeler" },
  { label: "Beceriler", href: "#beceriler" },
  { label: "Eğitim", href: "#egitim" },
  { label: "İletişim", href: "#iletisim" },
];

export const hero = {
  name: "Erdoğan Doğan",
  headline: "Full-Stack Developer & AI Automation",
  summary:
    ".NET, Next.js ve React Native ile üretime çıkmış projeler geliştirdim; şu an odağım yapay zekâ destekli otomasyon sistemleri.",
  primaryCta: { label: "Projeleri Gör", href: "#projeler" },
  secondaryCta: { label: "CV İndir", href: "/cv.pdf" },
};

export const about = {
  heading: "Hakkımda",
  paragraph:
    "Kayseri Üniversitesi'nde Bilgisayar Mühendisliği okuyorum ve uçtan uca yazılım geliştirme deneyimine sahibim. Backend'de .NET / ASP.NET Core, web tarafında Next.js/React, mobilde React Native ve Flutter ile çalışıyorum. Bitirme projemde API güvenliği ve yerel yapay zekâ modelleri (Ollama, Qwen2.5) üzerine yoğunlaştım; freelance olarak da gerçek müşteriler için canlı web siteleri geliştirdim. Şu anda ilgi alanımı AI destekli otomasyon sistemlerine doğru genişletiyorum.",
  focus: {
    label: "Yöneldiğim Alan",
    title: "AI Destekli Müşteri Otomasyonları",
    paragraph:
      "Freelance web projelerimde şu anda backend/frontend geliştirmenin ötesine geçip, müşteri etkileşimini otomatikleştiren AI destekli botlar ve bildirim sistemleri tasarlamayı hedefliyorum. Örneğin: stok/sipariş durumu sorgularına otomatik yanıt veren sohbet botları, rezervasyon/randevu taleplerini yöneten konuşma akışları ve özel gün bazlı hatırlatma otomasyonları.",
  },
};

export type Project = {
  slug: string;
  title: string;
  featured?: boolean;
  badge?: string;
  status?: string;
  bullets: string[];
  tech: string[];
  liveUrl?: string;
  repoUrl?: string;
};

export const projects: Project[] = [
  {
    slug: "api-insight-studio",
    title: "API Insight Studio",
    featured: true,
    badge: "Bitirme Projesi · Vitrin Proje",
    bullets: [
      "OpenAPI/Swagger tabanlı API'leri analiz eden, test eden ve otomatik belgeleyen çok platformlu (masaüstü + web) sistem.",
      "BOLA (Broken Object Level Authorization) dahil API güvenlik açıklarını otomatik tespit eden algoritmalar.",
      "Ollama ve Qwen2.5 yerel LLM entegrasyonu ile otomatik test senaryosu ve dinamik dokümantasyon üretimi.",
    ],
    tech: [".NET 8", "ASP.NET Core", "Next.js", "Electron", "PostgreSQL/MSSQL", "Ollama"],
  },
  {
    slug: "park-magaza",
    title: "Park Mağaza · E-Ticaret Sitesi",
    status: "Canlı · Aile işletmesi",
    bullets: [
      "Instagram → parkmagaza.com.tr → Shopier üç adımlı satış hunisi; ara domain katmanı Meta Pixel tetikleme ve Google indeksleme için stratejik olarak korundu.",
      "Next.js 14, Tailwind CSS ve Framer Motion ile uçtan uca geliştirilip Vercel'e deploy edilen ürün kataloğu ve vitrin sitesi.",
      "Shopier ödeme/checkout entegrasyonu, ürün varyasyon yönetimi (Beden/Renk) ve API tabanlı stok senkronizasyonu.",
      "AppSheet + Google Sheets ile barkod okuma destekli envanter takip sistemi.",
    ],
    tech: ["Next.js 14", "Tailwind CSS", "Framer Motion", "Vercel", "Shopier API", "AppSheet/Google Sheets"],
  },
  {
    slug: "pralin-chocolatier-coffee",
    title: "Pralin Chocolatier & Coffee",
    status: "Canlı · Aktif geliştirme aşamasında",
    bullets: [
      "Butik çikolatacı ve kafe için canlı, editoryal-lüks estetikte müşteri projesi.",
      "Menü sistemi harici bir API ile senkronize; scroll-locked video hero gibi özel animasyon detayları.",
    ],
    tech: ["Next.js", "TypeScript", "Tailwind", "Framer Motion"],
  },
  {
    slug: "cagrihan-akademi",
    title: "Çağrıhan Akademi",
    status: "Canlı",
    bullets: [
      "YKS sınavına hazırlık için üyelik bazlı sessiz çalışma alanı marka sitesi.",
      "GSAP/Lenis ile parallax hero ve özel tipografi sistemi (Lora + Inter).",
      "Marka konumlandırması net: \"kütüphane değil, üyelik alanı\" - müşteri ihtiyacına göre içerik ve dil kararı.",
    ],
    tech: ["Next.js", "TypeScript", "Tailwind", "GSAP", "Lenis"],
  },
  {
    slug: "wearable-health-monitoring",
    title: "Giyilebilir Sağlık İzleme Sistemi",
    bullets: [
      "ESP32 tabanlı IoT mimarisi: kalp atış hızı, SpO2 ve adım sayısı takibi.",
      "Kalman Filtresi ile sensör gürültüsü azaltma, MQTT ile düşük gecikmeli veri aktarımı.",
      "InfluxDB 2.x zaman serisi veritabanı ve React Native mobil uygulama.",
    ],
    tech: ["ESP32", "MQTT", "InfluxDB 2.x", "Kalman Filtresi", "React Native"],
  },
  {
    slug: "ai-youtube-playlist",
    title: "AI Destekli YouTube Playlist Oluşturucu",
    bullets: [
      "Ruh hali veya temaya göre OpenAI API ile şarkı listesi üretimi, YouTube Data API v3 ile eşleştirme.",
      "Google OAuth 2.0 ile giriş ve playliste doğrudan aktarım.",
    ],
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "OpenAI API", "YouTube Data API v3"],
  },
  {
    slug: "short-stick-game",
    title: "Short Stick Game",
    bullets: [
      "Çok oyunculu mobil uygulama: oyun oluşturma, davet ve katılma akışları.",
      "JWT tabanlı kimlik doğrulama ile güvenli oturum yönetimi.",
    ],
    tech: ["React Native", "ASP.NET Core Web API", "C#", "SQL Server", "JWT"],
  },
  {
    slug: "cicekci-web-sitesi",
    title: "Çiçekçiler için Web Sitesi",
    bullets: [
      "Küçük ölçekli çiçekçi işletmeleri için ürün vitrini, kategori bazlı katalog ve sipariş/iletişim akışı içeren demo site.",
      "Farklı marka kimliklerine hızlıca uyarlanabilen esnek tasarım sistemi; aynı kod tabanı üzerinden farklı bir markaya rebrand edilebildi.",
      "Potansiyel müşterilere sunum amacıyla uçtan uca tasarlanıp deploy edildi.",
    ],
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
  },
];

export const otherProjects = [
  { title: "Endless Runner", detail: "Flutter & Flame ile geliştirilmiş mobil oyun." },
  {
    title: "Satış Geliri Tahminleme Modeli",
    detail: "Python ile regresyon ve SARIMA tabanlı zaman serisi tahminleme.",
  },
  { title: "Coati Optimization Algorithm İncelemesi", detail: "Optimizasyon algoritması üzerine teknik inceleme." },
  {
    title: "IoT'de Büyük Veri Analitiği",
    detail: "Journal of Big Data (2025) kapsamında teknik analiz ve sunum.",
  },
];

export const skillGroups = [
  {
    heading: "Diller & Framework",
    items: ["C# (.NET 8 / ASP.NET Core)", "TypeScript/JavaScript (Next.js, React, React Native)", "Python", "Dart (Flutter/Flame)"],
  },
  {
    heading: "Veri Yönetimi",
    items: ["PostgreSQL", "MSSQL", "SQL Server", "InfluxDB 2.x"],
  },
  {
    heading: "AI & Entegrasyon",
    items: ["OpenAI API", "Ollama & Qwen2.5 (yerel LLM)", "Google/Spotify OAuth 2.0"],
  },
  {
    heading: "IoT & Protokoller",
    items: ["ESP32", "MQTT", "Kalman Filtreleme"],
  },
  {
    heading: "Diğer",
    items: ["RESTful API tasarımı", "JWT Authentication", "Git/GitHub", "Swagger/OpenAPI"],
  },
];

export const education = {
  school: "Kayseri Üniversitesi",
  program: "Bilgisayar Mühendisliği (Lisans)",
  period: "2022 - Devam Ediyor",
};

export const contact = {
  email: "erdoganned@gmail.com",
  phone: "0531 424 12 97",
  phoneHref: "+905314241297",
  github: "github.com/erdogandogan",
  githubUrl: "https://github.com/erdogandogan",
  cvUrl: "/cv.pdf",
};
