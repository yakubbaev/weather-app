import React from 'react'
import './hourly-forecast.css'
import { HourCard } from '../hour-card/hour-card'
import { hourlyForecast } from './hourly-forecast.mock'
import { useParams, useRouteMatch } from 'react-router'
import { useQuery } from 'react-query'
import { getForecast } from '../../usecases/get-forecast'

export const HourlyForecast = () => {
  const { dayOfWeek } = useParams<{ dayOfWeek: string }>()

  const { isLoading, data } = useQuery('forecast', getForecast)
  console.log('hourly data: ', data)

  if (isLoading) return <>Loading...</>

  const hourlyForecast = data?.hourly
  if (!hourlyForecast) return <>No data</>

  const forecastForTheDay = hourlyForecast.filter((forecast) => forecast.dayOfWeek === dayOfWeek)

  console.log('forecastForTheDay: ', forecastForTheDay)

  return (
    <div className="HourlyForecast-Container">
      {forecastForTheDay.map((forecast) => (
        <HourCard
          key={forecast.hour}
          hour={forecast.hour}
          weatherType={forecast.weatherType}
          degree={forecast.degree}
          dayOfWeek={forecast.dayOfWeek}
        />
      ))}
    </div>
  )
}
