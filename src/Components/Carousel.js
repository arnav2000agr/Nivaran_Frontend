import React, { useState, useEffect } from 'react';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import carousel_Image1 from '../Assets/Images/carousel_img1carousel_1.png';
import carousel_Image2 from '../Assets/Images/Digital-India.jpg';
import carousel_Image3 from '../Assets/Images/key_sih.png';
import frame1 from '../Assets/Images/Frame2.png'
import frame2 from '../Assets/Images/Frame3.png'
import frame3 from '../Assets/Images/Frame4.png'

const Carousel = () => {
  const images = [ frame1, frame2, frame3, ];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, [images.length]);

  return (
    <div className='flex justify-center items-center'>
      <div className="pt-12 flex flex-row justify-center w-5/6 md:w-5/6 relative">

        <div className='absolute left-0 top-1/2 transform -translate-y-1/2 z-50'>
          <ChevronLeftIcon style={{ fontSize: '3rem', color: 'white' }}/>
        </div>





        <div className="w-full overflow-hidden" style={{ height: '40vh' }}>
          <div className="flex h-full transition-transform ease-in-out duration-500" style={{ transform: `translateX(${-currentImage * 100}%)` }}>
            {images.map((img, i) => (
            <div key={img} className="w-full flex-shrink-0">
              <img src={img} className="w-full object-top" alt={`carousel-img-${i}`} style={{ objectFit: 'cover' }}/>
            </div>
            ))}
          </div>
        </div>

        <div className='absolute right-0 top-1/2 transform -translate-y-1/2'>
          <ChevronRightIcon style={{ fontSize: '3rem', color: 'white' }} />
        </div>

      </div>
    </div>
  );
};

export default Carousel;
