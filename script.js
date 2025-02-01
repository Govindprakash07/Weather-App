const API_KEY = "YOUR_API_KEY_HERE"; // Replace with your OpenWeatherMap API Key

async function getWeather() {
    let city = document.getElementById("cityInput").value;
    if (!city) {
        alert("Please enter a city name!");
        return;
    }

    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;

    try {
        let response = await fetch(url);
        let data = await response.json();

        if (data.cod === "404") {
            document.getElementById("weatherResult").innerHTML = "City not found!";
            return;
        }

        document.getElementById("weatherResult").innerHTML = `
            <p>🌡️ Temperature: ${data.main.temp}°C</p>
            <p>💧 Humidity: ${data.main.humidity}%</p>
            <p>☁️ Weather: ${data.weather[0].description}</p>
        `;
    } catch (error) {
        console.log("Error fetching data:", error);
        document.getElementById("weatherResult").innerHTML = "Failed to fetch weather data!";
    }
}
