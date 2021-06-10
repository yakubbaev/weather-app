import React from 'react'
import './App.css'
import { DayCard, WeatherTypes } from './components/day-card/day-card'

function App() {
  return (
    <div>
      <DayCard name="Thu" low={67} high={78} weatherType={WeatherTypes.Snowy} />
    </div>
  )
}

export default App
