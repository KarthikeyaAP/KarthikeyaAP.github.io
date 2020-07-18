const  details=document.querySelector('.details');
const form=document.querySelector('form');
const dayImg=document.querySelector('.time-img');
const img=document.querySelector('.img-lot');
const card=document.querySelector('.card');

//get data
const getDetails=async(city)=>{
    const area=await getCity(city);
    return area;
}

//update your UI
const updateUI=(data)=>{
    const temp=(data.main.temp - 273).toFixed(2);
    details.innerHTML=`
    <h5 class="my-3">${data.name}</h5>
    <div class="my-4">${data.weather[0].description}</div>
    <div class="my-4 display-4">
        <span>${temp}</span>
        <span>&deg;C</span>
    </div>
    `
    const imgno=data.weather[0].icon;
    img.setAttribute('src',`http://openweathermap.org/img/wn/${imgno}@2x.png`);
    const timeImg=imgno.includes('d')?'img/day.svg':'img/night.svg';
    dayImg.setAttribute('src',timeImg);
    card.classList.contains('d-none')?card.classList.remove('d-none'):null;
};

//add event listener
form.addEventListener('submit', (e)=>{
    e.preventDefault();
    const city=form.city.value.trim();
    form.reset();
    getDetails(city)
        .then(data => updateUI(data))
        .catch(err => console.log(err));
    localStorage.setItem('city',city);
});

if(localStorage.city !=null){
    getDetails(localStorage.city)
        .then(data => updateUI(data))
        .catch(err => console.log(err));   
}


// const extra=document.querySelector('.extra1');
// console.log(extra)
// const updateUIE=(data)=>{
//     extra.innerHTML=`
//     <div class="my-2 display-4" >feels-like:${data.main.feels_like}<span>temp</span>
//                     <span>&deg;C</span></div>
//                 <div class="my-2">Max-temp:<span>${data.main.temp_max}</span>
//                     <span>&deg;C</span></div>
//                 <div class="my-2">Min-temp:<span>${data.main.temp_min}</span>
//                     <span>&deg;C</span></div>
//                     <div class="my-2">Humidity: ${data.main.humidity} hPa</div>
//                     <div class="my-2">Pressure: ${data.main.pressure} hPa</div>
//                     <div class="my-2">sunrise: ${formatTime(data.sys.sunrise)}</div>
//                     <div class="my-2">sunset:${formatTime(data.sys.sunset)}</div>
//     `
// };

// getDetails(localStorage.city)
//     .then(data => updateUIE(data))
//     .catch(err => console.log(err));