# ☕ KopiNusantara - Premium Indonesian Coffee

> **E-Commerce Website** — Menghadirkan kopi premium terbaik dari seluruh Nusantara, dari petani langsung ke rumah Anda.

![KopiNusantara Preview](https://images.pexels.com/photos/1695052/pexels-photo-1695052.jpeg?w=1200\&h=630\&fit=crop)

---

## 📋 Tentang Proyek

**KopiNusantara** adalah website e-commerce berbasis **Next.js** untuk menjual kopi asli Indonesia dengan tampilan premium dan performa optimal.

### ✨ Fitur Utama

* 🎨 Desain elegan (dark + gold theme)
* ⚡ Performa cepat & animasi smooth
* 📱 Fully responsive (mobile-first)
* 🔧 Struktur modular & mudah dikembangkan

---

## 🎯 Section Website

| Section      | Deskripsi            |
| ------------ | -------------------- |
| Hero         | Landing utama + CTA  |
| About        | Story brand & petani |
| BestSeller   | Produk unggulan      |
| Features     | Keunggulan produk    |
| Products     | Daftar kopi          |
| Testimonials | Review pelanggan     |
| HowItWorks   | Cara order           |
| CTA          | Call to action       |
| Footer       | Kontak & navigasi    |

---

## 🛠️ Tech Stack

* Next.js
* React
* Tailwind CSS
* Framer Motion
* JavaScript

---

## 📁 Struktur Proyek

```
nusantara-coffee/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── layout/
│   │   │   ├── sections/
│   │   │   └── ui/
│   │   ├── lib/
│   │   ├── styles/
│   │   ├── layout.jsx
│   │   └── page.jsx
│   └── types/
├── public/
├── package.json
└── README.md
```

---

## 🚀 Getting Started

```bash
git clone https://github.com/yourusername/nusantara-coffee.git
cd nusantara-coffee
npm install
npm run dev
```

Buka: http://localhost:3000

---

## ⚙️ Konfigurasi

### Path Alias

```json
"@/*": ["src/app/*"]
```

---

## 🎨 Customization

### Ubah Konten

```js
export const HERO_CONTENT = {
  headline: "Nikmati Kopi",
};
```

### Ubah Produk

```js
export const PRODUCTS = [
  {
    name: "Gayo Arabica",
    price: 85000,
  }
];
```

---

## 🌐 Deployment

```bash
npm install -g vercel
vercel
```

---

## 📄 License

MIT License

---

## 📞 Contact

* 📧 [info@kopinusantara.com](mailto:info@kopinusantara.com)
* 📍 Indonesia

---

Built with ☕ untuk pecinta kopi Indonesia
