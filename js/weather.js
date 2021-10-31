const API_KEY = "1763d914872c43929922e02afb0e8d09";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      const icon = document.querySelector("#weather-container img");
      const weather = document.querySelector("#weather");
      const city = document.querySelector("#city");
      icon.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
      weather.innerText = data.weather[0].main;
      city.innerText = data.name;
    });
}

function onGeoError() {
  alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
