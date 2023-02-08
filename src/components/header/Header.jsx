import React from 'react'
import { Link } from 'react-router-dom'
import './header.css'
import CTA from './CTA'
import profile from '../../assets/profile.jpg'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
        <div className="container header__container">
          <h5>Hello I'm</h5>
          <h1>Janm Arch Rubio</h1>
          <h5 className="text-light">Fullstack Developer</h5>
          <CTA />
          <HeaderSocials />
        <div className='me'>
            <img src={profile} alt='me' className='images' style={{height: "19rem"}}/>
        </div>

        <a  href='#contact' className='scroll__down'>Scroll Down</a>
        </div>
    </header>
  )
}

export default Header