import React, {useState} from 'react';
import Form from "./Form";
import Info from "./Info";
import WeatherController from "./WeatherController";

const WeatherMain = () => {
    const apiKey = "241fb0dba95bba393d5ffbb8521fabcf";
    let [state, setstate] = useState({
        iconUrl: null,
        alt: null,
        wind: null,
        main: null,
        temp: null,
        city: null,
        country: null,
        sunrise: null,
        sunset: null,
    })

    let gettingWeather = async (event) => {
        event.preventDefault();//отменяем обновление страницы при отправке формы

        const city = event.target.elements.city.value;
        console.log(city);

        let data = null;

        try {
            const apiResponse = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`);
            data = await apiResponse.json();
            console.log(data);
        } catch (error) {
            console.error(`Произошла ошибка при выполнении запроса: ${error.message}`);
        }
        // let sunset = data.sity.sunset;

        let sunrise = data?.sys.sunrise;
        let timezone = data?.timezone;
        let date = new Date();
        date.setTime(sunrise*1000 - timezone);
        const sunriseTime = date.toLocaleTimeString();

        const icon = data?.weather[0].icon;
        setstate({
            temp: (data?.main.temp -273.15).toFixed(2),
            iconUrl: `https://openweathermap.org/img/wn/${icon}.png`,
            sunrise: sunriseTime
        })
    };

    return (
        <div>
            <Info/>
            <Form weatherMethod={gettingWeather}/>
            <WeatherController weatherData={state}/>
        </div>
    );
};

export default WeatherMain;