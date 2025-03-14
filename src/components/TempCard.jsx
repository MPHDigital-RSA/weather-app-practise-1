import React from 'react'
import Thermometer from '../assets/temp.png'

function TempCard() {
    return (
        <div className='flex gap-5 items-center justify-center shadow rounded-xl py-[10px] px-[40px]'>
            <img src={Thermometer} alt="Sun Image" className='w-[16px]' />
            <h1 className='text-[44px] text-[#019D8B] font-bold'>60C</h1>
        </div>
    )
}

export default TempCard
