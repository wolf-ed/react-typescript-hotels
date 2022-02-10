import React, { useState, useEffect } from 'react';
import { AiFillStar } from 'react-icons/ai';

import styles from './StarsRating.module.css';

const StarsRating: React.FC<{ rating: number }> = (props) => {
  const [star4, setStar4] = useState<string>('gray');
  const [star5, setStar5] = useState<string>('gray');
  const golden = '#EABE3F';

  useEffect(() => {
    if (props.rating === 4) {
      setStar4(golden);
    } else if (props.rating === 5) {
      setStar4(golden);
      setStar5(golden);
    }
  }, [props.rating]);

  return (
    <ul className={styles['stars-list']}>
      <li>
        <AiFillStar color={golden} className={styles.star} />
      </li>
      <li>
        <AiFillStar color={golden} className={styles.star} />
      </li>
      <li>
        <AiFillStar color={golden} className={styles.star} />
      </li>
      <li>
        <AiFillStar color={star4} className={styles.star} />
      </li>
      <li>
        <AiFillStar color={star5} className={styles.star} />
      </li>
    </ul>
  );
};

export default StarsRating;
