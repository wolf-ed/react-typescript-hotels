import React, { Fragment, useEffect, useState } from 'react';

import styles from './HotelList.module.css';
import HotelType from '../../models/hotel';
import Hotel from '../Hotel/Hotel';
import StarsFilter from '../StarsFilter/StarsFilter';
import RoomType from '../../models/room';

const HotelList: React.FC<{ arrayOfHotels: HotelType[] }> = (props) => {
  const [hotelsFiltered, setHotelsFiltered] = useState<HotelType[]>([]);
  const [stars, setStars] = useState<number>(0);
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState<number>(0);

  const starsChangeHandler = (starsNum: number) => {
    setStars(starsNum);
  };
  //   console.log(props.arrayOfHotels);
  let hotelsMapped;
  const plusAdultHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (adults === 6) {
      return;
    }
    setAdults((current) => current + 1);
  };
  const minusAdultHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (adults === 1) {
      return;
    }
    setAdults((current) => current - 1);
  };
  const plusChildtHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (children === 4) {
      return;
    }
    setChildren((current) => current + 1);
  };
  const minusChildtHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (children === 0) {
      return;
    }
    setChildren((current) => current - 1);
  };

  const filterRooms = (hotelItem: HotelType) => {
    let roomsFiltered = hotelItem.rooms.filter(
      (room: RoomType) =>
        room.maxAdults >= adults && room.maxChildren >= children
    );
    // hotelItem.rooms = roomsFiltered;
    return roomsFiltered;
  };

  function filterHotels() {
    let filteredByStars = props.arrayOfHotels.filter(
      (hotel: HotelType) => hotel.starRating >= stars
    );
    let filteredByRooms = filteredByStars.filter(
      (hotel: HotelType) => filterRooms(hotel).length > 0
    );
    setHotelsFiltered(filteredByRooms);
  }

  useEffect(() => {
    filterHotels();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [stars, adults, children]);

  if (hotelsFiltered.length === 0 && stars === 0) {
    hotelsMapped = props.arrayOfHotels.map((item) => (
      <Hotel
        key={item.id}
        hotelItem={item}
        adults={adults}
        children={children}
      />
    ));
  } else {
    hotelsMapped = hotelsFiltered.map((item) => (
      <Hotel
        key={item.id}
        hotelItem={item}
        adults={adults}
        children={children}
      />
    ));
  }

  return (
    <Fragment>
      <section className={styles['filter-form']}>
        <StarsFilter starsRating={stars} onSetStars={starsChangeHandler} />
        <div>
          Adults:
          <button className={styles['plus-button']} onClick={plusAdultHandler}>
            +
          </button>
          {adults}
          <button
            className={styles['minus-button']}
            onClick={minusAdultHandler}
          >
            -
          </button>
        </div>
        <div>
          Children:
          <button className={styles['plus-button']} onClick={plusChildtHandler}>
            +
          </button>
          {children}
          <button
            className={styles['minus-button']}
            onClick={minusChildtHandler}
          >
            -
          </button>
        </div>
      </section>
      <ul className={styles['hotels-list']}>
        {hotelsMapped.length > 0 && hotelsMapped}
        {hotelsMapped.length === 0 && <h1>No rooms found</h1>}
      </ul>
    </Fragment>
  );
};

export default HotelList;
