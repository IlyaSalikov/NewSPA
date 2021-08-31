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

    let gettingWeather = async () => {
        try {
            const apiResponse = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=Novosibirsk&appid=${apiKey}`);
            const data = await apiResponse.json();
            console.log(data);
        } catch (error) {
            console.error(`Произошла ошибка при выполнении запроса: ${error.message}`)
        }
    };

    return (
        <div>
            <input type="button" onClick={gettingWeather} value={"Получить погоду"}/>
            <Info/>
            <Form/>
            <WeatherController/>
        </div>
    );
};

export default WeatherMain;