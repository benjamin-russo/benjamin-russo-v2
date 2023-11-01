import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';

import Footer from '@/modules/Layout/components/Footer/Footer';
import Header from '@/modules/Layout/components/Header/Header';
import UpButton from '@/modules/Layout/components/UpButton/UpButton';

import '@/styles/globals.scss';
import styles from './layout.module.scss';

const poppins = Poppins({ style: ['normal', 'italic'], subsets: ['latin'], weight: ['200', '400', '500', '600', '700'] });

export const metadata: Metadata = {
  title: 'Benjamin RUSSO | Développeur Web Loiret - Orléans',
  description:
    "Je m'appelle Benjamin et je suis Développeur web. Je suis là pour vous apporter mon expertise en matière de création de site web.",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang='fr'>
      <body className={poppins.className}>
        <Header />
        <main className={styles['Main']}>
          {children}
          <UpButton />
        </main>
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
