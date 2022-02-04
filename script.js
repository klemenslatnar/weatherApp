"use strict";

import WEATHER_API_KEY from "./apikey.js";

const body = document.querySelector("body");
const container = document.querySelector(".container");
const weatherMain = document.querySelector(".weatherMain");
const windSpeed = document.querySelector(".windSpeed");
const temperature = document.querySelector(".temperature");
const cityName = document.querySelector(".city");
const weatherImage = document.querySelector(".weatherImage");

const fetchWeather = async function () {
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=Ljubljana&units=metric&appid=${WEATHER_API_KEY}`
  );
  const getData = await res.json();
  const iconCode = getData.weather[0].icon;
  const iconUrl = `http://openweathermap.org/img/wn/${iconCode}.png`;
  const weatherType = getData.weather[0].main;

  temperature.textContent = `Temperature: ${getData.main.temp}℃`;
  windSpeed.textContent = `Wind speed: ${getData.wind.speed} km/h`;
  cityName.textContent = getData.name;
  weatherImage.src = iconUrl;

  if (weatherType === "Rain") {
    body.classList.add("rainy");
  }

  if (weatherType === "Clouds") {
    body.classList.add("cloudy");
  }

  if (weatherType === "Clear") {
    body.classList.add("sunny");
  }

  if (weatherType === "Snow") {
    body.classList.add("snowy");
  }

  if (weatherType === "Thunderstorm") {
    body.classList.add("thunderstorm");
  }
};

fetchWeather();
