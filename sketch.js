// var weather;

var url = 'https://api.openweathermap.org/data/2.5/weather?q=London&APPID=18de72c23159748d9aed1cbcfc8ae6af&units=metric';

// We're going to store the temperature
let temperature = 0;
// We're going to store text about the weather
let weather = "";

let json;

let xPos = 0;

function preload() {
  // The URL for the JSON data (replace "imperial" with "metric" for celsius)
  json = loadJSON(url, gotData);

}



function setup() {
  createCanvas(400, 400);
}


function gotData(data) {
  weather = data;
  console.log(weather);
}

function draw() {
  background(0);
  if (weather) {
    var temp = weather.main.temp;
    var humidity = weather.main.humidity;
    var wind = weather.wind.speed;

    ellipse(xPos, temp * 10, humidity, humidity);
    xPos = xPos + wind;
    if (xPos > width) {
      xPos = 0;
    }
  }
}