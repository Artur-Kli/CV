import React, { Component } from 'react'
import ProgressBar from './ProgressBar'

class ProSkills extends Component {
  state = {
    proSkills: [
      {id: 1, value: "Html / Css", xp: 0.9},
      {id: 2, value: "Javascript", xp: 0.8},
    ],
    frameworks: [
      {id: 1, value: "React", xp: 0.7},
      {id: 2, value: "Redux", xp: 0.5},
      {id: 3, value: "React Native", xp: 0.3},
      {id: 4, value: "Material UI", xp: 0.6},
      {id: 5, value: "Sass / Styled Components", xp: 0.3},
      {id: 6, value: "Vue", xp: 0.6},
    ]
  }

  render() {
    let {proSkills, frameworks} = this.state

    return (
      <div className="proSkillsFrameworks">
        <ProgressBar 
          className="proSkillsDisplay"
          skills={proSkills}
          title="Skills"
          />
        <ProgressBar 
          className="frameworksSDisplay"
          skills={frameworks}
          title="Frameworks & Libraries"
        />
      </div>
    )
  }
}

export default ProSkills