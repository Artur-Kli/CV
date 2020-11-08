import React from 'react'

const Hobbies = () => {
  return (
    <div className="hobbies">
      <h3>Hobbies</h3>
      <ul>
        <li className="hobby">
          <i className="fab fa-autoprefixer"></i>
          <span>Auto tuning</span>
        </li>
        <li className="hobby">
          <i className="fas fa-route"></i>
          <span>Travelling</span>
        </li>
        <li className="hobby">
          <i className="fas fa-seedling"></i>
          <span>Permaculture</span>
        </li>
        <li className="hobby">
          <i className="fab fa-bitcoin"></i>
          <span>Crypto-monnaies</span>
        </li>
        <li className="hobby">
          <i className="fas fa-home"></i>
          <span>Frame construction</span>
        </li>  
      </ul>
    </div>
  )
}

export default Hobbies