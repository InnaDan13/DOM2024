"use strict";

const users = [
  { id: 1, name: "Test" },
  { id: 2, name: "John" },
];
//js ->json
const usersInJson = JSON.stringify(users);
console.log(usersInJson);
//-> [{"id":1,"name":"Test"},{"id":2,"name":"John"}]

//json - js

const usersFromJson = JSON.parse(usersInJson);
console.log(usersFromJson);

const WEATHER_URL =
  "https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current=temperature_2m,precipitation,wind_speed_10m&timezone=auto";
//задає звідки прийдуть дані

fetch(WEATHER_URL)
  .then((response) => response.json()) // in then comes response
  .then((data) => updateWeather(data))
  .catch((error) => console.log(error));

function updateWeather(weatherData) {
  const {
    current: { temperature_2m, wind_speed_10m },
    current_units: {
      temperature_2m: temperature_2m_units,
      wind_speed_10m: wind_speed_10m_units
    },
  } = weatherData;
  console.log(weatherData);
  console.log(
    `${weatherData.current.temperature_2m} ${weatherData.current_units.temperature_2m}`
  );

  const weatherArticle = document.querySelector(".weather");
  weatherArticle.innerHTML = `
  <p style="color:${calcTemperature(temperature_2m)}">
  ${temperature_2m} ${temperature_2m_units}
  </p>
  <p>
  ${wind_speed_10m} ${wind_speed_10m_units}
  </p>`;
}
function calcTemperature(t) {
  if (t > 25) {
    return "red";
  } else if (t < 25) {
    return "green";
  }
}
