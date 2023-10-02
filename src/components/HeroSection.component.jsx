import React, { useState } from 'react'
import './HeroSection.css'
import { Link } from 'react-router-dom';
import { MdLocationOn } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";
const HeroSection = () => {
  const [ active , setActive ] = useState(false);
   function isOpen (){
     setActive(true);
   }
   function isClose(){
    setActive(false);
   }
  return (

    
    <div className='background__image'>
      <div className='overlay'></div>
      <nav>
         <div>
            <Link style={{textDecoration:'none', color:'white', fontWeight:500 , fontSize:'25px' ,fontFamily:'Playfair Display", sans-serif'}} to='/'>Passport</Link>
            <Link className='nav__button' style={{textDecoration:'none', color:'white', fontWeight:100 , fontSize:'14px'}} to='/'>Home</Link>
            <Link className='nav__button' style={{textDecoration:'none', color:'rgba(255,255,255,0.6)', fontWeight:100 , fontSize:'14px'}} to='/aboutus'>About us</Link>
            <Link className='nav__button' style={{textDecoration:'none', color:'rgba(255,255,255,0.6)', fontWeight:100 , fontSize:'14px'}} to='/'>Dropdown</Link>
            <Link className='nav__button' style={{textDecoration:'none', color:'rgba(255,255,255,0.6)', fontWeight:100 , fontSize:'14px'}} to='/servicesus'>Services</Link>
            <Link className='nav__button' style={{textDecoration:'none', color:'rgba(255,255,255,0.6)', fontWeight:100 , fontSize:'14px'}} to='/blog'>Blog</Link>
         </div>
         <div className='contact__us__button'>
             <Link style={{textDecoration:'none', color:'white', fontWeight:100 , fontSize:'17px'}} to='/contactus' > Contact us</Link>
         </div>
         
      </nav>
         <nav className='responsive__nav'>
              <div>
              <Link style={{textDecoration:'none', color:'white', fontWeight:500 , fontSize:'25px' ,fontFamily:'Playfair Display", sans-serif'}} to='/'>Passport</Link>
              </div>
              <div onClick={isOpen}    className='hamburger'>
                <RxHamburgerMenu/>
              </div>
             
         </nav>
         <div style={{ position : "absoute", right : active ? "0px" : "-200px"}} className=' navigation__slider'>
               
               <div onClick={isClose} className="cross">
               <AiOutlineClose/>
               </div>
            <Link className='nav__button' style={{textDecoration:'none', color:'black', fontWeight:100 , fontSize:'14px'}} to='/'>Home</Link>
            <Link className='nav__button' style={{textDecoration:'none', color:'black', fontWeight:100 , fontSize:'14px'}} to='/aboutus'>About us</Link>
            <Link className='nav__button' style={{textDecoration:'none', color:'black', fontWeight:100 , fontSize:'14px'}} to='/'>Dropdown</Link>
            <Link className='nav__button' style={{textDecoration:'none', color:'black', fontWeight:100 , fontSize:'14px'}} to='/servicesus'>Services</Link>
            <Link className='nav__button' style={{textDecoration:'none', color:'black', fontWeight:100 , fontSize:'14px'}} to='/blog'>Blog</Link>   
         </div>
      <div className='location'>
        <div>
            <MdLocationOn/>
        </div> 
        <p>Vernazza, Italy — $500.00 / night</p>
      </div>
    </div>
  )
}

export default HeroSection;