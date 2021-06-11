import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from 'react-query'
import { Forecast } from '../components/forecast/forecast'
import { HourlyForecast } from '../components/hourly-forecast/hourly-forecast'

const queryClient = new QueryClient()

export const Routes = () => {
  return (
    <Switch>
      <Route path={`/:dayOfWeek`}>
        <QueryClientProvider client={queryClient}>
          <HourlyForecast />
        </QueryClientProvider>
      </Route>
      <Route path="/">
        <QueryClientProvider client={queryClient}>
          <Forecast />
        </QueryClientProvider>
      </Route>
    </Switch>
  )
}
