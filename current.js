const key='d38e3b1fdcb50f16aff1b1db466da4f6';


const getCity= async(city) =>{
    const base='https://api.openweathermap.org/data/2.5/weather/';
    const query=`?q=${city}&appid=${key}`;

    const details= await fetch(base+query);
    const data= await details.json();
    return data;
};

const getForecast = async(city) =>{
    const base='https://api.openweathermap.org/data/2.5/forecast/';
    const query=`?q=${city}&appid=${key}`;

    const details= await fetch(base+query);
    const data = await details.json();

    return data;
};