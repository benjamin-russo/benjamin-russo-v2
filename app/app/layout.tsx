import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';

import Header from '@/modules/Layout/components/Header/Header';

import '@/styles/globals.scss';
import styles from './layout.module.scss';
import Footer from '@/modules/Layout/components/Footer/Footer';

const poppins = Poppins({ style: ['normal', 'italic'], subsets: ['latin'], weight: ['200', '400', '500', '600', '700'] });

export const metadata: Metadata = {
  title: 'Benjamin RUSSO | Homepage',
  description: 'Benjamin RUSSO',
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang='fr'>
      <body className={poppins.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
