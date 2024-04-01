import Link from 'next/link';
import styles from './Recommended.module.css';

const RecommendedProducts = ({ recommendedItem }: any) => {
  return (
    <div className={styles.recommendedContainer}>
      {recommendedItem?.slice(0, 4)?.map((item: any) => (
        <div key={item?.id} className={styles.itemList}>
          <p>Model: {item.title}</p>
          <p>Brand: {item.brand}</p>
        </div>
      ))}
      <Link href="/tanstack-usage/csr-api-data-cache/recommended-products">
        <p className={styles.viewMoreText}>View More</p>
      </Link>
    </div>
  );
};

export default RecommendedProducts;
