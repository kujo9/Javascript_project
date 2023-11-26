
const apiKey = "4bb6790829d6d71d4c03a68d7ca618f5";
const city = "Belleville";

fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
    .then(response => response.json())
    .then(data => {
        const temperature = ((data.main.temp - 273.15) * 9 / 5) + 32;

        const temperatureElement = document.getElementById('temperature-value');
        temperatureElement.textContent = `${temperature.toFixed(2)} F`;

        const humidityElement = document.getElementById('humidity-value');
        humidityElement.textContent = `${data.main.humidity}%`;

        const forecastListElement = document.getElementById('forecast-list');
        data.weather.forEach(forecast => {
            const forecastItem = document.createElement('li');
            forecastItem.textContent = `${forecast.description}`;
            forecastListElement.appendChild(forecastItem);
        });
    });
