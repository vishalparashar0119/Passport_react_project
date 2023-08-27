import React from 'react'
import DefaultLayoutHoc from '../layout/Default.layout';
// import component

import VlogsCard from '../components/VlogsCard.component';
import './Blog.css'  


const Blog = () => {
  return (
    <div>
      <div className='blog' id='top'>
        <h1>Blog</h1>
        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
      </div>
      <VlogsCard ishidden = {true}/>
      <VlogsCard ishidden = {true}/>

      <div className="paging">
        <a  href="#top">1</a>
        <a href="#top">2</a>
        <a href="#top">3</a>
        <a href="#top">4</a>
        <a href="#top">5</a>
      </div>
    </div>
  )
}

export default DefaultLayoutHoc(Blog);