import React, { useState, useEffect, Fragment } from 'react';

import HotelType from './models/hotel';
import Header from './components/UI/Header/Header';
import HotelList from './components/HotelList/HotelList';
import RoomType from './models/room';

function App() {
  const [headerImage, setHeaderImage] = useState<string>('');
  const [hotelsReceived, setHotelsReceived] = useState<HotelType[]>([]);
  const hotelsUrl =
    'https://obmng.dbm.guestline.net/api/hotels?collection-id=OBMNG';
  const roomsUrl = 'https://obmng.dbm.guestline.net/api/roomRates/OBMNG/';

  const formatNewRoom = (dataArray: any) => {
    let roomItem: RoomType;
    roomItem = {
      name: dataArray.name,
      maxAdults: dataArray.occupancy.maxAdults,
      maxChildren: dataArray.occupancy.maxChildren,
      longDescription: dataArray.longDescription,
    };
    return roomItem;
  };

  function getRooms(hotelId: string) {
    let roomsFormated: Array<RoomType> = [];

    fetch(roomsUrl + hotelId)
      .then((response) => response.json())
      .then((data) =>
        data.rooms.forEach(function (room: Array<any>): void {
          roomsFormated.push(formatNewRoom(room));
        })
      );
    return roomsFormated;
  }

  const formatNewHotel = (dataArray: any) => {
    let hotelItem: HotelType;
    hotelItem = {
      id: dataArray.id,
      images: dataArray.images,
      name: dataArray.name,
      address1: dataArray.address1,
      address2: dataArray.address2,
      starRating: +dataArray.starRating,
      rooms: getRooms(dataArray.id),
    };
    return hotelItem;
  };

  async function getHotels() {
    const resp = await fetch(hotelsUrl);
    const data = await resp.json();
    let hotelsArray: Array<HotelType> = [];
    data.forEach(function (hotel: Array<any>): void {
      hotelsArray.push(formatNewHotel(hotel));
    });
    setHeaderImage(data[0].images[0].url);

    return hotelsArray;
  }

  useEffect(() => {
    getHotels().then((response) => setHotelsReceived(response));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Fragment>
      <Header image={headerImage} />
      <HotelList arrayOfHotels={hotelsReceived} />
    </Fragment>
  );
}

export default App;
