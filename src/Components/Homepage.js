import React from 'react'
import Header from './Header'
import Carousel from './Carousel'

function Homepage() {
  return (
    <>
    <div className='flex flex-col overflow-x-hidden'>
        <div className='z-50'>
          <Header/>
        </div>
        <div className=''>
          <Carousel/>
        </div>

        <div>
          
        </div>
    </div>   
    </>
  )
}

export default Homepage