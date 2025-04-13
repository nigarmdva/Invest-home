import React from 'react'
import { FaPlus } from "react-icons/fa";


const HomeCustomersButtons = () => {
  return (
    <div className='flex flex-row gap-[3rem] items-center justify-center pb-[7rem]'>
      <div className='flex flex-row gap-[9rem] w-[22rem] items-center py-[1rem]  px-[1.5rem] rounded-[3.1rem] border border-[#F4F4F4] shadow-[0px_4px_18px_0px_rgba(0,_0,_0,_0.05)]'>
        <div className='flex flex-row relative'>
          {/* <img className='absolute top-1.5 right-[1.75rem]' src="./img/Ellipse 7.svg" alt="" />   */}
          <img className='absolute top-0 right-[-1.5rem]' src="./img/Ellipse 4.svg" alt="" />
          <img className='absolute top-0 right-[-3rem]' src="./img/Ellipse 5.svg" alt="" />
          <img className='absolute top-0 right-[-4.5rem]' src="./img/Ellipse 6.svg" alt="" />
          <img className='absolute top-0 right-[-6rem]' src="./img/Ellipse 7.svg" alt="" />
          <img className='absolute top-0 right-[-7.5rem]' src="./img/Ellipse 8.svg" alt="" />
          <div className='absolute top-2.5 right-[-6.9rem]'>
            <FaPlus className='text-[var(--white)]'/>
          </div>
          <img  src="./img/Ellipse 3.svg" alt="" />
        </div>
        <div>
          <span>72k+ Məmnun <br /> Müştəri</span>
        </div>
      </div>
      <div className='flex flex-row gap-[2rem] py-[1rem] w-[22rem] items-center justify-center px-[1.5rem] rounded-[3.1rem] border border-[#F4F4F4] shadow-[0px_4px_18px_0px_rgba(0,_0,_0,_0.05)]'>
       
          <img  src="./img/Ellipse 3 (1).svg" alt="" />
        
          <span>200+ Yeni <br /> Siyahılar hər gün!</span>
     
      </div>
    </div>
  )
}

export default HomeCustomersButtons