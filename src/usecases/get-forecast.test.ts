import { getForecast } from './get-forecast'
import { getForecastMockResponse } from './get-forecast.mock'

beforeEach(() => {
  fetchMock.resetMocks()
})

test('groups forecasts by days', () => {
  fetchMock.mockResponseOnce(JSON.stringify(getForecastMockResponse))
  return getForecast().then((data) => {
    expect(data.daily.length).toEqual(2)
    expect(data.hourly.length).toEqual(3)
  })
})
