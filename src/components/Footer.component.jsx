import React from 'react';
import './Footer.css';
import { HiHeart } from "react-icons/hi";
import { FaInstagram , FaLinkedinIn , FaFacebookF ,FaTwitter ,FaPinterest } from "react-icons/fa";
const Footer = () => {
  return (
    
    <div className="footer">
      <div className='footer__section__1'>
          <div style={{width:'30%'}}>
            
            <h4>About passport</h4>
            <p>Far far away, behind the word mountains, 
              far from the countries Vokalia and Consonantia, there 
              live the blind texts.
            </p>
            
            <h4 style={{marginTop:'30px'}}>Connect</h4>
            <section className='connect'>

              <div>
                <FaInstagram/>
              </div>
              <div>
                <FaTwitter/>
              </div>
              <div>
                <FaFacebookF/>
              </div>
              <div>
               <FaLinkedinIn/>
              </div>
              <div>
               <FaPinterest/>
              </div>
            </section>
          </div>
          <div>
            <h4>Links</h4>
            <a href="">About us</a>
            <a href="">Services</a>
            <a href="">News</a>
            <a href="">Careers</a>
            <a href="">Contact</a>
          </div>
          <div>
          <h4>Company</h4>
            <a href="">About us</a>
            <a href="">Services</a>
            <a href="">News</a>
            <a href="">Careers</a>
            <a href="">Contact</a>
          </div>
          <div>
          <h4>Contact</h4>
               <p>43 Raymouth Rd. Baltemoer, London 3910</p>
               <p>+1(123)-456-7890</p>
               <p>+1(123)-456-7890</p>
               <p>info@mydomain.com</p>
          </div>
        </div>   
        <div className='footer__section__2'>
        Copyright ©2023 All rights reserved | This template is made with <HiHeart style={{padding:'5px',color:'#dc3545'}}/>  by  <span style={{color:' #fc8621',padding:'5px'}}>Colorlib</span> 
          </div> 
    </div>
  )
}

export default Footer