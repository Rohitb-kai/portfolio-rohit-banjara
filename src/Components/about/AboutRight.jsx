import React from 'react'
import nodejs from '../../assets/nodejs.png'
import react from '../../assets/react.png'
import powerbi from '../../assets/powerbi.png'
import EX from '../../assets/EX.png'
import mongodb from '../../assets/mongodb.svg'


const AboutRight = () => {
  return (
    <div className='hidden pb-5 sm:flex sm: flex-wrap sm:justify-center sm:items-center sm:mt-20 lg:mt-40 lg:m-10 sm:mb-10 '>
        <img src={nodejs} alt="" className='w-36 object-cover p-5 ml-15 ' />
        <img src={react} alt="" className='w-36 object-cover p-5 ml-15 ' />
        <img src={powerbi} alt="" className='w-36 object-cover p-5 ml-15 ' />
        <img src={EX} alt="" className='w-36 object-cover p-5 ml-15 ' />
        <img src={mongodb} alt="" className='w-36 object-cover p-5 ml-15 ' />
    </div>
  )
}

export default AboutRight