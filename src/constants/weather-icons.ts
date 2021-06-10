import { WeatherTypes } from '../types/weather-types'
import sunny from '../icons/sunny.svg'
import cloudy from '../icons/cloudy.svg'
import rainy from '../icons/rainy.svg'
import snowy from '../icons/snowy.svg'

export const weatherIcons = {
  [WeatherTypes.Cloudy]: cloudy,
  [WeatherTypes.Sunny]: sunny,
  [WeatherTypes.Snowy]: snowy,
  [WeatherTypes.Rainy]: rainy,
}
