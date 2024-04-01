'use server';

import AddToCart from '../AddToCart/index';
import Image from 'next/image';
import styles from './ProductInfo.module.css';

const ProductInfo = ({ product }: any) => {
  return (
    <div className="container">
      <div className={`${styles.content} pure-g`}>
        <div className="pure-u-1 pure-u-lg-1-2">
          <div className={styles.productImage}>
            <Image src={product?.thumbnail} alt={product?.title} fill />
          </div>
        </div>
        <div className="pure-u-1 pure-u-lg-1-2">
          <h3>{product?.title}</h3>
          <p>Brand: {product.brand}</p>
          <p>Rating: &#9733;{product.rating}</p>
          <h5>Price: &#36;{product.price}</h5>
          <p>{product.description}</p>
          <AddToCart />
        </div>
      </div>
    </div>
  );
};
export default ProductInfo;
