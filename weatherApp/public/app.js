
let apiKey = `b4ce1ccb49f7d94f04d07b6961341671`;



let data = async (city) => {
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    let getValues = await fetch(apiUrl);
    let response = await getValues.json();
    if(response.cod == '404'){
        Swal.fire({
            icon: "error",
            title: "Data not found...",
            text: "Enter correct city name!",
            footer: '<a href="#">Why do I have this issue?</a>'
          });
    }
    else if(response.cod == '400'){
        Swal.fire({
            icon: "error",
            title: "Empty Input",
            text: "please enter city name!",
            footer: '<a href="#">Why do I have this issue?</a>'
          });

    }
    else{
        // console.log(response);
        return weatherData(response);
    }

   
}

let weatherData = (weatherValues) => {
    let value = document.getElementById('weather');
    value.innerHTML = ` <div class="p-5 font-bold text-white">
    <h1 class="text-3xl text-center ">${weatherValues.weather[0].main}</h1>    
    <h1 class="text-center ">( ${weatherValues.weather[0].description} )</h1>
    </div>
 <div class="m-0  font-bold text-white bg-purple-400 ">  <img class="w-[10rem] ml-20" src="https://openweathermap.org/img/wn/${weatherValues.weather[0].icon}@2x.png"></div>
<div class="p-5 text-xl  font-bold text-white bg-purple-500">
    <h1  class="text-center " >${weatherValues.main.temp_min}<span>&#176;</span> - ${weatherValues.main.temp_max} <span>&#176;</span> </h1>
</div>
<div class="p-5 text-xl  font-bold text-white bg-purple-600 ">
    <h1 class="text-center">${weatherValues.name} the city of ${weatherValues.sys.country} </h1>
</div>

`
}


function getData() {
    let input = document.getElementById('search').value;
    data(input);
}