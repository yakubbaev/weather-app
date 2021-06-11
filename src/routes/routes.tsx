import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { Forecast } from '../components/forecast/forecast'
import { HourlyForecast } from '../components/hourly-forecast/hourly-forecast'

export const Routes = () => {
  return (
    <Switch>
      <Route path={`/:nameOfDay`}>
        <HourlyForecast />
      </Route>
      <Route path="/">
        <Forecast />
      </Route>
    </Switch>
  )
}
