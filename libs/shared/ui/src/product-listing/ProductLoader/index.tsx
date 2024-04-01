import styles from './ProductLoader.module.css';

const ProductLoader = () => {
  return (
    <div className={styles.card}>
      <div className={styles.cardImage}>
        <div id="image" className={styles.skeletonLoader}></div>
      </div>
      <div className={styles.cardBodyLoading}>
        <h5 className={styles.skeletonLoader}>{''}</h5>
        <p className={styles.skeletonLoader}></p>
        <p className={styles.skeletonLoader}></p>
      </div>
    </div>
  );
};

export default ProductLoader;
