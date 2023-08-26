import React from 'react';
import { Collapse } from 'antd';
import './Collaps.css'


const h1 = `How to download and register?.`;
const h2 = `How to create your payPal account?`;
const h3 = `How to link your paypal and bank account?`;
const h4 = `We are better than others?`;
const text1 = `
Far far away, behind the word mountains, far from 
the countries Vokalia and Consonantia, there live the blind texts. 
Separated they live in Bookmarksgrove right at the coast of the 
Semantics, a large language ocean.
`;
const text2 =`A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.`;
const text3 = `When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of her own road, the Line Lane. Pityful a rethoric question ran over her cheek, then she continued her way.`;
const text4 = `When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of her own road, the Line Lane. Pityful a rethoric question ran over her cheek, then she continued her way.`;
const items = [
    {
        key: '1',
        label: <h3 style={{fontWeight:200}}>{h1}</h3>,
        children: <p style={{fontSize:'15px' ,fontWeight:'300'}}>{text1}</p>,
    },
    {
        key: '2',
        label: <h3 style={{fontWeight:200}}>{h2}</h3>,
        children: <p style={{fontSize:'15px' ,fontWeight:'300'}}>{text2}</p>,
    },
    {
        key: '3',
        label: <h3 style={{fontWeight:200}}>{h3}</h3>,
        children: <p style={{fontSize:'15px' ,fontWeight:'300'}}>{text3}</p>,
    },
    {
        key: '4',
        label: <h3 style={{fontWeight:200}}>{h4}</h3>,
        children: <p style={{fontSize:'15px' ,fontWeight:'300'}}>{text4}</p>,
    },
];
const Collaps = () => <Collapse accordion items={items} />;
export default Collaps;