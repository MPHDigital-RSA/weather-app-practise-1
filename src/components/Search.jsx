import React from 'react'
import SearchBtn from '../assets/search.png'

function Search() {

    function buttonClicked() {
        alert("button clicked!")
    }

    return (
        <div className='bg-white rounded-xl p-[15px] w-[100%] max-w-[900px] flex gap-[15px] justify-between items-center'>
            <input type="text" className='w-full outline-none placeholder-[#019D8B] placeholder-opacity-25 text-[#019D8B]' placeholder='Search your City' />
            <img src={SearchBtn} alt="this is the search icon" className='w-[18px] h-[18px] cursor-pointer' onClick={buttonClicked} />
        </div>
    )
}

export default Search
