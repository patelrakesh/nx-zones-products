'use client';

import { FC, useState } from 'react';
import DocHeader from '../DocHeader';
import DocFooter from '../DocFooter';
import Sidebar from '../Sidebar';
import { DocLayoutProps } from '../type';

import styles from './DocLayout.module.css';

const DocLayout: FC<DocLayoutProps> = ({ links, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <DocHeader isOpen={isOpen} setIsOpen={setIsOpen} />
      <section className={styles.mainSection}>
        <Sidebar isOpen={isOpen} links={links} />
        <article className={styles.mainWrapper}>
          <main className={styles.main}>{children}</main>
        </article>
      </section>
      <DocFooter />
    </>
  );
};

export default DocLayout;
