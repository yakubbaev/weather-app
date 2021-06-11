import React, { useEffect, useState } from 'react'
import './forecast.css'
import { DailyWeatherType, DayCard } from '../day-card/day-card'
// import { forecast } from './forecast.mock'
import { Link } from 'react-router-dom'
import { getForecast } from '../../usecases/get-forecast'

export const Forecast = () => {
  const [forecast, setForecast] = useState<DailyWeatherType[]>([])
  useEffect(() => {
    getForecast().then((result) => setForecast(result))
  }, [])

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
