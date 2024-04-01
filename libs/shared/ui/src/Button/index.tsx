import styles from './index.module.css';

const Button = ({
  children,
  style,
  onClick,
}: {
  children: string;
  onClick: () => Promise<void> | void;
  style?: string;
}) => {
  return (
    <button
      type="button"
      className={`${styles.btn} ${style}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
