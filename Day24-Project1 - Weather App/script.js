import { config } from './config.js';

const getWeather = async () => {
    const city = document.getElementById('cityInput').value;
    const weatherData = document.getElementById('weatherInfo1');

    if (!city) {
        weatherData.innerHTML = `<p>Please enter a city name!!</p>`;
        return;
    }

    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${config.apiKey}`);
        const data = await response.json();
        console.log(data);

        if (data.cod === 404) {
            weatherData.innerHTML = `<p>City not found</p>`;
            return;
        }

        const { name, main, weather } = data;

        weatherData.innerHTML = `<p>The City name is: ${name}</p>
                                 <p>The current Temperature is: ${main.temp}&deg;C</p>
                                 <p>The weather condition is: ${weather[0].description}</p>`;

        if (weather[0].description === 'clear sky') {
            document.body.style.backgroundImage = "url('https://www.weather2travel.com/images_blog/sunshine-hours-where-and-when-is-it-sunniest.jpg')";
        } else if (weather[0].description === 'few clouds') {
            document.body.style.backgroundImage = "url('https://www.pexels.com/photo/scattered-clouds-in-a-blue-sky-over-the-ocean-8579644/')";
        } else if (weather[0].description === 'scattered clouds' || weather[0].description === 'broken clouds') {
            document.body.style.backgroundImage = "url('https://images.pexels.com/photos/18434328/pexels-photo-18434328/free-photo-of-cirrus-clouds-scattered-on-blue-sky.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')";
        } else if (weather[0].description === 'shower rain') {
            document.body.style.backgroundImage = "url('https://images.pexels.com/photos/9155214/pexels-photo-9155214.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')";
        } else if (weather[0].description === 'rain') {
            document.body.style.backgroundImage = "url('https://images.pexels.com/photos/2816625/pexels-photo-2816625.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')";
        } else if (weather[0].description === 'thunderstorm') {
            document.body.style.backgroundImage = "url('https://images.pexels.com/photos/1162251/pexels-photo-1162251.jpeg')";
        } else if (weather[0].description === 'snow') {
            document.body.style.backgroundImage = "url('https://images.pexels.com/photos/624015/pexels-photo-624015.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)";
        } else if (weather[0].description === 'mist') {
            document.body.style.backgroundImage = "url('https://www.metoffice.gov.uk/binaries/content/gallery/metofficegovuk/hero-images/weather/fog--mist/foggy-morning-in-a-meadow.jpg')";
        } else if (weather[0].description === 'overcast clouds') {
            document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1533812451773-f2b04c2bdeb2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')";
        } else if (weather[0].description === 'fog') {
            document.body.style.backgroundImage = "url('https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')";
        } else if (weather[0].description === 'haze') {
            document.body.style.backgroundImage = "url('https://cff2.earth.com/uploads/2018/11/13015448/what-is-haze.jpg')";
        } else if (weather[0].description === 'dust') {
            document.body.style.backgroundImage = "url('https://s.hdnux.com/photos/01/33/45/62/24009905/6/rawImage.jpg')";
        }

    } catch (err) {
        weatherData.innerHTML = `<p>There was an error fetching the API data</p><p>The error is ${err}</p>`;
    }
}

const getFiveDayData = async () => {
    const city = document.getElementById('cityInput').value;
    const weatherInfo = document.getElementById('weatherInfo2');

    if (!city) {
        weatherInfo.innerHTML = '<p>Please enter a city name.</p>';
        return;
    }

    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${config.apiKey}&units=metric`);
        const data = await response.json();

        if (data.cod !== "200") {
            weatherInfo.innerHTML = `<p>${data.message}</p>`;
            return;
        }

        console.log(data);

        weatherInfo.innerHTML = '';

        const forecast = data.list;
        const days = {};

        // Group forecast data by day
        forecast.forEach(entry => {
            const date = new Date(entry.dt_txt).toLocaleDateString();
            if (!days[date]) {
                days[date] = [];
            }
            days[date].push(entry);
        });

        // Display the forecast for each day
        for (const [date, entries] of Object.entries(days)) {
            const dayContainer = document.createElement('div');
            dayContainer.className = 'weather-day';

            const dateHeader = document.createElement('h3');
            dateHeader.textContent = date;
            dayContainer.appendChild(dateHeader);

            entries.forEach(entry => {
                const time = new Date(entry.dt_txt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
                const temp = entry.main.temp;
                const condition = entry.weather[0].description;
                const iconCode = entry.weather[0].icon;
                const iconUrl = `http://openweathermap.org/img/wn/${iconCode}.png`;

                const forecastEntry = document.createElement('div');
                forecastEntry.className = 'forecast-entry';
                forecastEntry.innerHTML = `
                    <img src="${iconUrl}" alt="${condition}" class="weather-icon">
                    <p>${time} - ${temp}°C, ${condition}</p>
                `;
                dayContainer.appendChild(forecastEntry);
            });

            weatherInfo.appendChild(dayContainer);
        }
    } catch (error) {
        weatherInfo.innerHTML = '<p>There was an error fetching the weather data.</p>';
    }
}

window.getWeather = getWeather;
window.getFiveDayData = getFiveDayData;