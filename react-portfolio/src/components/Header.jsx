import React from 'react'
import menu from '../assets/open_menu.svg';
const Header = () => {
  return (
    <header>
        <span>Neimo Hajji</span>
        <button className='menu-btn'>
            <img src ={menu} alt = "menu" />
        </button>
        <nav className="nav">
      <ul>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#Projects">Projects</a>
        </li>
        <li>
          <a href="#Contect">Contact</a>
        </li>
        <li>
          <a href="#Resume">Resume</a>
        </li>
      </ul>
    </nav>
  
    </header>
  )
}

export default Header
