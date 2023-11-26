interface Location {
  city: string;
  country: string;
}

interface Rating {
  value: number;
  type: string;
}

interface TotalPrice {
  amount: string;
  currency: string;
}

interface Stay {
  checkIn: string;
  checkout: string;
  adults: number;
  children: number;
  infants: number;
}

export interface HotelState {
  id: string;
  heroImage: string;
  name: string;
  location: Location;
  rating: Rating;
  inclusions: string[];
  price: {
    total: TotalPrice;
    stay: Stay;
  };
  sleep: number;
}

export type MappingType = {
  [key: string]: string;
};
