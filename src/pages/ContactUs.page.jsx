import React from 'react';
import './Contact.css';
import DefaultLayoutHoc from '../layout/Default.layout';
import { IoLocationSharp , IoCall} from "react-icons/io5";
import { FiClock } from "react-icons/fi";
import { HiMail} from "react-icons/hi";


const ContactUs = () => {
  return (
    <div>
      <div className='blog' id='top'>
        <h1>Contact Us</h1>
        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
      </div>
      <div className="contact">

     <h3 style={{color:'#fc8621',fontWeight:'400'}}>CONTACT</h3>
     <h1>Get In Touch</h1>

     <div className="contact__sub">
      <div className="contact__sub__1">
        {/* details */}
         <div className='touch'>
           <div className='iconesss'>
            {/* icon */}
            <IoLocationSharp/>
           </div>
           <div className='detailsss'>
            {/* details */}
            <h4>Location:</h4>
            <p>43 Raymouth Rd. Baltemoer, London 3910</p>
           </div>
         </div>
         <div className='touch'>
           <div className='iconesss'>
            {/* icon */}
            <FiClock/>
           </div>
           <div className='detailsss'>
            {/* details */}
            <h4>Open Hours:</h4>
            <p>Sunday-Friday: <br/>11:00 AM - 2300 PM</p>
           </div>
         </div>
         <div className='touch'>
           <div className='iconesss'>
            {/* icon */}
            <HiMail/>
           </div>
           <div className='detailsss'>
            {/* details */}
            <h4>Email:</h4>
            <p>info@Colorlib</p>
           </div>
         </div>
         <div className='touch'>
           <div className='iconesss'>
            {/* icon */}
            <  IoCall/>
           </div>
           <div className='detailsss'>
            {/* details */}
            <h4>Call:</h4>
            <p>+1 1234 55488 55</p>
           </div>
         </div>
      </div>
      <div className='form__div'>
        {/* form div */}
        <form  className='from' action="">
          <div style={{display:'flex' , gap:'30px'}}>
            <input className='st__div'  type="text"  placeholder='Your Name'/>
            <input className='st__div'  type="email" placeholder='Your Email' />
          </div>
          <div>

          <input className='st__div' style={{width:'98%'}} type="text" placeholder='subject' />
          </div>
          <div>
          <textarea placeholder='message' style={{width:'100%',outline:'none',fontSize:'16px',padding:'5px'}} name="" id="" cols="30" rows="10">
            
          </textarea>

          </div>
            <button className='butt'> send message</button>
        </form>
      </div>
     </div>
      </div>

    </div>
  )
}

export default DefaultLayoutHoc(ContactUs);