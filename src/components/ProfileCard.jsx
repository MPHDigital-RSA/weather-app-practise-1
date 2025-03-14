import React from 'react'

function ProfileCard({ stack, experience }) {
    return (
        <div className='bg-white rounded-xl flex flex-col gap-[10px] py-[30px] px-[30px] items-center text-center justify-center text-[#019D8B] md:w-[100%] md:h-[100%]'>
            <h2 className='font-bold text-[24px] text-[rgb(1, 157, 139)]'>{stack}</h2>
            <p className='text-[50px]'>{experience}%</p>
        </div>
    )
}

export default ProfileCard
