import { Button } from '@mui/material'
import React, { useState } from 'react'
import './Carousel.css'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

function CarouselMarketing() {
    const images= [
        "https://i.postimg.cc/255r4v4m/gibson-dealer-banner.jpg",
        "https://i.postimg.cc/8cXC6H02/gc-md-hf-cyber-monday-coupn-12-01-19-v2.jpg",
        "https://i.postimg.cc/8C4fC1wn/bass-guitars.jpg" 
    ]
    const [selectedIndex, setSelectedIndex] = useState(0)
    const [selectedImage, setSelectedImage] = useState(images[0])
    
    const previous = () => {
        const condition = selectedIndex > 0
        const nextIndex = condition ? selectedIndex - 1 : images.length - 1
        setSelectedImage(images[nextIndex])
        setSelectedIndex(nextIndex)
    }

    const next = () => {
        const condition = selectedIndex < images.length - 1
        const nextIndex = condition ? selectedIndex + 1 : 0
        setSelectedImage(images[nextIndex])
        setSelectedIndex(nextIndex)
    }
    const interval = () => {
      setTimeout(() => {
        next()
      }, 7000);
    }
    interval()
  return (
    <div className='CarouselContainer'>
    {/* <Button onClick={previous}><ArrowBackIosNewIcon/></Button> */}
    <img src={selectedImage} alt="images-marketing" className='CarouselImg'/>
    {/* <Button onClick={next}><ArrowForwardIosIcon/></Button> */}
    </div>
  )
}

export default CarouselMarketing