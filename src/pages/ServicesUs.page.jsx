import React from 'react'
import DefaultLayoutHoc from '../layout/Default.layout';
import './ServicesUs.css'
import Serve from '../components/Serve.component'

const ServicesUs = () => {
  return (
    <div>
      <div className='blog' id='top'>
        <h1>Services</h1>
        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
      </div>
      <div className='our'>
           <h1>Our Services Includes...</h1>
      </div>
      <Serve/>
    </div>
  )
}

export default DefaultLayoutHoc(ServicesUs);