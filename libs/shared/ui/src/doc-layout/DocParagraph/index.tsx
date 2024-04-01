import { FC } from 'react';
import styles from './DocParagraph.module.css';
import { DocParagraphProps } from '../type';

const DocParagraph: FC<DocParagraphProps> = ({ children }) => {
  return <p className={styles.paragraph}>{children}</p>;
};

export default DocParagraph;
