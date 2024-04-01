import { FC } from 'react';
import MenuLink from '../MenuLink';
import styles from './Sidebar.module.css';
import { SidebarProps } from '../type';

const Sidebar: FC<SidebarProps> = ({ isOpen, links }) => {
  const className = `${styles.sidebar} ${isOpen ? styles.open : ''}`;
  return (
    <aside className={className}>
      <div className={styles.scrollbar}>
        <div className={styles.menuListWrapper}>
          {links?.length ? (
            <ul className={styles.menuList}>
              {links.map((link, i) => (
                <MenuLink key={i} {...link} />
              ))}
            </ul>
          ) : (
            <p>No Menu items</p>
          )}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
