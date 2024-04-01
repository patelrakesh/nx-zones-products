'use client';

import { useRouter } from 'next/navigation';
import { FC, useCallback } from 'react';
import styles from './BackButton.module.css';

const BackButton: FC = () => {
  const router = useRouter();
  const onBackButtonClick = useCallback(() => {
    router.back();
  }, []);

  return (
    <button className={styles.button} onClick={onBackButtonClick}>
      {'< '} Back
    </button>
  );
};

export default BackButton;
