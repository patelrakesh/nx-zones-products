'use server';

import Image from 'next/image';
import styles from './StaticHeader.module.css';

const StaticHeader = async () => {
  // let content: any = await fetch('https://poc-app-sigma.vercel.app/header.html');
  // content =  await content.text();

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <a className={styles.navbarBrand} href="/">
          Logo
        </a>
        <button
          className={styles.navbarToggler}
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className={styles.navbarTogglerIcon}>
            <Image
              src="/ngd/assets/images/hamburger-menu-icon.svg"
              width={32}
              height={32}
              alt="menu Icon"
            />
          </span>
        </button>
        <div className={styles.collapse} id="navbarSupportedContent">
          <ul className={styles.navbarNav}>
            <li className={styles.navItem}>
              <a className={styles.navLink} aria-current="page" href="/ngd">
                Products App (Multizone app 1)
              </a>
            </li>
            <li className={styles.navItem}>
              <a
                className={styles.navLink}
                aria-current="page"
                href="/ngd/examples"
              >
                Examples App (Multizone app 2)
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default StaticHeader;
