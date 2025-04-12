import React from 'react'
import Filter from './Home Intro Sections/Filter'
import PropertyFilterBar from './Home Intro Sections/PropertyFilterBar'

const HomeIntro = () => {
  return (
    <div className='bg-custom-gradient h-[40rem] px-[10rem] py-[2.5rem]'>
        <Filter/>
        <PropertyFilterBar/>
    </div>
  )
}

export default HomeIntro