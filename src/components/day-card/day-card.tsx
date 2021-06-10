import React from 'react'
import './day-card.css'
import sunny from './sunny.svg'
import cloudy from './cloudy.svg'
import rainy from './rainy.svg'
import snowy from './snowy.svg'

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

const imagesMap = {
  [WeatherTypes.Cloudy]: cloudy,
  [WeatherTypes.Sunny]: sunny,
  [WeatherTypes.Snowy]: snowy,
  [WeatherTypes.Rainy]: rainy,
}

export const DayCard = (prop: DailyWeatherType) => {
  const { name, weatherType, high, low } = prop
  return (
    <div className="Container">
      <div className="Name">{name}</div>
      <img src={imagesMap[weatherType]} />
      <div className="Degree">
        <div className="DegreeHigh">{high}°</div>
        <div>{low}°</div>
      </div>
    </div>
  )
}
