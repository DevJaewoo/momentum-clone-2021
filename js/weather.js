function onGeolocationSuccess(position) {
  const API_KEY = "a384f1df4831a41f760fba9f195ab7a4";
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  console.log(latitude, longitude);

  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${API_KEY}`;
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

navigator.geolocation.getCurrentPosition(
  onGeolocationSuccess,
  onGeolocationError
);
