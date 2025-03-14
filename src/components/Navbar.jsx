import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Navbar() {
    return (
        <>
            <div className='px-[20px] w-[100%] absolute top-[20px]'>
                <div className='max-w-[900px] w-[100%] bg-white rounded-xl shaddow flex justify-between items-center h-[50px] px-[20px] mx-auto'>
                    <div className='flex gap-6'>
                        <Link to='/home' className='text-[#019D8B] font-semibold'>Home</Link>
                        <Link to='/dashboard' className='text-[#019D8B] font-semibold'>Dashboard</Link>
                    </div>
                    <div>
                        <Link to='/profile' className='text-[#019D8B] font-semibold'>Profile</Link>
                    </div>
                </div>
            </div>

            <Outlet />
        </>

    )
}

export default Navbar
