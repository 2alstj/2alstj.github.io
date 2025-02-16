const API_KEY = "55c6f0d323d26dc4f830d2eb3a3e1891";


function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;
    fetch(url).then((response)=>response.json()).then((data)=>{
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");

        weather.innerText = `현재 날씨는 ${data.weather[0].main}입니다.`;
        city.innerText = `현재 위치는 ${data.name}입니다.`;
    });
}
function onGeoError(){
    alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);

