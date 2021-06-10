import { DailyWeatherType, WeatherTypes } from '../day-card/day-card'

export const forecast: DailyWeatherType[] = [
  {
    name: 'Wed',
    weatherType: WeatherTypes.Cloudy,
    high: 78,
    low: 67,
  },
  {
    name: 'Thu',
    weatherType: WeatherTypes.Cloudy,
    high: 83,
    low: 66,
  },
  {
    name: 'Fri',
    weatherType: WeatherTypes.Rainy,
    high: 77,
    low: 65,
  },
  {
    name: 'Sat',
    weatherType: WeatherTypes.Sunny,
    high: 78,
    low: 64,
  },
  {
    name: 'Sun',
    weatherType: WeatherTypes.Snowy,
    high: 77,
    low: 62,
  },
]
