document.addEventListener('DOMContentLoaded', () => {
    const apikey = 'dc1cbeb4e5848238bdec8c7f80736fb6';
    const city = "Sundargarh";
    const apiurl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apikey}`;

    function fetchWeather() {
        fetch(apiurl)
        .then(response => response.json())
        .then(data => {
            updateWeather(data);
        })
        .catch(error => {
            console.error('Error fetching weather data:',error);
            const weatherContaioner = document.getElementById('weather');
            weatherContaioner.innerHTML='Failed to weather data. Please try again!';
        });
    }

    function updateWeather(data) {
        const weatherIcon = document.getElementById('weatherIcon');
        const temperature = document.getElementById('temperature');
        const description = document.getElementById('description');

        const iconUrl = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
        weatherIcon.src = iconUrl;
        weatherIcon.alt = data.weather[0].description;
        temperature.textContent = `Temperature: ${data.main.temp}°C`;
        description.textContent =  data.weather[0].description;

        const cityName = data.name;
        const weatherTitle = document.querySelector('#weather h1');
        weatherTitle.textContent = `weather in ${cityName}`;
    }

    fetchWeather();
})