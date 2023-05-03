export interface WeatherModel {
  temp: number;
  date: string;
  description: string;
  city: string;
  humidity: string;
  rain: number;
  wind_speedy: number;
  forecast: SummaryDay[];
}

export interface SummaryDay {
  date: string;
  weekday: string;
  max: number;
  min: number;
  rain: number;
  rain_probability: string;
  description: string;
  condition: string;
}
