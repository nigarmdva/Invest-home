import React from 'react'

const AgentSection = () => {
  return (
    <div className='mx-[10rem] my-[10rem] '>
        <div className='w-full rounded-[1.9rem]  h-[16.25rem] bg-[var(--primary-color)] flex flex-row justify-evenly items-center p-[2.5rem]'>

            <div className=''>
                <img src="./img/agent.png" alt="Invest Home"  className='mb-[2.7rem]'/>
            </div>

      
            <div className='flex flex-col gap-[1.2rem] w-[21.2rem]'>
                <span className='text-[var(--white)] text-[2.4rem] font-[600]'>Agent ol </span>
                <p className='text-[var(--white)] text-[1rem] font-[400]'>Fusce venenatis tellus a felis scelerisque. venenatis tellus a felis scelerisque. </p>
            </div>

            <div>
                <button className='group flex items-center gap-[10px] bg-[var(--white)] cursor-pointer border border-[#EB664E] py-[19px] px-[50px] rounded-[30px] h-[50px] transition-all duration-300 ease-in-out relative overflow-hidden hover:bg-[#EB664E] '>
                    <span className="inline-block transition-all duration-300 ease-in-out transform group-hover:scale-110 group-hover:text-white group-active:scale-100">
                    İndi Qeydiyyatdan Keçin
                    </span>
                </button>
            </div>
          
        </div>
    </div>
  )
}

export default AgentSection