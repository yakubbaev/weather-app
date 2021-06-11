import React from 'react'
import './hourly-forecast.css'
import { HourCard } from '../hour-card/hour-card'
import { hourlyForecast } from './hourly-forecast.mock'
import { useRouteMatch } from 'react-router'

export const HourlyForecast = () => {
  const match = useRouteMatch()
  console.log('match.params: ', match.params)

  return (
    <div className="HourlyForecast-Container">
      {hourlyForecast.map((forecast) => (
        <HourCard
          key={forecast.name}
          name={forecast.name}
          weatherType={forecast.weatherType}
          degree={forecast.degree}
        />
      ))}
    </div>
  )
}
