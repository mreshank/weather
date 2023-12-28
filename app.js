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

function searchWeather(event) { 
    var enteredCity = document.querySelector("#getMyInput").value;
    console.log(enteredCity);
    getWeather(enteredCity);
    event.preventDefault(); 
}

getMyInput.addEventListener("submit", function(event) {
    console.log("Funtion Working !");
        // var enteredCity = document.querySelector("#getMyInput").value;
        // alert(city, "Entered");
        // getWeather(city);
        event.preventDefault(); 
}, false );








// {
//     "coord": {
//         "lon": 78.0437,
//         "lat": 30.3256
//     },
//     "weather": [
//         {
//             "id": 800,
//             "main": "Clear",
//             "description": "clear sky",
//             "icon": "01d"
//         }
//     ],
//     "base": "stations",
//     "main": {
//         "temp": 7.19,
//         "feels_like": 6.48,
//         "temp_min": 7.19,
//         "temp_max": 7.19,
//         "pressure": 1019,
//         "humidity": 37,
//         "sea_level": 1019,
//         "grnd_level": 942
//     },
//     "visibility": 10000,
//     "wind": {
//         "speed": 1.47,
//         "deg": 63,
//         "gust": 1.61
//     },
//     "clouds": {
//         "all": 0
//     },
//     "dt": 1703733255,
//     "sys": {
//         "type": 1,
//         "id": 9162,
//         "country": "IN",
//         "sunrise": 1703727781,
//         "sunset": 1703764493
//     },
//     "timezone": 19800,
//     "id": 1273313,
//     "name": "Dehradun",
//     "cod": 200
// }




























































// // API_KEY = "f0e6a6fbbd6d0f882f703b1deee7c242"
// // let temp = document.querySelector("currentTemperature");
// // let humd = document.querySelector("humidityValue");
// // let wind = document.querySelector("windValue");
// // let pres = document.querySelector("pressureValue");

// const { string } = require("yargs");

// // let userInput = document.querySelector("input");



// // function searchWeather() {
// //     alert("Hello");
// //     document.forms['cityInput'].value='';
// //     alert(userInput.value);
// //     document.forms['cityInput'].submit();
// // }

// // userInput.addEventListener("sumbit", () => {
// //     alert(userInput.value);
// //     nameInput.setCustomValidity("");
// // });

// // function searchWeather2() {
// // }

// const API_KEY = "7147e2c49f8c16009006e84ccfd35c8f";
// const form = document.querySelector("form");
// const search = document.querySelector("#searchLogo");
// const getMyInput = document.querySelector("#cityInput");
// const weather = document.querySelector("#weather");

// const getWeather = async(city) => {
//     alert('Fetching weather for city')
//     console.log(city); 
//     const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
//     const response = await fetch(url);
//     const data = await response.json();
//     console.log(data);
// };

// // form.addEventListener(
// //     "image",
// //     function(event) { 
// //         alert(". . .")
// //         getWeather(search.value);
// //         event.preventDefault(); 
// //     } 
// // );

// function searchWeather(event) { 
//     alert(document.querySelector("#getMyInput").value)
//     getWeather(getMyInput.value);
//     event.preventDefault(); 
// } 


// // function searchWeather() {
// //     alert("HI");
    
// //     // var frm = 
// //     // document.forms.reset();
// //     document.forms['cityInput'].submit();
// //     // return false;

// //     // document.getElementById('cityInput').submit();
// //     // document.querySelector("#cityInput").submit();
// //     // document.getElementById('cityInput').value='';
// //     // document.querySelector("#cityInput").value='';

// //     // frm.submit(); // Submit
// //     // frm.reset();  // Reset
// //     alert("hello")
// //     return false; // Prevent page refresh
// // }









































// // const API_KEY = "f0e6a6fbbd6d0f882f703b1deee7c242";
// // const form = document.querySelector("form");
// // const search = document.querySelector("#search");
// // const weather = document.querySelector("#weather");

// // const getWeather = async(city) => {
// //     console.log(`Fetching weather for city ${city}`)
// //     const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

// //     const response = await fetch(url);
// //     const data = await response.json();
// //     console.log(data);

// //     if (!response.ok) {
// //         throw new Error(`HTTP error! status: ${response.status}`);
// //     } else {
// //         const data = await response.json();
// //         console.log(data);
// //     }
// // }

// // form.addEventListener("submit", function(event) {
// //     // event.preventDefault();
// //     getWeather(search.value);
// //     event.preventDefault();
// // });




