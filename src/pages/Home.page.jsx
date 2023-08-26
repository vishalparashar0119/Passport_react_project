import React from 'react'
import './Home.css'
import { AiFillPlayCircle } from 'react-icons/ai';

// higher order component 
import DefaultLayoutHoc from '../layout/Default.layout';

// functional component
 import AboutUs from '../components/AboutUs.component';
 import Serve from '../components/Serve.component';
 import Customer from '../components/Customer.component';
 import VlogCard from '../components/VlogsCard.component';
// main funvtion div
const Home = () => {
  return (
    <div>
      <div className='heading__section'>
        <h1>
          It is Better to Travel Well Than to Arrive
        </h1>

        <div className='icone'>
          <a href="https://www.youtube.com/watch?v=mwtbEGNABWU">

            <div className='icone__div'>
              <AiFillPlayCircle />
            </div>
            <p>watch video</p>
          </a>
        </div>

      </div>
      <AboutUs/>
      <Serve/>
      <Customer/>
      <VlogCard/>

      <div className='adventue'>
         <h1>Begin your adventurous journey here.</h1>
         <a href="/">Get  Started</a>

      </div>
    </div>
  )
}

export default DefaultLayoutHoc(Home);