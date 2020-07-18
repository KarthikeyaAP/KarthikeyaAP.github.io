const key='JQ4sHHSblUw7x4wqAuu53SFojIwbJzcA';


const getCity= async(city) =>{
    const base='https://dataservice.accuweather.com/locations/v1/cities/search';
    const query=`?apikey=${key}&q=${city}`;

    const details= await fetch(base+query);
    const data= await details.json();
    return data[0];
};

const getWeather= async(id) =>{
    const base='https://dataservice.accuweather.com/currentconditions/v1/';
    const query=`${id}?apikey=${key}`;
    
    const details=await fetch(base+query);
    const data=await details.json();
    return data[0];
};
