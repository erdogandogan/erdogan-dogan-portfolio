# Erdoğan Doğan · Portfolyo

Full-Stack Developer & AI Automation portfolyo sitesi.

**Canlı:** https://erdogan-dogan-portfolio.vercel.app

## Teknolojiler

- [Next.js 16](https://nextjs.org) (App Router, Server Components)
- TypeScript
- Tailwind CSS v4 (CSS değişkenleriyle tanımlı tema token'ları)
- [Motion](https://motion.dev) (scroll animasyonları, `prefers-reduced-motion` desteği)
- [Phosphor Icons](https://phosphoricons.com)
- Vercel (deploy)

## Özellikler

- Tek sayfa yapı: Hero, Hakkımda, Projeler, Beceriler, Eğitim, İletişim
- Terminal / kod motifli koyu tema, tek bir mor vurgu rengi
- Tüm metinler tek dosyada: [`src/lib/content.ts`](src/lib/content.ts)
- `next/og` ile dinamik OG görseli ve site ikonu, `sitemap.xml` ve `robots.txt`
- Mobil uyumlu, klavye ve ekran okuyucu dostu

## Proje yapısı

```
src/
├── app/            # layout, sayfa, metadata (OG görseli, ikon, sitemap, robots)
├── components/     # bölüm component'leri (Hero, About, Projects, Skills...)
│   └── ui/         # küçük tekrar kullanılabilir parçalar
└── lib/
    └── content.ts  # sitedeki tüm içerik
public/
└── cv.pdf
```

## Yerelde çalıştırma

```bash
npm install
npm run dev
```

Site http://localhost:3000 adresinde açılır.

```bash
npm run lint    # ESLint
npm run build   # production build
```

## İletişim

- E-posta: erdoganned@gmail.com
- GitHub: [github.com/erdogandogan](https://github.com/erdogandogan)
