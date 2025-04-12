import React from 'react'
import { IoGridOutline } from "react-icons/io5";
import { BsHouse } from "react-icons/bs";
import { IoCalendarOutline } from "react-icons/io5";
import { CiStar } from "react-icons/ci";
import { PiBuildings } from "react-icons/pi";


const PropertyFilterBar = () => {
  return (
    <div className='flex items-center gap-[1rem] py-[2rem]'>
        <div  tabIndex="0" className='flex items-center gap-[0.7rem] cursor-pointer border border-[#E9E9E9] bg-[var(--white)] py-[1rem] px-[1.5rem] rounded-[0.5rem] focus:bg-[var(--primary-color)] focus:text-[var(--white)] focus:border-[var(--primary-color)] active:bg-[var(--primary-color)] active:text-[var(--white)] active:border-[var(--primary-color)]  hover:bg-[var(--primary-color)] hover:text-[var(--white)] hover:border-[var(--primary-color)] transition-all duration-300 ease-in'>
            <IoGridOutline className='text-[1.5rem]' />
            <span>Bütün</span>
        </div>
        <div  tabIndex="0" className='flex items-center gap-[0.7rem] cursor-pointer border border-[#E9E9E9] bg-[var(--white)] py-[1rem] px-[1.5rem] rounded-[0.5rem] hover:bg-[var(--primary-color)] hover:text-[var(--white)] focus:bg-[var(--primary-color)] focus:text-[var(--white)] focus:border-[var(--primary-color)] active:bg-[var(--primary-color)] active:text-[var(--white)] active:border-[var(--primary-color)]  hover:border-[var(--primary-color)] transition-all duration-300 ease-in'>
            <BsHouse className='text-[1.5rem]' />
            <span>Satılıq</span>
        </div>
        <div  tabIndex="0" className='flex items-center gap-[0.7rem] cursor-pointer border border-[#E9E9E9] bg-[var(--white)] py-[1rem] px-[1.5rem] rounded-[0.5rem] hover:bg-[var(--primary-color)] focus:bg-[var(--primary-color)] focus:text-[var(--white)] focus:border-[var(--primary-color)] active:bg-[var(--primary-color)] active:text-[var(--white)] active:border-[var(--primary-color)]  hover:text-[var(--white)] hover:border-[var(--primary-color)] transition-all duration-300 ease-in'>
            <IoCalendarOutline className='text-[1.5rem]' />
            <span>Kirayə</span>
        </div>
        <div  tabIndex="0" className='flex items-center gap-[0.7rem] cursor-pointer border border-[#E9E9E9] bg-[var(--white)] py-[1rem] px-[1.5rem] rounded-[0.5rem] focus:bg-[var(--primary-color)] focus:text-[var(--white)] focus:border-[var(--primary-color)] active:bg-[var(--primary-color)] active:text-[var(--white)] active:border-[var(--primary-color)] hover:bg-[var(--primary-color)] hover:text-[var(--white)] hover:border-[var(--primary-color)] transition-all duration-300 ease-in'>
            <CiStar className='text-[1.5rem]' />
            <span>Populyar elanlar</span>
        </div>
        <div  tabIndex="0" className='flex items-center gap-[0.7rem] cursor-pointer border border-[#E9E9E9] bg-[var(--white)] py-[1rem] px-[1.5rem] rounded-[0.5rem] focus:bg-[var(--primary-color)] focus:text-[var(--white)] focus:border-[var(--primary-color)] active:bg-[var(--primary-color)] active:text-[var(--white)] active:border-[var(--primary-color)]  hover:bg-[var(--primary-color)] hover:text-[var(--white)] hover:border-[var(--primary-color)] transition-all duration-300 ease-in '>
            <PiBuildings className='text-[1.5rem]' />
            <span>Qonşuluq əmlakları</span>
        </div>
    </div>
  )
}

export default PropertyFilterBar