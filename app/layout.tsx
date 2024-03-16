import type { Metadata } from 'next';
import { Inter, Nunito } from 'next/font/google';
import NavBar from './components/navbar/NavBar'; // Add this line
import './globals.css';

export const metadata: Metadata = {
  title: 'Airbnb Clone',
  description: 'trying out a airbnb clone with next.js',
};

const font = Nunito({
  subsets: ['latin'],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={font.className}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
