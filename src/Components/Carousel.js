import React, { useState, useEffect } from 'react';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const Carousel = () => {
  const images = [
    'https://images.unsplash.com/photo-1506501139174-099022df5260?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1351&q=80',
    'https://images.unsplash.com/photo-1523438097201-512ae7d59c44?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80',
    'https://images.unsplash.com/photo-1513026705753-bc3fffca8bf4?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80'
  ];

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
          <ChevronLeftIcon style={{ fontSize: '3rem', color: 'white' }} />
        </div>

        <div className="w-full overflow-hidden" style={{ height: '40vh' }}>
          <div className="flex h-full transition-transform ease-in-out duration-500" style={{ transform: `translateX(${-currentImage * 100}%)`, }}>
            {images.map((img, i) => (
              <div key={img} className="w-full flex-shrink-0">
                <img src={img} className="w-full" alt={`carousel-img-${i}`} />
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
