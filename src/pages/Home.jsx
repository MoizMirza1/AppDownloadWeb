import React from 'react'
import Banner from '../components/Banner'
import Header from '../components/Header'
import Featured from '../components/Featured'
import Installation from '../components/Installation'
import Reviews from '../components/Reviews'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
        <Header/>
        <Banner/>
        <div className='bg-background'>
            <Featured />
            <Installation/>
            <Reviews/>
            <Footer/>
            </div>
        
        
    </div>
  )
}

export default Home