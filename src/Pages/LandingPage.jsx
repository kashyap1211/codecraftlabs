import React from 'react'
import HomePage from './HomePage'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

const LandingPage = ({screen}) => {
  return (
    <>
    <Navbar/>
    {screen ? <div>{screen}</div> : <HomePage/>}
    <Footer/>
    </>
  )
}

export default LandingPage