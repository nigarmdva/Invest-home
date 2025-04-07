import React from 'react'

const Specialists = () => {
    const specialistGroup=[
        {
            id:1,
            img:"./img/specialist1.png",
            name:"Novruz",
            position:"CEO & Founder",
        },
        {
            id:2,
            img:"./img/specialist2.png",
            name:"Mahirə",
            position:"Real Estate Developer",
        },
        {
            id:3,
            img:"./img/specialist3.png",
            name:"Məqsəd",
            position:"Listing Agent",
        },
        {
            id:4,
            img:"./img/specialist4.png",
            name:"İlahə",
            position:"Buyer's Agent",
        },
    ]
  return (
    <div className='flex flex-col mx-[10rem] items-center justify-center my-[15rem] '>
        <span className="text-[var(--primary-color)] text-[1.2rem] font-[500] uppercase">Özünüzü təqdim edin</span>
        <p className='text-[var(--text-color-2)] text-[2.4rem] font-[600]'>Mütəxəssislər Qrupumuz</p>
        <div className='flex w-full flex-row justify-between mt-[7rem] '>
            {
                specialistGroup.map((item)=>{
                    return(
                        <div key={item.id} className='flex flex-col items-center justify-center '>
                            <img src={item.img} alt="specialist" className='w-[200px]' />
                            <span className='text-[var(--text-color-2)] text-[1.72rem] font-[600] my-[1rem]'>{item.name}</span>
                            <span className='text-[var(--primary-color)] text-[1rem] font-[500]'>{item.position}</span>
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default Specialists