import React from 'react';
import logo from './logo.svg';
import './App.css';
import { DayCard, WeatherTypes } from './components/day-card';

function App() {
  return (
    <div className="App">
      <DayCard name="Wed" low={67} high={78} weatherType={WeatherTypes.Cloudy} />
    </div>
  );
}

export default App;
