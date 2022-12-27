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
