import React from 'react'
import HeroSection from '../components/HeroSection.component';
import Footer from '../components/Footer.component'

const DefaultLayoutHoc = (Component) =>({...props})=> {
  return (
    <div>
        <HeroSection/>
        <Component {...props}/>
        <Footer/>
    </div>
  )
}

export default DefaultLayoutHoc