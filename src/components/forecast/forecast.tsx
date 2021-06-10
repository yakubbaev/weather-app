import React from 'react'
import './forecast.css'
import { DayCard } from '../day-card/day-card'
import { forecast } from './forecast.mock'

export const Forecast = () => {
  return (
    <div className="ForecastContainer">
      {forecast.map((day) => (
        <DayCard key={day.name} name={day.name} weatherType={day.weatherType} high={day.high} low={day.low} />
      ))}
    </div>
  )
}
