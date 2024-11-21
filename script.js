const apiKey="4ab6b37900b099e1d4757473460fae70";
const apiUrl= "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search i");


async function checkWeather(city){
    console.log("testing");
    const response= await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await response.json();

    document.querySelector(".weather-p").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity +"%";
    document.querySelector(".speed").innerHTML = data.wind.speed + "kmph";

    document.querySelector(".weather").style.display="block";

}
searchBtn.addEventListener("click",()=>{
    checkWeather(searchBox.value);
})

