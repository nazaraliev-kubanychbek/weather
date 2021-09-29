import React,{useState} from 'react'
import axios from "axios";
import './app.css'
import Form from "./Form";
import Weather from "./Weather";

function App() {
    let key = 'f4833cf990dc92ef43563c9b00da2a78';
    const [city, setCity] = useState('');
    const [weather, setWeather] = useState({});
    const [error, setError] = useState('')
    const getWeather = () => {
    axios(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`)
        .then(({data}) => setWeather(data))
        .catch(()=> {
            setError('Упс произошла ошибка')
            setWeather({})
        } )
        setTimeout(()=>{
            setError('')
        }, 5000)

        setCity('')
setError('')
}

  return (
   <div className='bg'>
<div className='center'>
    {error.length === 0? '': <div><p className='error'>{error}</p> <p className='error'>Введите правильное название города</p></div>}
    <Form setCity={setCity} getWeather={getWeather} city={city}/>
    <div>
        {/*{JSON.stringify(weather)}*/}
        {JSON.stringify(weather) === '{}'
            ? <p className='dan'>Здесь будут ваши данные</p>
            : <Weather weather={weather}/>}
    </div>
</div>
   </div>
  );
}

export default App;
