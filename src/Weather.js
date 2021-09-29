import React from 'react';

const Weather = ({weather}) => {
    return (
        <table>
            <tr>
                <td>Страна</td>
                <td>{weather.sys.country}</td>
            </tr>
            <tr>
                <td>Город</td>
                <td>{weather.name}</td>
            </tr>
            <tr>
                <td>Температура</td>
                <td>{(weather.main.temp -273.15).toFixed(2)}°C</td>
            </tr>
            <tr>
                <td>Скорость ветра</td>
                <td>{weather.wind.speed}м/c</td>
            </tr>
        </table>

    );
};

export default Weather;