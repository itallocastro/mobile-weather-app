export interface WeatherModel {
  temp: number;
  date: string;
  description: string;
  city: string;
  humidity: string;
  rain: number;
  wind_speedy: number;
  condition_slug: string;
  forecast: SummaryDay[];
}

export interface SummaryDay {
  date: string;
  weekday: string;
  max: number;
  min: number;
  rain: number;
  rain_probability: number;
  description: string;
  condition: string;
}
