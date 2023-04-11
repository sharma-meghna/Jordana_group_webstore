import React from 'react'
import notice from '../../assets/images/top-view-arrangement-with-beauty-bag-copy-space.jpg'
import './comingSoon.css';


const ComingSoon = () => {
  return (
    <div classname='ComingSoon'>
        <div className='text'>Coming Soon...</div>
        <div className='ComingSoon'><img src={notice} alt="coming_soon" /></div>
    </div>
  )
}

export default ComingSoon