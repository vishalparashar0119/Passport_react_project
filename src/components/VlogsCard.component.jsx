import React, { useState } from 'react'
import './VlogsCard.css';
import { Link } from 'react-router-dom';

// images import 
import vlog1 from '../images/gal_1.jpg.webp';
import vlog2 from '../images/gal_2.jpg.webp';
import vlog3 from '../images/gal_3.jpg.webp';
import vlog4 from '../images/gal_4.jpg.webp';

const VlogsCard = (props) => {

    const [details] = useState([{
        key: 1,
        img:  vlog1 ,
        date: 'May 14,2020',
        heading: 'Far far away, behind the word mountains',
        descript: 'Vokalia and Consonantia, there live the blind texts. Separated they live.',
        link: '#',

    }, {
        key: 2,
        img:  vlog2 ,
        date: 'May 14,2020',
        heading: 'Far far away, behind the word mountains',
        descript: 'Vokalia and Consonantia, there live the blind texts. Separated they live.',
        link: '#',

    }, {
        key: 3,
        img:  vlog3 ,
        date: 'May 14,2020',
        heading: 'Far far away, behind the word mountains',
        descript: 'Vokalia and Consonantia, there live the blind texts. Separated they live.',
        link: '#',

    }, {
        key: 4,
        img:  vlog4 ,
        date: 'May 14,2020',
        heading: 'Far far away, behind the word mountains',
        descript: 'Vokalia and Consonantia, there live the blind texts. Separated they live.',
        link: '#',

    },]);
    const {ishidden} = props;
    return (
        <div className='vlogCard'>
            <h3  style={{ color: '#fc8621', fontWeight: '400', display: ishidden ? 'none' : 'block' }}>BLOG</h3>
            <h1 style={{display: ishidden ?'none':'block'}}>Recent Posts</h1>
            <div style={{display:'flex',gap:'40px'}}>
                {
                    details.map((each , index)=>(
                          <div className='card__div' key={index}>
                               <img key={each.id} src={each.img} alt="" />
                               <div>
                                {/* details section */}
                                 <p id='para'>{each.date}</p>
                                <Link to='/blog'> <h3 id='head'>{each.heading}</h3></Link>
                                 <p id='para2'>{each.descript}</p>

                                  <Link to='/blog'><a className='ancor' href={each.link}>Read More</a></Link>
                               </div>
                          </div>
                    ))
                }
            </div>
        </div>
    )
}

export default VlogsCard;