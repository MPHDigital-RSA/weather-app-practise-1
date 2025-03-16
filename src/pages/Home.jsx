import React from 'react'
import Sun from '../assets/sun.svg'
import { Link } from 'react-router-dom'

function Home() {
    return (
        <div className='bg-[#019D8B] w-[100%] h-[100vh] py-[150px] px-[20px] flex items-center justify-center'>
            <div className='flex items-center justify-center flex-col gap-5 max-w-[900px] w-[100%]'>
                <img src={Sun} alt="the sun image" className='w-[120px]' />
                <h3 className='text-[24px] text-white font-semibold'>Welcome to Prince's Weather App</h3>
                <p className='text-white text-center'>This app uses ReactJS for development and weather API, to provide data related to the weather, temperature, humidity and the wind speed. using useState to manage states and useEffect </p>
                <Link to='/dashboard' className='bg-[#FFCE97] py-[20px] px-[30px] rounded-xl text-[#019D8B] font-bold text-[16px] hover:bg-[#FFE1BE]'>Enter the Dashboard</Link>
            </div>
        </div>
    )
}

export default Home
