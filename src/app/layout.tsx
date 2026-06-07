import type { Metadata } from 'next';
import { JetBrains_Mono } from 'next/font/google';
import ThemeRegistry from '@/components/ThemeRegistry';
import IDELayout from '@/components/IDELayout';
import './globals.css';

const jetbrainsMono = JetBrains_Mono({
  variable: '--font-mono',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Isabella Kpai — Data Engineer & Systems Architect',
  description:
    'Portfolio of Isabella Kpai, Data Engineer building pipelines and systems that save companies real money.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={jetbrainsMono.variable}>
      <body>
        <ThemeRegistry>
          <IDELayout>{children}</IDELayout>
        </ThemeRegistry>
      </body>
    </html>
  );
}
