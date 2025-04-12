import React from 'react'
import HomeSlider from './HomeSlider'

const IntroSection = () => {
  return (
   <div className='flex flex-row w-[100%] justify-between'>
     <div className='w-[34rem] flex flex-col'>
        <span className='text-[var(--primary-color)] text-[1.5rem] font-[500] uppercase'>DAŞINMAZ ƏMLAK</span>
        <p className='text-[var(--text-color-1)] text-[3rem] font-[600] leading-[2.9rem] py-[1rem]'>Sevdiyiniz mükəmməl bir ev tapın..!</p>
        <span className=' text-[var(--text-color-3)] text-[1rem] font-[400]'>Bizimlə birlikdə, rahat və təhlükəsiz əməliyyatlar <br /> üçün etibarlı tərəfdaş əldə edirsiniz.</span>
     </div>
     
    <HomeSlider />
   </div>
  )
}

export default IntroSection