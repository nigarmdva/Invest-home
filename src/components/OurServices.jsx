import React from 'react'
import { MdSearch } from "react-icons/md";
import { GrHomeRounded } from "react-icons/gr";
import { RiHotelBedLine } from "react-icons/ri";


const OurServices = () => {
  return (
    <div className='bg-[var(--text-color-5)] px-[10rem] py-[7rem] flex flex-col items-center justify-center text-center'>
        <span className='text-[var(--text-color-2)] text-[1.2rem] font-[500] uppercase'>XİDMƏTLƏRİMİZ</span>
        <span className='text-[var(--text-color-1)] text-[2.4rem] font-[600] pt-[2.5rem]'>İnvest Home ilə əmlakı asanlıqla tapın.</span>
        <div className='flex flex-row gap-[3.12rem] pt-[4rem]'>
            <div className='flex flex-col items-center justify-center gap-[1.2rem] w-[21rem] h-[22rem] bg-[var(--white)] rounded-[1rem] p-[3rem] shadow-[4px_10px_30px_0px_rgba(0,_0,_0,_0.03)] text-edge'>
                <div className='w-[5rem] h-[5rem] bg-[var(--primary-color)] rounded-full flex items-center justify-center shadow-[4px_10px_30px_rgba(67,_97,_238,_0.40)]'>
                    <MdSearch className='text-[2.7rem] text-[var(--white)]'/>
                </div>
                <span className='text-[var(--text-color-2)] text-[1.2rem] font-[500]'>Yeni Ev Alın</span>
                <p className='text-[var(--text-color-3)] text-[1rem] font-[400] text-center mx-auto leading-[1.6rem]'>Donec porttitor euismod dignissim. Nullam a lacinia ipsum, nec dignissim purus. </p>
            </div>
            <div className='flex flex-col items-center justify-center gap-[1.2rem] w-[21rem] h-[22rem] bg-[var(--white)] rounded-[1rem] p-[3rem] shadow-[4px_10px_30px_0px_rgba(0,_0,_0,_0.03)] text-edge'>
                <div className='w-[5rem] h-[5rem] bg-[var(--primary-color)] rounded-full flex items-center justify-center shadow-[4px_10px_30px_rgba(67,_97,_238,_0.40)]  '>
                    <GrHomeRounded className='text-[2.7rem] text-[var(--white)]'/>
                </div>
                <span className='text-[var(--text-color-2)] text-[1.2rem] font-[500]'>Ev Sat</span>
                <p className='text-[var(--text-color-3)] text-[1rem] font-[400] text-center mx-auto leading-[1.6rem]'>Donec porttitor euismod dignissim. Nullam a lacinia ipsum, nec dignissim purus. </p>
            </div>
            <div className='flex flex-col items-center justify-center gap-[1.2rem] w-[21rem] h-[22rem] bg-[var(--white)] rounded-[1rem] p-[3rem] shadow-[4px_10px_30px_0px_rgba(0,_0,_0,_0.03)] text-edge'>
                <div className='w-[5rem] h-[5rem] bg-[var(--primary-color)] rounded-full flex items-center justify-center shadow-[4px_10px_30px_rgba(67,_97,_238,_0.40)]  '>
                    <RiHotelBedLine className='text-[2.7rem] text-[var(--white)]'/>
                </div>
                <span className='text-[var(--text-color-2)] text-[1.2rem] font-[500]'>Kirayə Ev</span>
                <p className='text-[var(--text-color-3)] text-[1rem] font-[400] text-center mx-auto leading-[1.6rem]'>Donec porttitor euismod dignissim. Nullam a lacinia ipsum, nec dignissim purus. </p>
            </div>
        </div>
    </div>
  )
}

export default OurServices