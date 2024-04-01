import { FC } from 'react';
import { DocHeadingProps } from '../type';

import styles from './DocHeading.module.css';

const DocHeading: FC<DocHeadingProps> = ({ children, subHeading, id }) => {
  return subHeading ? (
    <h2 className={styles.subHeading}>
      {children}
      {id ? (
        <a href={`#${id}`} className={styles.headingAnchor} id={id}>
          #
        </a>
      ) : null}
    </h2>
  ) : (
    <h1 className={styles.heading}>{children}</h1>
  );
};

export default DocHeading;
