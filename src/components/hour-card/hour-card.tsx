import React from 'react'
import { weatherIcons } from '../../constants/weather-icons'
import { WeatherTypes } from '../../types/weather-types'
import './hour-card.css'

export type HourlyWeatherType = {
  dayOfWeek: string
  hour: string
  weatherType: WeatherTypes
  degree: number
}

export const HourCard = (prop: HourlyWeatherType) => {
  const { hour, weatherType, degree } = prop
  return (
    <div className="HourCard-Container">
      <div className="HourCard-Hour">{hour}</div>
      <img src={weatherIcons[weatherType]} />
      <div className="HourCard-Degree">{degree}°</div>
    </div>
  )
}
