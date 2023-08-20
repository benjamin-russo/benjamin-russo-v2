import Button from '@/modules/Common/components/Button/Button';

import { ButtonVariants } from '@/modules/Common/consts';

import styles from './Hero.module.scss';

const Hero = () => {
  return (
    <section className={styles['Hero']}>
      <div className={styles['Hero-top']}>
        <div className={styles['Hero-titleContainer']}>
          <div className={styles['Hero-line']}></div>
          <h1 className={styles['Hero-title']}>BENJAMIN RUSSO</h1>
        </div>
        <p className={styles['Hero-subtitle']}>Designer & Développeur Web</p>
      </div>
      <p className={styles['Hero-excerpt']}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pharetra vel odio id convallis. In hac habitasse platea
        dictumst.
      </p>
      <div className={styles['Hero-bottom']}>
        <Button href='/realisations' label='Voir mes réalisations' />
        <Button href='/contact' label='Me contacter' variant={ButtonVariants.secondary} />
      </div>
    </section>
  );
};

export default Hero;
