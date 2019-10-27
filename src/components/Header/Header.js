import React from 'react'
import { Link } from 'react-router-dom'

import { ReactComponent as Logo } from '../../assets/4.4 crown.svg.svg'
import './Header.sass'

const Header = () => (
  <header className='header'>
    <Link className='logo-container' to="/">
      <Logo className='logo' />
    </Link>
    <nav className='options'>
      <Link to='/shop' className='option'>SHOP</Link>
      <Link to='/shop' className='option'>CONTACT</Link>
    </nav>
  </header>
)

export default Header