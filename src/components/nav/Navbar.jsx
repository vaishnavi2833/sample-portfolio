import React from 'react'
import {AiOutlineHome} from 'react-icons/ai'
import {BiUser} from 'react-icons/bi'
import {BiBook} from 'react-icons/bi'
import {BiMessageSquareDetail} from 'react-icons/bi'
import { useState } from 'react'
import './navbar.css'

const Navbar = () => {
  const [activeNav,setActiveNav]=useState('#')
  return (
    <nav>
      <a href='#' onClick={()=>setActiveNav('#')} className={activeNav==='#' ? 'active': ''}><AiOutlineHome/></a>
      <a href='#about' onClick={()=>setActiveNav('#about')} className={activeNav==='#about' ? 'active': ''} ><BiUser/></a>
      <a href='#projects' onClick={()=>setActiveNav('#projects')} className={activeNav==='#projects' ? 'active': ''}><BiBook/></a>
      <a href='#contact' onClick={()=>setActiveNav('#contact')} className={activeNav==='#contact' ? 'active': ''}><BiMessageSquareDetail/></a>
    </nav>
  )
}

export default Navbar