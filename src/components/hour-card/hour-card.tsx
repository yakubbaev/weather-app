import React from 'react'
import { weatherIcons } from '../../constants/weather-icons'
import { WeatherTypes } from '../../types/weather-types'
import './hour-card.css'

export type HourlyWeatherType = {
  name: string
  weatherType: WeatherTypes
  degree: number
}

export const HourCard = (prop: HourlyWeatherType) => {
  const { name, weatherType, degree } = prop
  return (
    <div className="HourCard-Container">
      <div className="HourCard-Name">{name}</div>
      <img src={weatherIcons[weatherType]} />
      <div className="HourCard-Degree">{degree}°</div>
    </div>
  )
}
