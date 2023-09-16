import React from 'react'
import DefaultLayoutHoc from '../layout/Default.layout';
import './SinglePageBlog.css';
import firstImg from '../images/person_1.jpg.webp'
import secondImg from '../images/person_2.jpg.webp'
const SinglePageBlog = () => {
    return (
        <div style={{display:'flex'}}>
            <div className='section_1'>
                <p style={{fontSize:'22px',color:'rgba(0,0,0,0.8)',fontWeight:'300'}}>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                <p style={{fontSize:'14px',fontWeight:'300'}}>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                <p style={{fontSize:'14px',fontWeight:'300'}}>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar</p>
                <p style={{fontSize:'14px',fontWeight:'300'}}>The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli, but the Little Blind Text didn’t listen. She packed her seven versalia, put her initial into the belt and made herself on the way.</p>
                <p style={{fontSize:'14px',fontWeight:'300'}}>When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of her own road, the Line Lane. Pityful a rethoric question ran over her cheek, then she continued her way.</p>
                <p style={{fontSize:'14px',fontWeight:'300'}}>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                <p style={{fontSize:'14px',fontWeight:'300'}}>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.</p>
                <p style={{fontSize:'14px',fontWeight:'300'}}>The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli, but the Little Blind Text didn’t listen. She packed her seven versalia, put her initial into the belt and made herself on the way.</p>
                <p style={{fontSize:'14px',fontWeight:'300'}}>When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of her own road, the Line Lane. Pityful a rethoric question ran over her cheek, then she continued her way.</p>

                <p style={{fontWeight:'300' , marginTop:'30px',marginBottom:'60px'}}>Catogary : <span style={{color:'#fc8621'}}>Design</span>,<span style={{color:'#fc8621'}}>Design</span> Tags : <span style={{color:'#fc8621'}}>#html</span>,<span style={{color:'#fc8621'}}>#trends</span></p>
                <h1 style={{fontWeight:'300',color:'rgba(0,0,0,0.9)'}}> 6 Comments</h1>
                <div className='comments'>
                    <div className='comments__img'>
                       <img src={firstImg} alt="" />
                    </div>
                    <div className='comment__section'>
                         <h2 >Jean Doe</h2>
                         <h5 >JANUARY 9, 2018 AT 2:21PM</h5>
                         <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                         <button >Reply</button>
                    </div>
                </div>
                <div className='comments'>
                    <div className='comments__img'>
                       <img src={secondImg} alt="" />
                    </div>
                    <div className='comment__section'>
                         <h2 >Jacob Smith</h2>
                         <h5 >JANUARY 9, 2018 AT 2:21PMM</h5>
                         <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                         <button >Reply</button>
                    </div>
                </div>

                
            </div>

            <div className='section__2'>
                 <input type="text" placeholder='type a keyboard  hit enter'/>

                 <div className='section_2_sec1'>
                    <h4 style={{fontWeight:'400',fontSize:'20px'}}>Categories</h4>
                    <div>
                        <span className='spam1' >Creatives</span><span className='spam2'>(12)</span>
                    </div>
                    <div>
                        <span className='spam1' >News</span><span className='spam2'>(12)</span>
                    </div>
                    <div>
                        <span className='spam1' >Designs</span><span className='spam2'>(12)</span>
                    </div>
                    <div>
                        <span className='spam1' >HTML</span><span className='spam2'>(12)</span>
                    </div>
                    <div>
                        <span className='spam1' >Web Devlopment</span><span className='spam2'>(12)</span>
                    </div>
                 </div>

                 <div className='aurthor'>
                    <img src={firstImg} alt="" />
                    <h3>About The Author</h3>
                    <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.</p>
                     <button>Read More</button>
                 </div>
                 
            </div>
        </div>
    )
}

export default DefaultLayoutHoc(SinglePageBlog);