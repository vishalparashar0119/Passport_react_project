import React from 'react';
import './Customer.css';
import { Carousel } from 'antd';
// discloser from headless ui


// person images import
import person1 from '../images/person_1.jpg.webp'
import person2 from '../images/person_2.jpg.webp'
import person3 from '../images/person_3.jpg.webp'
import Collaps from './Collaps.component';

const Customer = () => {
    return (
        <div className='customer'>
            <div className='customer__main'>
                <div className='customer__main__div1'>
                    <h3 style={{ color: '#fc8621', fontWeight: '400' }}>HAPPY CUSTOMER</h3>
                    <h1>Testimonials</h1>
                    <Carousel style={{ marginTop: '40px' }} autoplay>
                        <div>
                            <div>
                                {/* image1 div */}
                                <img src={person1} alt="" />
                                <h3 style={{ color: '#fc8621', fontWeight: '400', margin: ' 10px 10px 0px' }}>John Doe</h3>
                                <p>CEO , Founder</p>
                            </div>
                            <div style={{ marginTop: '25px' }}>
                                {/* discription div */}
                                <p>
                                    "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
                                    there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean."
                                </p>
                            </div>
                        </div>
                        <div>
                            <div>
                                {/* image2 div */}
                                <img src={person2} alt="" />
                                <h3 style={{ color: '#fc8621', fontWeight: '400', margin: ' 10px  0px' }}>James Woodland</h3>
                                <p>CEO , Founder</p>
                            </div>
                            <div style={{ marginTop: '25px' }}>
                                {/* discription div */}
                                <p>
                                    “When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of her own road, the Line Lane. Pityful a rethoric question ran over her cheek, then she continued her way.”
                                </p>
                            </div>
                        </div>
                        <div>
                            <div>
                                {/* image3 div */}
                                <img src={person3} alt="" />
                                <h3 style={{ color: '#fc8621', fontWeight: '400', margin: ' 10px 0px' }}>Rob Smith</h3>
                                <p>Product Designer at Twitter</p>
                            </div>
                            <div style={{ marginTop: '25px' }}>
                                {/* discription div */}
                                <p>
                                    "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
                                    there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean."
                                </p>
                            </div>
                        </div>
                    </Carousel>
                </div>
                <div className='customer__main__div2'>
                    {/* faq section */}
                    <h3 style={{ color: '#fc8621', fontWeight: '400' }}>FAQ</h3>
                    <h1>Frequently Asked Questions</h1>

                    <div style={{ marginTop: '80px' }}>
                     <Collaps/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Customer;