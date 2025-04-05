import React from 'react'
import Customers from '../../components/Customers'
import Footer from '../../components/Footer'
import SubFooter from '../../components/SubFooter'
import Trend from '../../components/Trend'

const Home = () => {
  return (
    <div>
      <Trend/>
        <Customers/>
        <Footer/>
        <SubFooter/>
    </div>
  )
}

export default Home