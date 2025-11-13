import React, { useEffect, useState } from 'react'
import video2 from '../../assets/video2.mp4'
import video1 from '../../assets/video1.mp4'
import img from '../../assets/img.jpg'
import img1 from '../../assets/img1.jpg'
import img2 from '../../assets/img2.jpg'

const Video = () => {

    const mediaList = [
      {type:"video", src:video2},
      {type:"video", src:video1},
      {type:"image", src:img},
      {type:"image", src:img1},
      {type:"image", src:img2},
    ]

    const [index, setIndex] = useState(0);

    useEffect(()=>{
      const timer = setInterval(()=>{
        setIndex((prev) => (prev+1)% mediaList.length);
      },5000);
      return() => clearInterval(timer);
    },[mediaList.length]);

    const current = mediaList[index];

  return (
    <div className='relative h-full w-full overflow-hidden'>
      {current.type === 'video' ? (
        <video key ={index} src={current.src} autoPlay muted playsInline className='absolute inset-0 h-full w-full object-cover transition-opacity duration-900 opacity-100' ></video>):(
        <img key ={index} src={current.src}  autoPlay muted playsInline alt="slide" className='absolute inset-0 h-full w-full object-cover transition-opacity duration-900 opacity-100'  />
        )}
    </div>
  )
}

export default Video