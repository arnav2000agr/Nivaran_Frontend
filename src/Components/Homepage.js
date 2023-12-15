import React, {useState} from 'react'
import Header from './Header'
import Carousel from './Carousel'
import NotificationsIcon from '@mui/icons-material/Notifications';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

function Homepage() {
  const [show1, setShow1] = useState(false);
  const toggleShow1 = () => setShow1(!show1);
  const [show2, setshow2] = useState(false);
  const toggleShow2 = () => setshow2(!show2);
  return (
    <>
      <div className='w-full flex flex-col overflow-x-hidden'>

        <div className='z-50'>
          <Header/>
        </div>

        <div className=''>
          <Carousel/>
        </div>

        <div className='w-screen m-5 p-8  text-neutral-600 flex flex-col md:flex-row justify-between'>
          <div className='w-full flex flex-col'> 

            <h1 className='text-lg font-bold'>What's New</h1>
             {/* first notification */}
            <div className='flex flex-row border-t-4 rounded-md border-blue-700 p-2 shadow-md bg-gray-200 mt-3'>
              <div className='flex justify-center items-center p-1'>
                <NotificationsIcon style={{ color:'brown' }}/>
              </div>
              <div className='flex flex-col justify-start items-start px-3'>
                <p className=''>The rating of the ministries has been updated and the reviews have been conveyed to the ministries.</p>
                <p className='text-start text-blue-500'> <a href="#"> Read More </a> </p>
              </div>
            </div>

            {/* second notification*/}
            <div className='flex flex-row border-t-4 rounded-md border-blue-700 p-2 shadow-md bg-gray-200 mt-3'>
              <div className='flex justify-center items-center p-1'>
                <NotificationsIcon style={{ color:'brown' }} />
              </div>
              <div className='flex flex-col justify-center items-start px-3'>
                <p className=''>The new update for the ML model will be rolling out before the winter solstice.</p>
                <p className='text-start text-blue-500'> <a href="#"> Read More </a> </p>
              </div>
            </div>

          </div>

          <div className='w-full flex flex-col text-neutral-600'>
            <div className="flex items-center flex-col">
            <h1 className='text-lg font-bold'> Frequently Asked Questions </h1>
              
              <div className='flex flex-row border-1 rounded-md border-slate-400 shadow-md bg-gray-200 m-2 p-2 overflow-hidden w-4/5' style={{ boxShadow: '0px 10px 10px rgba(0, 0, 0, 0.1)' }}>
                <div className='flex flex-col'>
                  <div className='text-md'> 
                    Lorem ipsum dolor sit amet rem ipsum dolor sit amet consectetur adipisicing elit. Prae Lorem ipsum dolor sit ametatem, omnis et minus dolorum in
                  </div>
                    {show1 && <div className='p-2 bg-gray-100 text-black border-t-2'> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel, natus quo placeat delectus corporis perspiciatis. this is drop down content</div>}
                  </div>
                <div className='flex justify-center items-center p-1 right-0 top-2'>
                  <button onClick={toggleShow1}> <ArrowDropDownIcon style={{ fontSize: '2rem' }}/> </button>
                </div>
              </div>

              <div className='flex flex-row border-1 rounded-md border-slate-400 shadow-md bg-gray-200 m-2 p-2 overflow-hidden w-4/5' style={{ boxShadow: '0px 10px 10px rgba(0, 0, 0, 0.1)' }}>
                <div className='flex flex-col'>
                  <div className='text-md'> 
                    Lorem ipsum dolor sit amet rem ipsum dolor sit amet consectetur adipisicing elit. Prae Lorem ipsum dolor sit ametatem, omnis et minus dolorum in
                  </div>
                    {show2 && <div className='p-2 bg-gray-100 text-black border-t-2'> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel, natus quo placeat delectus corporis perspiciatis. this is drop down content</div>}
                  </div>
                <div className='flex justify-center items-center p-1 right-0 top-2'>
                  <button onClick={toggleShow2}> <ArrowDropDownIcon style={{ fontSize: '2rem' }}/> </button>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>   
    </>
  )
}

export default Homepage