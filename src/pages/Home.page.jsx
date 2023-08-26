import React from 'react'

// component import from component
import HeroSection from '../components/HeroSection.component';
import Footer from '../components/Footer.component';
import AboutUsComponent from '../components/AboutUs.component';
import Serve from '../components/Serve.component';
import Customer from '../components/Customer.component';
const Home = () => {
  return (
    <>
    <HeroSection/>
    <AboutUsComponent/>
     <Serve/>
     <Customer/>
    <Footer/>
    </>
  )
}

export default Home;