import { Metadata } from 'next';

import Hero from '@/modules/Layout/components/Hero/Hero';

export const metadata: Metadata = {
  title: 'Benjamin RUSSO | Homepage',
  description: 'Benjamin RUSSO',
};

const Home = () => {
  return (
    <>
      <Hero />
    </>
  );
};

export default Home;
