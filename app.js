const  details=document.querySelector('.details');
const form=document.querySelector('form');
const dayImg=document.querySelector('.time-img');
const img=document.querySelector('.img-lot');
const card=document.querySelector('.card');

//get data
const getDetails=async(city)=>{
    const area=await getCity(city);
    const weather=await getWeather(area.Key);
    console.log(area,weather);
    return {
        area,
        weather
    }
}

//update your UI
const updateUI=(data)=>{
    details.innerHTML=`
    <h5 class="my-3">${data.area.EnglishName}</h5>
    <div class="my-4">${data.weather.WeatherText}</div>
    <div class="my-4 display-4">
        <span>${data.weather.Temperature.Metric.Value}</span>
        <span>&deg;C</span>
    </div>
    `
    const timeImg=data.weather.IsDayTime?'img/day.svg':'img/night.svg';
    dayImg.setAttribute('src',timeImg);
    const imgno=data.weather.WeatherIcon;
    img.setAttribute('src',`img/icons/${imgno}.svg`)
    if(card.classList.contains('d-none')){
        card.classList.remove('d-none');
    };
}

//add event listener
form.addEventListener('submit', (e)=>{
    e.preventDefault();
    const city=form.city.value.trim();
    form.reset();
    console.log(city);
    getDetails(city)
        .then(data => updateUI(data))
        .catch(err => console.log(err));
    
})

