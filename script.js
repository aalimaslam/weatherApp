//Getting all the elements 

const API_KEY = "aba2bba243510ef8dc0a1cd4b2b00480";
const search_btn = document.getElementById('search-btn');
let CITY = document.getElementById('city');
const city_text = document.getElementById('city-name');
const tempInF = document.getElementById('f-temp')
const tempInC = document.getElementById('c-temp');
const weatherType = document.getElementById('weather');
const humidity = document.getElementById('humidity');
const windSpeed = document.getElementById('wind-speed');
const percipitation = document.getElementById('percipitation');



search_btn.onclick = ()=>{
    

    let CITY_NAME = CITY.value
    city_text.innerHTML = CITY_NAME.toUpperCase();
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${CITY_NAME}&appid=${API_KEY}`

    //creating a Request

    const request = new XMLHttpRequest();
    
    //Openeing The Request

    request.open('GET' , url);
    
    //GETTING THE RESPONSE 

    request.onload = ()=>{

        if(request.status >= 200 && request.status < 400){
            let RESPONSE = JSON.parse(request.response);
            let celcius = RESPONSE['main']['temp'] - 273;
            celcius = Math.round(celcius)
            let farenheit = (celcius * 9/5) + 32;
            tempInF.innerText = `${Math.round(farenheit)}°F`;
            tempInC.innerText = `${celcius}°C`;
            weatherType.innerText = RESPONSE['weather']['0']['main'];
            windSpeed.innerText = `${RESPONSE['wind']['speed'].toFixed(1)} M/SEC`
            console.log(RESPONSE);
            
            humidity.innerText = `${RESPONSE['main']['humidity']}%`
            percipitation.innerText = `${RESPONSE['main']['pressure']}mb`
            
        }
        else{
            alert("Encountered An error, Check The Name Of The City You Entered");
            city_text.innerHTML = "CITY NAME";
        }

    }

    //SENDING THE REQUEST

    request.send()

}
