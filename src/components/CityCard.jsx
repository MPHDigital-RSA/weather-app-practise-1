import React from 'react'
import WeatherImage from '../assets/Sun.png'

function CityCard() {
    return (
        <div className='flex flex-col gap-8 items-center justify-center shadow rounded-xl py-[30px] px-[40px] md:h-[100%]'>
            <h1 className='text-[34px] text-[#019D8B] font-bold'>New York</h1>
            <img src={WeatherImage} alt="Sun Image" className='w-[140px] h-[140px]' />
        </div>
    )
}

export default CityCard
