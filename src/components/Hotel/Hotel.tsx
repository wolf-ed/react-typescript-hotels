import React from 'react';

import styles from './Hotel.module.css';
import HotelType from '../../models/hotel';
import Room from '../Room/Room';
import RoomType from '../../models/room';
import StarsRating from '../UI/StarsRating/StarsRating';
import Images from '../UI/Images/Images';

const Hotel: React.FC<{
  hotelItem: HotelType;
  adults: number;
  children: number;
}> = (props) => {
  let newHotels = props.hotelItem.rooms;
  let mappedRooms;

  if (newHotels) {
    let filteredRooms = props.hotelItem.rooms.filter(
      (room: RoomType) =>
        room.maxAdults >= props.adults && room.maxChildren >= props.children
    );
    mappedRooms = filteredRooms.map((item: RoomType) => (
      <Room key={item.name} roomItem={item} />
    ));
  }

  return (
    <li className={styles.hotel}>
      <section className={styles['hotel-data']}>
        <div className={styles.info}>
          <Images imagesArray={props.hotelItem.images} />
          <div className={styles['sub-info']}>
            <h2>{props.hotelItem.name}</h2>
            <p>{props.hotelItem.address1}</p>
            <p>{props.hotelItem.address2}</p>
          </div>
        </div>

        <h2 className={styles.stars}>
          {<StarsRating rating={props.hotelItem.starRating} />}
        </h2>
      </section>

      <ul>{mappedRooms}</ul>
    </li>
  );
};

export default Hotel;
