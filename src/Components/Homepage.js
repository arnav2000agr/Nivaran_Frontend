import React from 'react'
import Header from './Header'
import Carousel1 from './Carousel1'
import { useState } from 'react';

function Homepage() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
    <div className='flex flex-col'>
        <div><Header isOpen={isOpen} toggleMenu={() => setIsOpen(!isOpen)}/></div>
        <div><Carousel1/></div>
    </div>
        
    </>
  )
}

export default Homepage