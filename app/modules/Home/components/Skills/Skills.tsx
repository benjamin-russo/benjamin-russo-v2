import Code from '@/modules/Common/icons/Code';
import Design from '@/modules/Common/icons/Design';

import { IconColors } from '@/modules/Common/consts';

import styles from './Skills.module.scss';

const Skills = () => {
  return (
    <section className={styles['Skills']}>
      <article className={styles['Skills-container']}>
        <Design color={IconColors.secondary} height={60} width={60} />
        <h2 className={styles['Skills-title']}>Web Design</h2>
        <p className={styles['Skills-text']}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dictum ex faucibus lectus rutrum, in lacinia ligula
          volutpat. Donec posuere imperdiet neque eget ultricies. Nam id ex nec mi iaculis luctus.
        </p>
      </article>
      <article className={styles['Skills-container']}>
        <Code color={IconColors.secondary} height={60} width={60} />
        <h2 className={styles['Skills-title']}>Développement</h2>
        <p className={styles['Skills-text']}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dictum ex faucibus lectus rutrum, in lacinia ligula
          volutpat. Donec posuere imperdiet neque eget ultricies. Nam id ex nec mi iaculis luctus.
        </p>
      </article>
    </section>
  );
};

export default Skills;
