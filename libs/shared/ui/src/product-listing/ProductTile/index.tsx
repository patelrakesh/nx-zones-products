import Link from 'next/link';
import Image from 'next/image';
import styles from './ProductTile.module.css';

const ProductTile = ({ item, dynamic }: any) => {
  return (
    <div className={styles.card}>
      <Link
        href={
          dynamic
            ? `/rendering-pattern/product-details-dynamic/${item?.id}`
            : `/rendering-pattern/product-details/${item?.id}`
        }
      >
        <div className={styles.cardImage}>
          <Image
            src={item?.thumbnail}
            className={styles.cardImgTop}
            alt={item?.title}
            fill
          />
        </div>
        <div className={styles.cardBody}>
          <h5 className={styles.cardTitle}>{item?.title}</h5>
          <p>Brand: {item?.brand}</p>
          <p>Rating: &#9733;{item?.rating}</p>
          <p>Price: &#36;{item?.price}</p>
        </div>
      </Link>
    </div>
  );
};

export default ProductTile;
