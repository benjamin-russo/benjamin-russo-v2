import { Metadata } from 'next';

import CallToActions from '@/modules/Home/components/CallToActions/CallToActions';
import FAQ from '@/modules/Home/components/FAQ/FAQ';
import Hero from '@/modules/Layout/components/Hero/Hero';
import Skills from '@/modules/Home/components/Skills/Skills';
import TextWithPicture from '@/modules/Home/components/TextWithPicture/TextWithPicture';

export const metadata: Metadata = {
  title: 'Benjamin RUSSO | Développeur Web Loiret - Orléans',
  description:
    "Je m'appelle Benjamin et je suis Développeur web. Je suis là pour vous apporter mon expertise en matière de création de site web.",
};

const Home = () => {
  return (
    <>
      <Hero />
      <TextWithPicture />
      <Skills />
      <FAQ />
      <CallToActions />
    </>
  );
};

export default Home;
