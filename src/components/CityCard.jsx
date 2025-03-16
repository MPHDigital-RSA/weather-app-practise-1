import React from 'react'
import WeatherImage from '../assets/sun.svg'
import useWeatherStore from '../stores/WeatherStore'

function CityCard() {

    // const city = useWeatherStore(state => state.weatherData.city)
    const myWeather = useWeatherStore(state => state.weatherData)

    return (
        <div className='flex flex-col gap-8 items-center justify-center shadow rounded-xl py-[30px] px-[40px] md:h-[100%]'>
            <h1 className='text-[34px] text-[#019D8B] font-bold'>{myWeather.name}</h1>
            {/* <img src={`https://openweathermap.org/img/wn/${myWeather.weather[0].icon}@2x.png`} alt="Sun Image" className='w-[100px] h-[100px] fit-cover' /> */}

            {myWeather.weather ? <img src={`https://openweathermap.org/img/wn/${myWeather.weather[0].icon}@2x.png`} alt="Sun Image" className='w-[100px] h-[100px] fit-cover' /> : null}
        </div>
    )
}

export default CityCard
