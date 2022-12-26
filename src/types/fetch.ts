export interface CityNamesDataProps {
  list: {
    id: number;
    name: string;
    coord: {
      lat: number;
      lon: number;
    };
    sys: {
      country: string;
    };
  }[];
}

export interface CityDataProps {
  current: {
    id: number;
    dt: number;

    humidity: number;
    pressure: number;
    feels_like: number;
    temp: number;
    wind_speed: number;
    weather: [
      {
        icon: string;
        main: string;
      }
    ];
  };
  daily: {
    dt: number;
    temp: {
      day: number;
    };
  }[];

  name: string;
  country: string;

  forecast: {
    dt: number;
    temp: number;
  }[];
}
