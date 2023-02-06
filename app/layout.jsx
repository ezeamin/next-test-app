import './globals.css';
import { Nunito } from '@next/font/google';

const nunito = Nunito({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: "--font-family-nunito",
});

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <head />
      <body className={`${nunito.className} mx-32 my-16`}>{children}</body>
    </html>
  );
}
