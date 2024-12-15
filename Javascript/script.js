const apiKey = "16f2a00231f64ca5acd131327241512";

async function getWeather() {
  const city = document.getElementById("city").value;
  const weatherInfo = document.getElementById("weather-info");

  if (!city) {
    alert("Please enter a city name");
    return;
  }

  try {
    const response = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`
    );
    const data = await response.json();

    if (response.ok) {
      document.getElementById("location").innerText = `Location: ${data.location.name}, ${data.location.country}`;
      document.getElementById("temperature").innerText = `Temperature: ${data.current.temp_c}°C`;
      document.getElementById("condition").innerText = `Condition: ${data.current.condition.text}`;
    } else {
      weatherInfo.innerHTML = `<p style="color: red;">${data.error.message}</p>`;
    }
  } catch (error) {
    weatherInfo.innerHTML = `<p style="color: red;">Failed to fetch weather data</p>`;
  }
}
