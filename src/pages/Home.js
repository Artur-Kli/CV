import React from 'react'
import Navigation from '../components/Navigation'

const Home = () => {
  return (
    <div className="home">
      <Navigation />
      <div className="homeContent">
        <div className="content">
          <h1>Artur Klimashevich</h1>
          <h2>Developer Front-end</h2>
          <div className="word">
            <a href="./media/CV.pdf" taget="_blank">Download CV</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home