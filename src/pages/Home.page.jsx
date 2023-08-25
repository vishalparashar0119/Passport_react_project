import React from 'react'
import HeroSection from '../components/HeroSection.component';
import Footer from '../components/Footer.component';
import AboutUsComponent from '../components/AboutUs.component';
import Serve from '../components/Serve.component';
const Home = () => {
  return (
    <>
    <HeroSection/>
    <AboutUsComponent/>
     <Serve/>
    <Footer/>
    </>
  )
}

export default Home;