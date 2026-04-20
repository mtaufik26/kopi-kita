import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';

const inter = Inter({ 
  subsets: ['latin'], 
  display: 'swap', 
  variable: '--font-inter' 
});

const playfair = Playfair_Display({ 
  subsets: ['latin'], 
  display: 'swap', 
  variable: '--font-playfair' 
});

export const metadata = {
  title: 'KopiNusantara - Nikmati Kopi Premium Nusantara',
  description: 'Menghadirkan kopi premium terbaik dari seluruh Nusantara dengan kualitas terjamin.',
  keywords: 'kopi, arabica, premium, indonesia, gayo, toraja, kintamani',
  authors: [{ name: 'KopiNusantara' }],
  viewport: 'width=device-width, initial-scale=1, maximum-scale=5',
  openGraph: {
    title: 'KopiNusantara - Kopi Premium Nusantara',
    description: 'Solusi kopi premium untuk pengalaman terbaik',
    type: 'website',
    locale: 'id_ID',
    siteName: 'KopiNusantara',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="id" className={`${inter.variable} ${playfair.variable} scroll-smooth`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      </head>
      <body className={`${inter.className} ${playfair.className} antialiased overflow-x-hidden`}>
        {children}
      </body>
    </html>
  );
}