import { DailyWeatherType } from '../components/day-card/day-card'
import { HourlyWeatherType } from '../components/hour-card/hour-card'
import { WeatherTypes } from '../types/weather-types'
import moment from 'moment'

const ApiKey = 'f993eac991106e61aeb6e556bf9d2830'

const DayOfWeekFormat = 'ddd'

export function getForecast(): Promise<{ daily: DailyWeatherType[]; hourly: HourlyWeatherType[] }> {
  const url = `https://api.openweathermap.org/data/2.5/forecast?q=Tashkent,uz&units=metric&appid=${ApiKey}`
  return fetch(url)
    .then((res) => res.json())
    .then((json) => {
      const daily: DailyWeatherType[] = []
      const hourly: HourlyWeatherType[] = []
      let currentDay = ''
      json.list.forEach((forecast: any) => {
        const date = moment.unix(forecast.dt)
        const dayOfWeek = date.format(DayOfWeekFormat)
        const weatherType = parseWeatherType(forecast.weather)
        if (currentDay !== dayOfWeek) {
          currentDay = dayOfWeek
          daily.push({
            name: dayOfWeek,
            high: forecast.main.temp_max,
            low: forecast.main.temp_min,
            weatherType,
          })
        }
        hourly.push({
          dayOfWeek: dayOfWeek,
          hour: date.format('HH'),
          weatherType,
          degree: forecast.main.temp,
        })
      })
      return {
        daily,
        hourly,
      }
    })
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
