import React from 'react'
import WeatherData from '../components/WeatherData'
import Search from '../components/Search'

function Dashboard() {
    return (
        <div className='bg-[#019D8B] w-[100%] min-h-[100vh] pt-[150px] pb-[50px] px-[20px] flex items-center justify-center flex-col gap-2'>
            <Search />
            <WeatherData />
        </div>
    )
}

export default Dashboard
