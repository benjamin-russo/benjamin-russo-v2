import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';

import './globals.scss';

const poppins = Poppins({ style: ['normal', 'italic'], subsets: ['latin'], weight: ['200', '400', '500', '600', '700'] });

export const metadata: Metadata = {
  title: 'Benjamin RUSSO | Homepage',
  description: 'Benjamin RUSSO',
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang='fr'>
      <body className={poppins.className}>{children}</body>
    </html>
  );
};

export default RootLayout;
