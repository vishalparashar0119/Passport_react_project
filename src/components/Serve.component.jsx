import React, { useRef } from 'react'
import './Serve.css'
import { Carousel } from 'antd';
import { FaAngleRight ,FaAngleLeft } from "react-icons/fa6";

// images 
import image1 from '../images/about_1.jpg.webp';
import image2 from '../images/about_2.jpg.webp';
import image3 from '../images/about_3.jpg.webp';
import image4 from '../images/about_4.jpg.webp';

const Serve = () => {
   const ref = useRef();
  return (
    <div>
      <div className="aboutus__component__2">
      
    <div className='aboutus__component__2__div1'>
      
      <div style={{width:'40%'}}>
      <div>
      <h3 style={{color:'#fc8621',fontWeight:'400'}}>WHAT WE SERVE</h3>
      <h1>We Provide Top Destinations</h1>
      <p>
      Far far away, behind the word mountains, far from the 
      countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the 
      coast of the Semantics, a large language ocean.
      </p>
      </div>
      </div>
      <div>
          <button onClick={()=>{
            ref.current.prev();
          }}><FaAngleLeft/></button>

          <button onClick={()=>{
            ref.current.next();
          }}><FaAngleRight/></button>
      </div>
      

    </div>
    <div className="aboutus__crousel">
        <Carousel autoplay   slidesToShow={3} ref={ref}>
             <div className = 'carousal__div'>
                <img style={{width:'350px',height:'450px'}} src={image1}  alt="maldevs" />
                <h3 > Enjoy the beauty of Maldives</h3>
                <p>Maldives, Repbulic Maldives</p>
                <div className='white'>
                  <p>$430</p>
                </div>
             </div>
             <div className = 'carousal__div'>
                <img style={{width:'350px',height:'450px'}} src={image2}  alt="maldevs" />
                <h3 > Enjoy the beauty of Maldives</h3>
                <p>Maldives, Repbulic Maldives</p>
                <div className='white'>

                <p>$560</p>
                </div>
             </div>
             <div className = 'carousal__div'>
                <img style={{width:'350px',height:'450px'}} src={image3}  alt="maldevs" />
                <h3 > Enjoy the beauty of Maldives</h3>
                <p>Maldives, Repbulic Maldives</p>
                <div className='white'>
                <p>$490</p>
                </div>
             </div>
             <div className = 'carousal__div'>
                <img style={{width:'350px',height:'450px'}} src={image4}  alt="maldevs" />
                <h3 > Enjoy the beauty of Maldives</h3>
                <p>Maldives, Repbulic Maldives</p>
                <div className='white'>
                <p>$490</p>
                </div>
             </div>
        </Carousel>
        
    </div>
</div></div>
  )
}

export default Serve;