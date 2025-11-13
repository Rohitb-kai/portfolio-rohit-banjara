import React from 'react'
import Home from '../Pages/Home'
import About from '../Pages/About'
import Skills from '../Pages/Skills'
import Projects from '../Pages/Projects'
import Achievements from '../Pages/Achievements'
import Contact from '../Pages/Contact'

const Homes = () => {
  return (
    <div>
        <Home/>
        <About/>
      <Skills/>
      <Projects/>
      <Achievements/>
      <Contact/>
    </div>
  )
}

export default Homes