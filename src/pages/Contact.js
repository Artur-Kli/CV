import React from 'react'
import Navigation from '../components/Navigation'
import { CopyToClipboard } from 'react-copy-to-clipboard'

const Contact = () => {
  return (
    <div className="contact">
      <Navigation />
      <div className="contactContent">
        <div className="header"></div>
        <div className="contactBox">
          <h1>Contact me</h1>
          <ul>
            <li>
              <i className="fas fa-map-marker-alt"></i>
              <span>Rio de Prujaneiro, Belarus</span>
            </li>
            <li>
              <i className="fas fa-mobile-alt"></i>
              <CopyToClipboard text="80298221355">
                <span 
                  className="clickInput" 
                  onClick={() => {alert("Сopy phone number !")}}
                >
                  8 029 822 13 55
                </span>
              </CopyToClipboard>
            </li>
            <li>
              <i className="far fa-envelope"></i>
              <CopyToClipboard text="arturklinfo@gmail.com">
                <span 
                  className="clickInput" 
                  onClick={() => {alert("Сopy E-mail !")}}
                >
                  arturklinfo@gmail.com
                </span>
              </CopyToClipboard>
            </li>
          </ul>
        </div>
        <div className="socialNetwork">
          <ul>
            <a href="https://www.linkedin.com/in/artur-klimashevich-159a501ba/" target="_blank" rel="noopener noreferrer">
              <h4>LinkedIn</h4>
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://github.com/Artur-Kli" target="_blank" rel="noopener noreferrer">
              <h4>Github</h4>
              <i className="fab fa-github"></i>
            </a>
            <a href="https://t.me/Arturo_Developer" target="_blank" rel="noopener noreferrer">
              <h4>Telegram</h4>
              <i className="fab fa-telegram"></i>
            </a>
            <a href="https://codepen.io/artur-kli" target="_blank" rel="noopener noreferrer">
              <h4>CodePen</h4>
              <i className="fab fa-codepen"></i>
            </a>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Contact