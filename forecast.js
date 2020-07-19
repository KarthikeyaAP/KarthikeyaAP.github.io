

const getFDetails=async(city)=>{
    const area=await getForecast(city);
    return area;
}

const formatTime=(timestamp)=>{
    dateObj = new Date(timestamp * 1000); 
            time = dateObj.toLocaleString(); 
            
            return time;
}

const cards=document.querySelector('.cards');
window.addEventListener('load',()=>{
    const cards=document.querySelector('.cards');
    const updateUI=(data)=>{
        const list=data.list;
        list.forEach( (item,index) => {
            cards.innerHTML+=`
            <section class="card  rounded ">
                <div class="img1 bg-light text-center mx-auto my-0">
                    <img src="" alt="" class="img-lot1">
                </div>
                <div class="details text-center text-muted text-uppercase">
                    <h5 class="my-1">${data.city.name}</h5>
                    <div class="my-4">${item.weather[0].description}</div>
                    <div class="my-4 display-4">
                        <span>${(item.main.temp-273).toFixed(2)}</span>
                        <span>&deg;C</span>
                    </div>
                    <div class="my-4 ">
                        <span class="text-lowercase">at</span>
                        <span>${formatTime(item.dt)}</span>
                    </div>
                </div>
            </section>
            `
            const imgno=item.weather[0].icon;
            const img=document.querySelectorAll('.img1');
            const arr=Array.from(img);
            arr[index].children[0].setAttribute('src',`https://openweathermap.org/img/wn/${imgno}@2x.png`);
        })
    }

    getFDetails(localStorage.city)
    .then(data => updateUI(data))
    .catch(err => console.log(err));
})
// console.log(navigator.geolocation.getCurrentPosition(position=>{
//     console.log(position.coords.latitude,position.coords.longitude);
// },err=>{console.log(err)}))

// const geocoder=null;

