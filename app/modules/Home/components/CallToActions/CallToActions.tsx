import Button from '@/modules/Common/components/Button/Button';

import { ButtonVariants } from '@/modules/Common/consts';

import styles from './CallToActions.module.scss';

const CallToActions = () => {
  return (
    <section className={styles['CallToActions']}>
      <h2 className={styles['CallToActions-title']}>Vous souhaitez sauter le pas ?</h2>
      <div className={styles['CallToActions-buttons']}>
        {/* <Button href='/prestations' label='Voir mes prestations' variant={ButtonVariants.primary} /> */}
        <Button href='/contact' label='Me contacter' variant={ButtonVariants.primary} />
      </div>
    </section>
  );
};

export default CallToActions;
