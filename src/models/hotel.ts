import RoomType from './room';

type HotelType = {
  id: string;
  images: any[];
  name: string;
  address1: string;
  address2: string;
  starRating: number;
  rooms: any | RoomType[];
};

export default HotelType;
