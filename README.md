# React-Redux-Weather
This is a weather data aggregation app created with React and Redux. It was built using the HTML, CSS, and JavaScript coding languages, as well as the axios, react-redux, react-dom, redux-promise node packages. I also used the OpenWeatherMap API to gather the weather data for the city entered by the user and the Google Maps JavaScript API to display a map of the city. The Sparklines node package was used to create a chart display for the different types of weather information the user gets back including temperate, atmospheric pressure, and humidity.

---

- When the user first opens the app they will see a pretty empty screen before they enter a city to search for weather. There is a simple heading with the name of the app and a form input below for the user to enter a search query.
![FIRST SCREEN](/read_me/1-first.png)

- Once the user searches for a city the app will return some weather data. The data will appear on the app from left to right in the following order. There is a Google Maps widget that shows a map of the city the user entered, next there is a chart showing the temperature for the next five days with a median temperater bar in the middle or the chart and the median temperature displayed underneath the chart, the same format is true for the other two charts displaying atmospheric pressure and humidity percentage.
![CITY SEARCH](/read_me/2-city.png)
