import React from 'react'
import Thermometer from '../assets/temp.svg'
import useWeatherStore from '../stores/WeatherStore'

function TempCard() {

    // const temp = useWeatherStore(state => state.weatherData.temp)
    const myWeather = useWeatherStore(state => state.weatherData)

    return (
        <div className='flex gap-5 items-center justify-center shadow rounded-xl py-[10px] px-[40px]'>
            <img src={Thermometer} alt="Sun Image" className='w-[16px]' />
            {/* <h1 className='text-[44px] text-[#019D8B] font-bold'>{myWeather.main.temp}&#176;C</h1> */}
            {myWeather.main ? <h1 className='text-[44px] text-[#019D8B] font-bold'>{Math.floor(myWeather.main.temp)}&#176;C</h1> : null}
        </div>
    )
}

export default TempCard
