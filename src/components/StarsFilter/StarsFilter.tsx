import React, { useState } from 'react';
import { AiFillStar } from 'react-icons/ai';

import styles from './StarsFilter.module.css';
// onRemoveTodo: (id: string) => void
const StarsFilter: React.FC<{
  starsRating: number;
  onSetStars: (starsNum: number) => void;
}> = (props) => {
  const [star2, setStar2] = useState<string>('#EABE3F');
  const [star3, setStar3] = useState<string>('#EABE3F');
  const [star4, setStar4] = useState<string>('gray');
  const [star5, setStar5] = useState<string>('gray');
  const [star2Active, setStar2Active] = useState<boolean>(true);
  const [star3Active, setStar3Active] = useState<boolean>(true);
  const [star4Active, setStar4Active] = useState<boolean>(false);
  const [star5Active, setStar5Active] = useState<boolean>(false);

  const golden = '#EABE3F';
  const gray = 'gray';

  const onClick1Handler = () => {
    props.onSetStars(1);
    setStar2(gray);
    setStar3(gray);
    setStar4(gray);
    setStar5(gray);
    setStar2Active(false);
    setStar3Active(false);
    setStar4Active(false);
    setStar5Active(false);
  };

  const star2Handler = () => {
    setStar2(golden);
  };

  const leaveStar2Handler = () => {
    if (star2Active || star3Active || star4Active || star5Active) {
      return;
    }
    setStar2(gray);
  };

  const onClick2Handler = () => {
    props.onSetStars(2);
    setStar3(gray);
    setStar4(gray);
    setStar5(gray);
    setStar2Active(true);
    setStar3Active(false);
    setStar4Active(false);
    setStar5Active(false);
  };

  const star3Handler = () => {
    setStar2(golden);
    setStar3(golden);
  };

  const leaveStar3Handler = () => {
    if (star3Active || star4Active || star5Active) {
      return;
    }
    if (!star5Active && !star4Active && !star3Active && star2Active) {
      setStar3(gray);
      setStar4(gray);
      setStar5(gray);
      return;
    }
    setStar2(gray);
    setStar3(gray);
    setStar4(gray);
  };

  const onClick3Handler = () => {
    props.onSetStars(3);
    setStar3(golden);
    setStar4(gray);
    setStar5(gray);
    setStar2Active(true);
    setStar3Active(true);
    setStar4Active(false);
    setStar5Active(false);
  };

  const star4Handler = () => {
    setStar2(golden);
    setStar3(golden);
    setStar4(golden);
  };

  const leaveStar4Handler = () => {
    if (star4Active || star5Active) {
      return;
    }
    if (!star5Active && !star4Active && star3Active && star2Active) {
      setStar4(gray);
      setStar5(gray);
      return;
    } else if (!star5Active && !star4Active && !star3Active && star2Active) {
      setStar3(gray);
      setStar4(gray);
      setStar5(gray);
      return;
    }
    setStar2(gray);
    setStar3(gray);
    setStar4(gray);
  };

  const onClick4Handler = () => {
    props.onSetStars(4);
    setStar2(golden);
    setStar3(golden);
    setStar4(golden);
    setStar5(gray);
    setStar2Active(true);
    setStar3Active(true);
    setStar4Active(true);
    setStar5Active(false);
  };

  const star5Handler = () => {
    setStar2(golden);
    setStar3(golden);
    setStar4(golden);
    setStar5(golden);
  };

  const leaveStar5Handler = () => {
    if (star5Active) {
      return;
    } else if (!star5Active && star4Active && star3Active && star2Active) {
      setStar5(gray);
      return;
    } else if (!star5Active && !star4Active && star3Active && star2Active) {
      setStar4(gray);
      setStar5(gray);
      return;
    } else if (!star5Active && !star4Active && !star3Active && star2Active) {
      setStar3(gray);
      setStar4(gray);
      setStar5(gray);
      return;
    }
    setStar2(gray);
    setStar3(gray);
    setStar4(gray);
    setStar5(gray);
  };
  const onClick5Handler = () => {
    props.onSetStars(5);
    setStar2(golden);
    setStar3(golden);
    setStar4(golden);
    setStar5(golden);
    setStar5Active(true);
  };

  return (
    <ul className={styles['stars-list']}>
      <li onClick={onClick1Handler}>
        <AiFillStar color={golden} className={styles.star} />
      </li>
      <li
        onMouseEnter={star2Handler}
        onMouseLeave={leaveStar2Handler}
        onClick={onClick2Handler}
      >
        <AiFillStar color={star2} className={styles.star} />
      </li>
      <li
        onMouseEnter={star3Handler}
        onMouseLeave={leaveStar3Handler}
        onClick={onClick3Handler}
      >
        <AiFillStar color={star3} className={styles.star} />
      </li>
      <li
        onMouseEnter={star4Handler}
        onMouseLeave={leaveStar4Handler}
        onClick={onClick4Handler}
      >
        <AiFillStar color={star4} className={styles.star} />
      </li>
      <li
        onMouseEnter={star5Handler}
        onMouseLeave={leaveStar5Handler}
        onClick={onClick5Handler}
      >
        <AiFillStar color={star5} className={styles.star} />
      </li>
    </ul>
  );
};

export default StarsFilter;
