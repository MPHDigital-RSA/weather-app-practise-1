import React from 'react'
import CityCard from './CityCard'
import TempCard from './TempCard'
import HumAndWindCard from './HumAndWindCard'
import HumidityImage from '../assets/humidity.svg'
import WindSpeed from '../assets/wind.svg'
import ErrorBoundary from './ErrorBoundary'
import useWeatherStore from '../stores/WeatherStore'

function WeatherData() {

    const myWeather = useWeatherStore((state) => state.WeatherData)

    return (
        <div className='bg-white rounded-xl p-[15px] w-[100%] max-w-[900px] grid gap-[15px] md:grid-cols-2' >
            <div>
                <ErrorBoundary fallback={<p>Something went wrong</p>}>
                    <CityCard />
                </ErrorBoundary>
            </div>

            <div className='grid gap-[15px]'>
                <div>
                    <ErrorBoundary fallback={<p>Something went wrong</p>}>
                        <TempCard />
                    </ErrorBoundary>
                </div>
                <div className='grid gap-[15px] grid-cols-2'>
                    <div>
                        <ErrorBoundary fallback={<p>Something went wrong</p>}>
                            <HumAndWindCard image={HumidityImage} name='Humidity' />
                        </ErrorBoundary>
                    </div>
                    <div>
                        <ErrorBoundary fallback={<p>Something went wrong</p>}>
                            <HumAndWindCard image={WindSpeed} name='Wind Speed' />
                        </ErrorBoundary>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default WeatherData
