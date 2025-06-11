import { getWeather } from './weatherService.js';
import { displayWeather } from './uiRenderer.js';


document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('weather-form');
    const cityInput = document.getElementById('city-input');

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const city = cityInput.value.trim();

        if (city) {
            getWeather(city)
                .then(data => {
                    // Directly pass data to displayWeather
                    displayWeather(data);
                })
                .catch(error => {
                    console.error('Error fetching weather data:', error);
                    displayWeather({ main: { temp: 'N/A' }, weather: [{ description: 'Unable to fetch data' }], localSunrise: 'N/A', localSunset: 'N/A' });
                });
        } else {
            console.error('City input is empty');
            displayWeather({ main: { temp: 'N/A' }, weather: [{ description: 'City name is required' }], localSunrise: 'N/A', localSunset: 'N/A' });
        }
    });
});