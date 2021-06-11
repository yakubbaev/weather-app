export const getForecastMockResponse = {
  cod: '200',
  message: 0,
  cnt: 40,
  list: [
    {
      dt: 1623391200,
      main: {
        temp: 30.97,
        feels_like: 29.31,
        temp_min: 30.97,
        temp_max: 32.46,
        pressure: 1008,
        sea_level: 1008,
        grnd_level: 959,
        humidity: 25,
        temp_kf: -1.49,
      },
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'clear sky',
          icon: '01d',
        },
      ],
      clouds: {
        all: 0,
      },
      wind: {
        speed: 3.54,
        deg: 314,
        gust: 3.89,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'd',
      },
      dt_txt: '2021-06-11 06:00:00',
    },
    {
      dt: 1623402000,
      main: {
        temp: 31.96,
        feels_like: 29.94,
        temp_min: 31.96,
        temp_max: 33.94,
        pressure: 1007,
        sea_level: 1007,
        grnd_level: 958,
        humidity: 20,
        temp_kf: -1.98,
      },
      weather: [
        {
          id: 802,
          main: 'Clouds',
          description: 'scattered clouds',
          icon: '03d',
        },
      ],
      clouds: {
        all: 33,
      },
      wind: {
        speed: 2.22,
        deg: 242,
        gust: 3.58,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'd',
      },
      dt_txt: '2021-06-11 09:00:00',
    },
    {
      dt: 1623456000,
      main: {
        temp: 23.3,
        feels_like: 22.31,
        temp_min: 23.3,
        temp_max: 23.3,
        pressure: 1005,
        sea_level: 1005,
        grnd_level: 957,
        humidity: 24,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'clear sky',
          icon: '01d',
        },
      ],
      clouds: {
        all: 0,
      },
      wind: {
        speed: 1.09,
        deg: 146,
        gust: 1.25,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'd',
      },
      dt_txt: '2021-06-12 00:00:00',
    },
  ],
  city: {
    id: 1512569,
    name: 'Tashkent',
    coord: {
      lat: 41.2646,
      lon: 69.2163,
    },
    country: 'UZ',
    population: 1978028,
    timezone: 18000,
    sunrise: 1623368989,
    sunset: 1623423355,
  },
}
