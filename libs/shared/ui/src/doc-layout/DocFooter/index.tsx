import { FC } from 'react';
import styles from './DocFooter.module.css';

const DocFooter: FC = () => {
  return (
    <footer className={styles.footer}>
      <hr className={styles.horizontalLine} />
      <div className={styles.footerInner}>White label App Docs</div>
    </footer>
  );
};

export default DocFooter;
