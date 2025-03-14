import React from 'react'

function HumAndWindCard({ name, image, unit, amount }) {
    return (
        <div className='flex flex-col gap-[10px] items-center justify-center shadow rounded-xl py-[30px] px-[40px]'>
            <img src={image} alt="this is the icon" />
            <h2 className='text-[14px] text-[#019D8B] font-bold'>{name}</h2>
            <div className='flex text-[#019D8B] font-bold text-[34px]'>
                <p>{amount}</p>
                <p>{unit}</p>
            </div>
        </div>
    )
}

export default HumAndWindCard
