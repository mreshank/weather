const API_KEY = "7147e2c49f8c16009006e84ccfd35c8f";
const form = document.querySelector("form");
const search = document.querySelector("#searchLogo");
const getMyInput = document.querySelector("#cityInput");
const weather = document.querySelector("#weather");

const getWeather = async(city) => {
    console.log('Fetching weather for city')
    console.log(city); 
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    if(data["cod"] == 404) {
        // alert("City Not Found");
        document.querySelector("#searchedCity").innerHTML = "city not found!";
        // return;
    }
    else {
        document.querySelector("#searchedCity").innerHTML = city;
    // document.querySelector("#currentTemperature").value = data["main"]["temp"] + "°C";
    console.log("temperature :->:->: ", data["main"]["temp"], "°C");
    document.querySelector("#currentTemperature").innerHTML = String(data["main"]["temp"]).concat("°C");
    console.log("Humidity is :->:->: ", data["main"]["humidity"], "%");
    document.querySelector("#humidityValue").innerHTML = String(data["main"]["humidity"]).concat("%");
    console.log("Wind is :->:->: ", data["wind"]["speed"], "km/h");
    document.querySelector("#windValue").innerHTML = String(data["wind"]["speed"]).concat("km/h");
    console.log("Pressure :->:->: ", data["main"]["pressure"], "hPa");
    document.querySelector("#pressureValue").innerHTML = String(data["main"]["pressure"]).concat("hPa");
} };

function runFun() {
    var enteredCity = document.querySelector("#getMyInput").value;
    getWeather(enteredCity);
    return false;
}

function searchWeather(event) { 
    var enteredCity = document.querySelector("#getMyInput").value;
    console.log(enteredCity);
    getWeather(enteredCity);
    event.preventDefault(); 
    return false;
}
