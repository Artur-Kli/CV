import React from 'react'
import Navigation from '../components/Navigation'
import Experience from '../components/skills/Experience'
import Hobbies from '../components/skills/Hobbies'
import ProSkills from '../components/skills/ProSkills'
import OtherSkills from '../components/skills/OtherSkills'

const Skills = () => {
  return (
    <div className="skills">
      <Navigation />
      <div className="skillsContent">
        <ProSkills />
        <Experience />
        <OtherSkills />
        <Hobbies />
      </div>
    </div>
  )
}

export default Skills