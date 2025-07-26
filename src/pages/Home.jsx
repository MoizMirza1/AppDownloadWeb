import React from 'react'
import Banner from '../components/Banner'
import Header from '../components/Header'
import Featured from '../components/Featured'
import Installation from '../components/Installation'

const Home = () => {
  return (
    <div>
        <Header/>
        <Banner/>
        <div className='bg-background'>
            <Featured />
            <Installation/>
            </div>
        
        
    </div>
  )
}

export default Home