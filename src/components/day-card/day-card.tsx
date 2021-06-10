import React from 'react'
import { weatherIcons } from '../../constants/weather-icons'
import { WeatherTypes } from '../../types/weather-types'
import './day-card.css'

export type DailyWeatherType = {
  high: number
  low: number
  name: string
  weatherType: WeatherTypes
}

export const DayCard = (prop: DailyWeatherType) => {
  const { name, weatherType, high, low } = prop
  return (
    <div className="DayCard-Container">
      <div className="DayCard-Name">{name}</div>
      <img src={weatherIcons[weatherType]} />
      <div className="DayCard-Degree">
        <div className="DayCard-DegreeHigh">{high}°</div>
        <div>{low}°</div>
      </div>
    </div>
  )
}
