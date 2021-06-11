import React from 'react'
import { useQuery } from 'react-query'
import './forecast.css'
import { DailyWeatherType, DayCard } from '../day-card/day-card'
// import { forecast } from './forecast.mock'
import { Link } from 'react-router-dom'
import { getForecast } from '../../usecases/get-forecast'

export const Forecast = () => {
  const { isLoading, data } = useQuery('forecast', getForecast)
  console.log('data: ', data)

  if (isLoading) return <>Loading...</>

  const dailyForecast = data?.daily
  if (!dailyForecast) return <>No data</>

  return (
    <div className="Forecast-Container">
      {dailyForecast.map((day: DailyWeatherType) => (
        <Link key={day.name} to={`/${day.name}`} style={{ textDecoration: 'none' }}>
          <DayCard name={day.name} weatherType={day.weatherType} high={day.high} low={day.low} />
        </Link>
      ))}
    </div>
  )
}
