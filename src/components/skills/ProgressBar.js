import React from 'react'

const ProgressBar = ({skills, title, className}) => {
  return (
    <div className={className}>
      <h3>{title}</h3>
      <div className="years">
        <span>Experience time</span>
        <span>5 months</span>
        <span>10 mohths</span>
      </div>

      <div>
        {
          skills.map((item) => {
            let xpMonths = 0.9
            let progressBar = item.xp / xpMonths * 100 + '%'

            return (
              <div key={item.id} className="proSkillsList">
                <li>{item.value}</li>
                <div className="progressBar" style={{width: progressBar}}></div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default ProgressBar