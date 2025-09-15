const apiKey = "YOUR_API_KEY"; // Replace with your OpenWeather API key
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&appid=${apiKey}`;
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon=document.querySelector(".weather-icon")
async function checkWeather(city) {
    const response = await fetch(`${apiUrl}&q=${city}`);
    if (!response.ok) {
        document.querySelector(".error").style.display="block"
        document.querySelector(".weather").style.display="none"
        return;
    }
    document.querySelector(".error").style.display="none"
    const data = await response.json();
    console.log(data);
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

    if(data.weather[0].main == "Clouds")
    {
        weatherIcon.src="images/clouds.png"
    }
    else if(data.weather[0].main == "Rain")
    {
        weatherIcon.src="images/rain.png"
    }
     else if(data.weather[0].main == "Clear")
    {
        weatherIcon.src="images/clear.png"
    }
     else if(data.weather[0].main == "Drizzle")
    {
        weatherIcon.src="images/drizzle.png"
    }
     else if(data.weather[0].main == "Mist")
    {
        weatherIcon.src="images/mist.png"
    }
    document.querySelector(".weather").style.display="block"
}

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
});


