import React from 'react'
import Navbar from '../Components/NavbarComponent'
import officialtemplate_image from '../Assets/Images/officialtemplate_image.png';

const OfficialTemplate = () => {
  return (
    <div className='h-screen'>
        <div className=''>
            <Navbar/>
        </div>

      <div className='pt-10 flex flex-row w-screen'>

        <div className='flex justify-center'> 
            <img src={officialtemplate_image} className='object-contain h-96 w-96'  alt="" />
        </div>

        <div className='h-full w-2/3 flex flex-col justify-center items-center'>

            <div className='w-full p-3 flex flex-row bg-teal-200  justify-around rounded-t-md'>
                <button className='text-white bg-teal-900 hover:bg-teal-950 p-3 mx-1 rounded-md'>
                    Raw Grieavance
                </button>

                <button className='text-white bg-teal-900  hover:bg-teal-9500 p-3 mx-1 rounded-md '>
                    Official Template
                </button>

                <div className='text-white bg-teal-900  hover:bg-teal-9500 p-3 mx-1 rounded-md'>
                    
                </div>
            </div>

            <div className='w-full bg-gray-100 text-gray-600 flex justify-center mb-2 p-4 rounded-b-md'>
            I am writing to bring to your attention a critical issue that has been affecting the sports enthusiasts. I am a resident of this area and have observed a lack of interest given to the youth having interest in sports which is not letting them grow in the field of sports. The existing sports facilities in our locality are insufficient to cater to the growing interest in various sports disciplines. The shortage of playgrounds, courts, and training facilities is discouraging aspiring athletes. The available sports facilities are poorly maintained, with damaged equipment, unkempt playing fields, and outdated infrastructure. There is an absence of qualified coaches and trainers, making it challenging for aspiring athletes to receive proper guidance and training in their respective sports. Lack of community engagement programs and sports events organized by the local authorities has led to a diminished sense of sportsmanship and community involvement.
            </div>

            <button>Language Select</button>

        </div>
      </div>
    </div>
  )
}

export default OfficialTemplate
