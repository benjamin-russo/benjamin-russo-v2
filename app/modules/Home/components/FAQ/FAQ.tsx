import Accordion from '@/modules/Common/components/Accordion/Accordion';

import styles from './FAQ.module.scss';

const FAQ = () => {
  return (
    <section className={styles['FAQ']}>
      <h2 className={styles['FAQ-title']}>Questions fréquemment posées</h2>
      <div className={styles['FAQ-container']}>
        <Accordion
          items={[
            {
              id: 1,
              title: 'Lorem Ipsum',
              content: 'Lorem Ipsum',
            },
            {
              id: 2,
              title: 'Lorem Ipsum',
              content: 'Lorem Ipsum',
            },
            {
              id: 3,
              title: 'Lorem Ipsum',
              content: 'Lorem Ipsum',
            },
          ]}
        />
      </div>
    </section>
  );
};

export default FAQ;
