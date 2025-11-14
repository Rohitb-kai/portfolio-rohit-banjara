import React from 'react'
import Top from '../Components/Achievements/Top.jsx';
import Second from '../Components/Achievements/Second.jsx';
import Bottem from '../Components/Achievements/Bottem.jsx';

const Achievements = () => {
  return (
    <div className='mt-10 pt-20'>
      <Top/>
      <Second/>
      <Bottem/>
    </div>
  );
}

export default Achievements