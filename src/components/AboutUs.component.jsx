import React from 'react'
import './AboutUs.css';
import { Carousel } from 'antd';

// import images

import image1 from '../images/about_1.jpg.webp';
import image2 from '../images/about_2.jpg.webp';
import image3 from '../images/about_3.jpg.webp';
import image4 from '../images/about_4.jpg.webp';
const AboutUsComponent = () => {
  return (
    <div className='aboutus__component'>
         <div className='aboutus__component__1'>
            <div className='aboutus__component__1__part1' >
                <h3 style={{color:'#fc8621',fontWeight:'400'}}>ABOUT US</h3>
                <h1>Explore All Corners of The World With Us</h1>
                <p>Far far away, behind the word mountains, far from 
                    the countries Vokalia and Consonantia, there live the blind texts. 
                    Separated they live in Bookmarksgrove right at the coast of the Semantics,
                     a large language ocean.
                </p>
                <p>
                A small river named Duden flows by their place and supplies 
                it with the necessary regelialia. It is a paradisematic country, 
                in which roasted parts of sentences fly into your mouth.
                </p>

                <a href="#">Read more</a>
            </div>
            <div className='aboutus__component__images'>
              

                 <img src={image1} alt="" />
                 
                 <img className='image2' src={image2} alt="" />
                 
              
            </div>
         </div>
         
    </div>
  )
}

export default AboutUsComponent;