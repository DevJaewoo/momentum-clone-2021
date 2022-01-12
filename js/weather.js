const apiForm = document.querySelector("#api-form");
const apiInput = apiForm.querySelector("input");
const weather = document.querySelector("#weather");

const KEY_API = "api";

let apiKey;

function onGeolocationSuccess(position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  console.log(latitude, longitude);

  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${apiKey}`;
  console.log(url);
  fetch(url).then((response) =>
    response.json().then((data) => {
      const weather = document.querySelector("#weather span:first-child");
      const city = document.querySelector("#weather span:last-child");
      city.innerText = data.name;
      weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    })
  );
}

function onGeolocationError(event) {
  console.log(`Can't find geolocation.`);
  console.dir(event);
}

function refreshWeather() {
  navigator.geolocation.getCurrentPosition(
    onGeolocationSuccess,
    onGeolocationError
  );

  apiForm.classList.add(CLASSNAME_HIDDEN);
  weather.classList.remove(CLASSNAME_HIDDEN);
}

apiKey = localStorage.getItem(KEY_API);
if (apiKey !== null) {
  refreshWeather();
}

function onApiKeySubmit(event) {
  event.preventDefault();
  apiKey = apiInput.value;
  localStorage.setItem(KEY_API, apiKey);
  refreshWeather();
}

apiForm.addEventListener("submit", onApiKeySubmit);
