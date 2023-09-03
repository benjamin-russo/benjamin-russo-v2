'use client';

import ArrowUp from '@/modules/Common/icons/ArrowUp';

import { IconColors } from '@/modules/Common/consts';
import useScrollPosition from '@/hooks/useScrollPosition';

import styles from './UpButton.module.scss';

const UpButton = () => {
  const scrollPosition = useScrollPosition();

  const handleUpButton = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (scrollPosition < 300) return null;
  return (
    <button className={styles['UpButton']} onClick={handleUpButton}>
      <ArrowUp color={IconColors.white} height={40} width={40} />
    </button>
  );
};

export default UpButton;
