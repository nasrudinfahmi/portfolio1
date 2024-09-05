import { Inter } from 'next/font/google';
import './globals.css';
import Providers from './context/Providers';

const inter = Inter({
  subsets: ['latin'],
});

export const metadata = {
  title: 'Muhammad Nasrudin Fahmi - Portofolio',
  description:
    'Portofolio pribadi Muhammad Nasrudin Fahmi. Temukan informasi tentang keterampilan, proyek, dan pengalaman saya di sini.',
  keywords:
    'Muhammad Nasrudin Fahmi, portofolio, web developer, frontend developer, Next.js, React, JavaScript',
  openGraph: {
    title: 'Muhammad Nasrudin Fahmi - Portofolio Pribadi',
    description:
      'Portofolio pribadi Muhammad Nasrudin Fahmi. Temukan informasi tentang keterampilan, proyek, dan pengalaman saya di sini.',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
