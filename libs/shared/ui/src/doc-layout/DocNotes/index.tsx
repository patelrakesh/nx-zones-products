import { FC } from 'react';
import { DocNotesProps } from '../type';
import styles from './DocNotes.module.css';

const DocNotes: FC<DocNotesProps> = ({ children }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.left}>💡</div>
      <div className={styles.content}>{children}</div>
    </div>
  );
};

export default DocNotes;
