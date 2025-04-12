import React from 'react'

const CompanyProfile = () => {
  return (
    <div className='ml-[10rem] flex flex-row justify-between '>
        <div className='w-[31rem]'>
            <span className='text-[var(--primary-color)] text-[1.2rem] font-[500] uppercase'>BİZ KİMİK ?</span>
            <p className='text-[var(--text-color-2)] text-[2.4rem] font-[600] leading-[2.9rem] py-[2rem]'>Müvafiq daşınmaz əmlakın tapılmasında fiziki şəxslərə köməklik.</p>
            <span className='text-[var(--text-color-3)] text-[1rem] font-[400] leading-[1rem] '>Daşınmaz əmlak sahəsində fiziki şəxslərə mükəmməl dəstək göstərərək, onların ehtiyac və istəklərinə uyğun ən doğru seçimləri tapmalarına kömək edirik.</span>
            <div className='flex items-center gap-[2rem] py-[2.3rem] px-[1.9rem] rounded-[1.9rem] shadow-[4px_10px_30px_0px_rgba(0,0,0,0.06)]'>
                <div>
                    <img src="./img/smarthome.svg" alt="Invest Home" />
                </div>
                <div>
                    <span className='text-[var(--primary-color)] text-[1.2rem] font-[500]'>Ev tapmaq bu qədər asan!</span>
                    <p className='text-[var(--text-color-3)] text-[1rem] font-[400]'>İstədiyiniz əmlak növünü seçərək, sizə uyğun variantları sürətli şəkildə əldə edin.</p>
                </div>
            </div>
            <div className='flex items-center gap-[2rem] my-[2.3rem] py-[2.3rem] px-[1.9rem] rounded-[1.9rem] shadow-[4px_10px_30px_0px_rgba(0,0,0,0.06)]'>
                <div>
                    <img src="./img/useroctagon.svg" alt="Invest Home" />
                </div>
                <div>
                    <span className='text-[var(--primary-color)] text-[1.2rem] font-[500]'>Peşəkar dəstək ilə asan!</span>
                    <p className='text-[var(--text-color-3)] text-[1rem] font-[400]'>Təkliflərinizin daha geniş auditoriyaya çatması üçün fərdi yanaşma.</p>
                </div>
            </div>
        </div>
        <div className='relative'>
            
            <img src="./img/invest.svg" alt="Invest Home" className='absolute top-[-4rem] right-[23rem]' />
            
            <img src="./img/iPhone 15 Pro.png" alt="Invest Home " />
            <div className='absolute bottom-[-7rem]  right-[14rem]'>
                <img className=' w-[6rem]' src="./img/Ellipse 15.svg" alt="Invest Home" />
            </div>
            <div className='absolute bottom-[9rem]  right-[19.5rem] rotate-90'>
                <img src="./img/Ellipse 15.svg" alt="Invest Home" />
            </div>
        </div>
    </div>
  )
}

export default CompanyProfile