import { CityProps, Status } from "types";

export interface LocalCityProps {
  city: {
    id: number;
    name: string;
    country: string;
  };
  list: {
    dt: number;
    main: {
      feels_like: number;
      temp: number;
      humidity: number;
      pressure: number;
    };
    weather: [
      {
        icon: string;
        main: string;
      }
    ];
    wind: {
      speed: number;
    };
  }[];
}

export interface LocalCitySliceProps extends CityProps {
  status: Status;
  current_location: string;
  error: string | null;
}
