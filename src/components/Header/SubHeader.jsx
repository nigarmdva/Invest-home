import React from 'react'
import { CiLocationOn } from "react-icons/ci";

const SubHeader = () => {
  return (
    <div className='w-[100%] px-[8rem] h-[2.5rem] bg-[var(--primary-color)] flex items-center justify-between text-[0.8rem] text-[var(--white)] font-[400] '>
        <div className='flex items-center gap-[0.5rem]'>
            <CiLocationOn className='text-[1rem] text-[var(--white)]' />
            <span >Rusel plaza, Babək prospekti 10 e, Baku, Azerbaijan</span>
        </div>
        <div className="flex flex-row gap-[1.2rem]">
            <div className="flex items-center gap-[8px]">
              <img src="./img/phone_w.svg" alt="Invest Home" />
              <a href="tel:+994552224120">
              +994 55 222 41 20
              </a>
            </div>
            <div className="flex items-center gap-[8px]">
              <img src="./img/mail_w.svg" alt="Invest Home" />
              <a href="mailto:info@investhome.az">
              info@investhome.az
              </a>
            </div>
          </div>
    </div>
  )
}

export default SubHeader