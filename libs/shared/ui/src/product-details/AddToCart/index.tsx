'use client';

import { useState } from 'react';
import styles from './AddToCart.module.css';
// import Button from '../../Button';

const AddToCart = () => {
  const [count, setCount] = useState(0);

  const onDecClick = () => {
    if (count > 0) setCount(count - 1);
  };

  const onIncClick = () => {
    if (count < 10) setCount(count + 1);
  };

  return (
    <div className={styles.card}>
      <div className={styles.cardBody}>
        <p>
          <b>Add to Cart</b>
        </p>
        <div style={{ maxWidth: '200px' }} className={styles.inputGroup}>
          <button
            onClick={onDecClick}
            className={`${styles.btn} ${styles.btnOutlineSecondary}`}
            type="button"
            id="button-addon1"
          >
            -
          </button>
          <input
            readOnly
            disabled
            type="text"
            className={styles.formControl}
            placeholder=""
            aria-label="Example text with button addon"
            aria-describedby="button-addon1"
            value={count}
          />
          <button
            onClick={onIncClick}
            className={`${styles.btn} ${styles.btnOutlineSecondary}`}
            type="button"
            id="button-addon1"
          >
            +
          </button>
        </div>
        <button
          className={`${styles.btn} ${styles.btnSuccess}`}
          onClick={() =>
            alert(`${count} items were added to the cart successfully.`)
          }
        >
          Add to cart
        </button>
        {/* <Button
          onClick={() =>
            alert(`${count} items were added to the cart successfully.`)
          }
          style={styles.btnSuccess}
        >
          Add to cart
        </Button> */}
      </div>
    </div>
  );
};

export default AddToCart;
