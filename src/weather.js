const weatherElement = document.getElementById('weather')
async function getWeather(location){
  const {latitude, longitude} = location.coords;
  const APIKEY = '4977c6395d6461c4d67ac01827948fe7'
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${APIKEY}&units=metric`
  const data = await fetch(url).then(response => response.json())
  const weather = data.weather[0].main
  const {temp} = data.main
  insertWeather(weather,temp)
}

function getLocation(){
  navigator.geolocation.getCurrentPosition(getWeather,()=>{
    alert("i don't know your location")
  });

}

getLocation()
function insertWeather(weather,temp){
weatherElement.innerText = `기온 : ${temp}도, 날씨 : ${weather}`
}
