import { WeatherTypes } from '../../types/weather-types'
import { HourlyWeatherType } from '../hour-card/hour-card'

export const hourlyForecast: HourlyWeatherType[] = [
  {
    name: 'Now',
    weatherType: WeatherTypes.Cloudy,
    degree: 56,
  },
  {
    name: '21',
    weatherType: WeatherTypes.Sunny,
    degree: 62,
  },
  {
    name: '22',
    weatherType: WeatherTypes.Snowy,
    degree: 67,
  },
]
