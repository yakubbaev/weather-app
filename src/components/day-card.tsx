import React from 'react'

export enum WeatherTypes {
  Sunny,
  Rainy,
  Cloudy,
  Snowy,
}

type DailyWeatherType = {
  high: number
  low: number
  name: string
  weatherType: WeatherTypes
}

export const DayCard = (prop: DailyWeatherType) => {
  return (
    <div>
      <div>{prop.name}</div>
    </div>
  )
}
