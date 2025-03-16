import React from 'react'
import useWeatherStore from '../stores/WeatherStore'

function HumAndWindCard({ name, image }) {
    // const humidity = useWeatherStore(state => state.weatherData.humidity)
    // const wind = useWeatherStore(state => state.weatherData.wind)
    const myWeather = useWeatherStore(state => state.weatherData)

    const humidityUnit = useWeatherStore(state => state.humidityUnit)
    const windUnit = useWeatherStore(state => state.windUnit)
    return (
        <div className='flex flex-col gap-[10px] items-center justify-center shadow rounded-xl py-[30px] px-[40px]'>
            <img src={image} alt="this is the icon" />
            <h2 className='text-[14px] text-[#019D8B] font-bold'>{name}</h2>
            <div className='flex text-[#019D8B] font-bold text-[34px]'>
                {/* <p>{name === "Humidity" ? myWeather.main.humidity : myWeather.main.temp}</p> */}
                {myWeather.main ? <p>{name === "Humidity" ? Math.floor(myWeather.main.humidity) : Math.floor(myWeather.wind.speed)}</p> : null}
                <p>{name === "Humidity" ? humidityUnit : windUnit}</p>
            </div>
        </div>
    )
}

export default HumAndWindCard
