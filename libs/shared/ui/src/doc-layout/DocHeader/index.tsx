import { FC } from 'react';
import styles from './DocHeader.module.css';
import { DocHeaderProps } from '../type';

const DocHeader: FC<DocHeaderProps> = ({ isOpen, setIsOpen }) => {
  const onHamburgerButtonClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <a href="/" className={styles.logo}>
          <span>White label App</span>
        </a>
        <a href="/ngd" className={styles.link}>
          Products App (Zone 1)
        </a>
        <a href="/ngd/examples" className={styles.link}>
          Examples App (Zone 2)
        </a>
        <button
          className={styles.hamburgerButton}
          type="button"
          aria-label="Menu"
          onClick={onHamburgerButtonClick}
        >
          <svg
            fill="none"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <g>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16"
              ></path>
            </g>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 12h16"
            ></path>
            <g>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 18h16"
              ></path>
            </g>
          </svg>
        </button>
      </nav>
    </header>
  );
};

export default DocHeader;
