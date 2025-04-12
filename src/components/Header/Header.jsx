import React from 'react'
import { LiaUserCircle } from "react-icons/lia";
import { BiPlusCircle } from "react-icons/bi";


const Header = () => {
  return (
    <div className='px-[8rem] py-[0.94rem] flex items-center justify-between'>
        <div className='flex items-center '>
            <img src="./img/logo.png" alt="Invest Home" />
            <span className='text-[#1E1E1E] font-[600] text-[1.25rem]'>Invest Home</span>
        </div>
        <div>
            <ul className='flex items-center gap-[1rem] '>
                <li><a href="" className='text-[var(--text-color-2)] text-[1rem] font-[500] py-[0.5rem] px-[0.5rem] hover:bg-[#CBD5FE] rounded-[30px] transition-all duration-300 ease-in'>Ev Alqı-satqısı </a></li>
                <li><a href="" className='text-[var(--text-color-2)] text-[1rem] font-[500] py-[0.5rem] px-[0.5rem] hover:bg-[#CBD5FE] rounded-[30px] transition-all duration-300 ease-in'>Kirayə</a></li>
                <li><a href="" className='text-[var(--text-color-2)] text-[1rem] font-[500] py-[0.5rem] px-[0.5rem] hover:bg-[#CBD5FE] rounded-[30px] transition-all duration-300 ease-in'>Haqqımızda</a></li>
                <li><a href="" className='text-[var(--text-color-2)] text-[1rem] font-[500] py-[0.5rem] px-[0.5rem] hover:bg-[#CBD5FE] rounded-[30px] transition-all duration-300 ease-in'>Xidmətlər</a></li>
                <li><a href="" className='text-[var(--text-color-2)] text-[1rem] font-[500] py-[0.5rem] px-[0.5rem] hover:bg-[#CBD5FE] rounded-[30px] transition-all duration-300 ease-in'>Bloq</a></li>
            </ul>
        </div>
        <div className='flex items-center gap-[1rem]'>
            <a href="" className='flex items-center gap-[0.5rem] text-[var(--text-color-2)] text-[1rem] font-[500] border border-[var(--white)] px-[1.62rem] py-[0.9rem] rounded-[0.5rem] hover:bg-[var(--primary-color)] hover:text-[var(--white)] hover:border-[var(--primary-color)] transition-all duration-300 ease-in'><LiaUserCircle className='text-[1.5rem]'/> Daxil ol</a>
            <a href="" className='flex items-center gap-[0.5rem] text-[var(--white)] text-[1rem] font-[500] bg-[var(--primary-color)] px-[1.62rem] py-[0.9rem] border border-[var(--primary-color)] rounded-[0.5rem] hover:bg-[var(--white)] hover:text-[var(--primary-color)] transition-all duration-300 ease-in'><BiPlusCircle className='text-[1.5rem]'/> Elan ver</a>
        </div>
    </div>
  )
}

export default Header