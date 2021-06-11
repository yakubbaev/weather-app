import React from 'react'
import './forecast.css'
import { DayCard } from '../day-card/day-card'
import { forecast } from './forecast.mock'
import { Link } from 'react-router-dom'

export const Forecast = () => {
  return (
    <div className="Forecast-Container">
      {forecast.map((day) => (
        <Link key={day.name} to={`/${day.name}`} style={{ textDecoration: 'none' }}>
          <DayCard name={day.name} weatherType={day.weatherType} high={day.high} low={day.low} />
        </Link>
      ))}
    </div>
  )
}
