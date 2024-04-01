'use client';

import { FC } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import styles from './MenuLink.module.css';
import NestedMenu from '../NestedMenu';
import { MenuLinkProps } from '../type';

const MenuLink: FC<MenuLinkProps> = ({ href, childs, label }) => {
  const pathName = usePathname();

  const isActive = pathName === href;
  const haveChilds = !!childs?.length;
  const isOpen = pathName.startsWith(href);

  const className = `${styles.menuLink} ${isActive ? styles.active : ''} ${isOpen && haveChilds ? styles.open : ''}`;

  return (
    <li className={className}>
      <Link href={href}>
        {label}{' '}
        {haveChilds ? (
          <svg
            className={styles.arrow}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"
              className={styles.arrowPath}
            ></path>
          </svg>
        ) : null}
      </Link>
      {isOpen && haveChilds ? <NestedMenu links={childs} /> : null}
    </li>
  );
};

export default MenuLink;
