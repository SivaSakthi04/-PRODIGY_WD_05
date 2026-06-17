const apiKey = "83aab40fc39981351176e4f823cb5d53";

async function getWeather(){

const city =
document.getElementById("city").value;

if(city === ""){
alert("Please Select a City");
return;
}

const url =
`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

try{

const response =
await fetch(url);

const data =
await response.json();

document.getElementById("temp").innerHTML =
Math.round(data.main.temp) + "°C";

document.getElementById("cityName").innerHTML =
data.name;

document.getElementById("desc").innerHTML =
data.weather[0].description;

document.getElementById("humidity").innerHTML =
data.main.humidity + "%";

document.getElementById("wind").innerHTML =
data.wind.speed + " km/h";

document.getElementById("icon").src =
`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

}

catch(error){

alert("Error Fetching Weather");

}

}