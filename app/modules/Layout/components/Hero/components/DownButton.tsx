'use client';

import ArrowDown from '@/modules/Common/icons/ArrowDown';

import styles from './DownButton.module.scss';

const DownButton = () => {
  const handleGoTo = () => {
    const element = document.getElementById('about-me');
    const header = document.getElementById('header');
    const headerHeight = header?.getBoundingClientRect().height || 0;
    const y = element && element?.getBoundingClientRect()?.top + window.scrollY - headerHeight;
    y && window.scrollTo({ top: y, behavior: 'smooth' });
  };
  return (
    <div className={styles['DownButton']}>
      <button className={styles['DownButton-button']} onClick={handleGoTo}>
        <ArrowDown />
      </button>
    </div>
  );
};

export default DownButton;
