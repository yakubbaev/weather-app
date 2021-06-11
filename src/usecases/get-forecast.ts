import { DailyWeatherType } from '../components/day-card/day-card'
import { HourlyWeatherType } from '../components/hour-card/hour-card'
import { WeatherTypes } from '../types/weather-types'
import moment from 'moment'

const lat = 60.99
const lon = 30.9
const ApiKey = 'f993eac991106e61aeb6e556bf9d2830'

export function getForecast(): Promise<{ daily: DailyWeatherType[]; hourly: HourlyWeatherType[] }> {
  const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely&units=metric&appid=${ApiKey}`
  return fetch(url)
    .then((res) => res.json())
    .then((json) => {
      const daily = json.daily.map((day: any) => ({
        name: parseDayOfWeek(day.dt),
        high: day.temp.max,
        low: day.temp.min,
        weatherType: parseWeatherType(day.weather),
      }))
      const hourly = json.hourly.map((hour: any) => ({
        name: parseDayOfWeek(hour.dt),
        weatherType: parseWeatherType(hour.weather),
        degree: hour.temp,
      }))
      return {
        daily,
        hourly,
      }
    })
}

function parseDayOfWeek(dt: number) {
  return moment.unix(dt).format('ddd')
}

function parseWeatherType(weathers: any[]): WeatherTypes {
  let result
  const id = weathers[0].id
  if (id >= 500 && id < 600) {
    result = WeatherTypes.Rainy
  } else if (id >= 600 && id < 700) {
    result = WeatherTypes.Snowy
  } else if (id >= 800 && id < 900) {
    result = WeatherTypes.Cloudy
  } else {
    result = WeatherTypes.Sunny
  }
  return result
}
