import React from 'react'
import DefaultLayoutHoc from '../layout/Default.layout';
import './AboutUs.css'

// components
import Aboutus from '../components/AboutUs.component';
import Serve from '../components/Serve.component';
import Customer from '../components/Customer.component';
import VlogCard from '../components/VlogsCard.component';

const AboutUs = () => {
  return (
    <div>
      <div className='about__us'>
        <h1>About Us</h1>
        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
      </div>
      <Aboutus/>
      <Customer/>
      <div className='adventue'>
         <h1>Begin your adventurous journey here.</h1>
         <a href="/">Get  Started</a>

      </div>
    </div>
  )
}

export default  DefaultLayoutHoc(AboutUs);