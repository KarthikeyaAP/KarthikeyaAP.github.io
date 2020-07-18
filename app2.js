const more=document.querySelector('.more');

const formatTime=(timestamp)=>{
    dateObj = new Date(timestamp * 1000); 
            utcString = dateObj.toLocaleString(); 
            time = utcString.slice(11,21);
            return time;
}

const getDetails=async(city)=>{
    const area=await getCity(city);
    return area;
}


window.addEventListener('load',()=>{
    const extra=document.querySelector('.extra1');
    const updateUIE=(data)=>{
    extra.innerHTML=`
    <div class="my-2" ><h5>feels-like</h5>:<span>${(data.main.feels_like-273).toFixed(2)}</span>
                    <span>&deg;C</span></div>
                <div class="my-2"><h5>Max-temp</h5>:<span>${(data.main.temp_max-273).toFixed(2)}</span>
                    <span>&deg;C</span></div>
                <div class="my-2"><h5>Min-temp</h5>:<span>${(data.main.temp_min-273).toFixed(2)}</span>
                    <span>&deg;C</span></div>
                    <div class="my-2"><h5>Humidity</h5>:  ${data.main.humidity} hPa</div>
                    <div class="my-2"><h5>Pressure</h5>:  ${data.main.pressure} hPa</div>
                    <div class="my-2"><h5>sunrise</h5>:   ${formatTime(data.sys.sunrise)}</div>
                    <div class="my-2"><h5>sunset</h5>:   ${formatTime(data.sys.sunset)}</div>
    `
};

getDetails(localStorage.city)
    .then(data => updateUIE(data))
    .catch(err => console.log(err));
})