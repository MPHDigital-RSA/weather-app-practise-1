// import React, { useState } from 'react'
import SearchBtn from '../assets/search.png'
import { useRef } from 'react';
import useWeatherStore from '../stores/WeatherStore';

function Search() {
    const inputRef = useRef("")

    const search = useWeatherStore((state) => state.search);

    const searchCity = () => {
        const city = inputRef.current.value;
        if (city === '') {
            search("durban");
        } else {
            search(city);
            inputRef.current.value = "";
        }
    }

    return (
        <div className='bg-white rounded-xl p-[15px] w-[100%] max-w-[900px] flex gap-[15px] justify-between items-center'>

            <input type="text" className='w-full outline-none placeholder-[#019D8B] placeholder-opacity-25 text-[#019D8B]' placeholder='Search your City' ref={inputRef} />

            <img src={SearchBtn} alt="this is the search icon" className='w-[18px] h-[18px] cursor-pointer' onClick={searchCity} />
        </div>
    )
}

export default Search
