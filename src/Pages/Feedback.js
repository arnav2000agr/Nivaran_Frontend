import React from 'react'
import Navbar from '../Components/NavbarComponent'
import image1 from '../Assets/Images/feedback1.png';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';

const Feedback = () => {
  return (
    <div className='h-screen bg-gray-100'>
      <div> <Navbar/> </div>
      <div className='w-full flex flex-row justify-center items-center mt-10 '>
        <div className='w-3/4 flex flex-col justify-center items-center'>
          <div className='mb-10'><h1 className='font-semibold text-2xl text-gray-500'>We Value Your Feedback</h1></div>
          <div className= 'rounded-md w-3/4'> <input type="text" placeholder='Application Number' className='p-3 w-full border rounded-md border-gray-500 '/> </div>
          <div className= 'rounded-md w-3/4'>
              <select className='text-gray-500 border border-gray-500 rounded-md'>
                <option>Agriculture</option>
                <option>Transport</option>
                <option>Railways</option>
                <option>Home affairs</option>
              </select>
          </div>
          <div className= 'rounded-md w-3/4'> <textarea rows="6" className='w-full border border-gray-500 rounded-lg p-2' placeholder='Please write the feedback here...'></textarea> </div>
          <div className='w-3/4 flex justify-center p-3'>
            <p className='text-lg text-gray-600 mr-2'>Please rate the grievance resolution process: </p>
            <Stack spacing={1}>
              <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
            </Stack>
          </div>
          <div> <button className='flex justify-center content-center p-3 bg-blue-700 hover:bg-blue-800 rounded-lg text-white mt-2'>Submit</button> </div>
        </div>

        <div className='w-1/3 flex justify-center mr-10'> 
          <img src={image1} alt="" className=''/>
        </div>

      </div>
    </div>
  )
}

export default Feedback
