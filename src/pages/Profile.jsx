import React from 'react';
import Image from '../assets/author.jpg';
import { Link } from 'react-router-dom';
import ProfileCard from '../components/ProfileCard';

function Profile() {
    return (
        <div className='bg-[#019D8B] w-[100%] min-h-[100vh] pt-[120px] pb-[50px] px-[40px] flex items-center justify-center'>
            <div className='flex items-center justify-center flex-col gap-5 max-w-[900px] w-[100%]'>
                <img src={Image} alt="the sun image" className='w-[150px] h-[150px] object-cover border-[6px] rounded-[40px]' />

                <div className='text-center'>
                    <h3 className='text-[24px] text-white font-semibold'>Prince Hlela</h3>
                    <h4 className='text-white text-[18px] font-semibold'>ALX (FE) Student </h4>
                    <p className='text-white text-center'>I am confident in HTML, CSS, JS, React JS and Git. </p>
                </div>

                <div className='w-[100%]'>
                    <div className='bg-white w-[100%] max-w-[400px] mx-auto text-center flex gap-7 justify-center py-2 rounded-lg'>
                        <Link to='https://github.com/MPHDigital-RSA' target='_blank' className=' text-[#019D8B] text-[16px] hover:bg-[#FFE1BE]
                    py-1 px-1 rounded-lg'>Github</Link>
                        <Link to='/dashboard' className=' text-[#019D8B] text-[16px] hover:bg-[#FFE1BE] py-1 px-1 rounded-lg'>Twitter</Link>
                        <Link to='/dashboard' className=' text-[#019D8B] text-[16px] hover:bg-[#FFE1BE] py-1 px-1 rounded-lg'>Discord</Link>
                    </div>
                </div>

                <div className='max-w-[900px] w-[100%] grid grid-cols-2 gap-[10px] md:grid-cols-3 md:grid-rows-2'>
                    <div><ProfileCard stack='HTML' experience='90' /></div>
                    <div><ProfileCard stack='CSS' experience='100' /></div>
                    <div className='row-span-2'><ProfileCard stack='REACT' experience='60' /></div>
                    <div className='md:col-span-2'><ProfileCard stack='JAVASCRIPT' experience='60' /></div>
                </div>
            </div>
        </div>
    )
}

export default Profile
