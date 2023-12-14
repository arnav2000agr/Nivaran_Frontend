import React from "react";
import { Carousel } from "@material-tailwind/react";
import image from '../Assets/Images/image 1.png'
 
export default function CarouselTransition() {
  return (
    <Carousel transition={{ duration: 2 }} className="flex flex-row rounded-xl " style={{marginTop:110}}>
      <img
        src={image}
        alt="image 1"
        className="h-full w-full object-cover"
      />
      <img
        src={image}
        alt="image 2"
        className="h-full w-full object-cover"
      />
      <img
        src={image}
        alt="image 3"
        className="h-full w-full object-cover"
      />
    </Carousel>
  );
}