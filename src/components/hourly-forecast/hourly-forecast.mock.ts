import { WeatherTypes } from '../../types/weather-types'
import { HourlyWeatherType } from '../hour-card/hour-card'

export const hourlyForecast: HourlyWeatherType[] = [
  {
    dayOfWeek: 'Wed',
    hour: 'Now',
    weatherType: WeatherTypes.Cloudy,
    degree: 56,
  },
  {
    dayOfWeek: 'Wed',
    hour: '21',
    weatherType: WeatherTypes.Sunny,
    degree: 62,
  },
  {
    dayOfWeek: 'Wed',
    hour: '22',
    weatherType: WeatherTypes.Snowy,
    degree: 67,
  },
]
