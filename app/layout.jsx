import { Playfair_Display, Lato } from 'next/font/google';
import './globals.css';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  weight: ['400', '600'],
});

const lato = Lato({
  subsets: ['latin'],
  variable: '--font-lato',
  weight: ['300', '400', '700'],
});

export const metadata = {
  title: 'StudyDate — studying is better together',
  description:
    'Plan study sessions with friends, discover cafés halfway between you both, and let the coin decide.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${playfair.variable} ${lato.variable}`}>
      <body className="bg-cream text-espresso">
        {children}
      </body>
    </html>
  );
}