import React from 'react'
import DefaultLayoutHoc from '../layout/Default.layout';
import './SinglePageBlog.css';
const SinglePageBlog = () => {
    return (
        <div>
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
            </div>

            <div></div>
        </div>
    )
}

export default DefaultLayoutHoc(SinglePageBlog);