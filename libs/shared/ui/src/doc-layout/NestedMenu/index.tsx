'use client';

import { FC } from 'react';
import MenuLink from '../MenuLink';
import styles from './NestedMenu.module.css';
import { NestedMenuProps } from '../type';

const NestedMenu: FC<NestedMenuProps> = ({ links }) => {
  return (
    <div className={styles.nestedMenuWrapper}>
      <div className={styles.nestedMenu}>
        <ul>
          {links.map((child, i) => (
            <MenuLink key={i} {...child} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default NestedMenu;
