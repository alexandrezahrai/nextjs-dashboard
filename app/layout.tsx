import '@/app/ui/global.css';
import { inter, hanken } from '@/app/ui/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${hanken.variable} font-hanken antialiased`}>{children}</body>
    </html>
  );
}
