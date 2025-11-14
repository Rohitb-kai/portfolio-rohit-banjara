import React from 'react'
import Home from '../Pages/Home.jsx'
import About from '../Pages/About.jsx'
import Skills from '../Pages/Skills.jsx'
import Projects from '../Pages/Projects.jsx'
import Achievements from '../Pages/Achievements.jsx'
import Contact from '../Pages/Contact.jsx'

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