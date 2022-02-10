import React from 'react';

import styles from './Room.module.css';
import RoomType from '../../models/room';

const Room: React.FC<{ roomItem: RoomType }> = (props) => {
  return (
    <li className={styles.room}>
      <section className={styles['room-info']}>
        <h3>{props.roomItem.name}</h3>
        <p>{'Adults: ' + props.roomItem.maxAdults}</p>
        <p>{'Children: ' + props.roomItem.maxChildren}</p>
      </section>

      <div className={styles['long-description-room']}>
        <p>{props.roomItem.longDescription}</p>
      </div>
    </li>
  );
};

export default Room;
