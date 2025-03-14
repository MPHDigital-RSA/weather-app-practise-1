import React from 'react'
import CityCard from './CityCard'
import TempCard from './TempCard'
import HumAndWindCard from './HumAndWindCard'
import HumidityImage from '../assets/humidity.png'
import WindSpeed from '../assets/wind.png'

function WeatherData() {
    return (
        <div className='bg-white rounded-xl p-[15px] w-[100%] max-w-[900px] grid gap-[15px] md:grid-cols-2'>

            <div>
                <CityCard />
            </div>

            <div className='grid gap-[15px]'>
                <div>
                    <TempCard />
                </div>
                <div className='grid gap-[15px] grid-cols-2'>
                    <div>
                        <HumAndWindCard image={HumidityImage} unit='%' amount='80' name='Humidity' />
                    </div>
                    <div>
                        <HumAndWindCard image={WindSpeed} unit='KM/H' amount='5' name='Wind Speed' />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default WeatherData
