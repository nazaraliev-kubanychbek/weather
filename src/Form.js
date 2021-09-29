import React from 'react';

const Form = ({setCity, getWeather, city}) => {
    return (

            <div className='form'>
                <label>
                    <input value={city}   placeholder='Введите город' type="text" onChange={(e) => setCity(e.target.value)}/>
                </label>
                <button type='button' onClick={getWeather}>Получить погоду</button>
            </div>

    );
};

export default Form;