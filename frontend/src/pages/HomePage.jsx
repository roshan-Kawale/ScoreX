import React from 'react'
import Navbar from '../components/Navbar'
import HomeCard from '../components/HomeCard'

const HomePage = () => {
  return (
    <>
    <div className='bg-[#1b1b1b]'>
    <Navbar/>
    </div>
    <div>
    <HomeCard/>
    </div>
    </>
    
  )
}

export default HomePage