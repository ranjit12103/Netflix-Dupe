import React, { useEffect, useRef } from 'react'
import '../Navbar/Navbar.css'
import logo from '../../assets/images/logo.png'
import search from '../../assets/images/search_icon.svg'
import bell from '../../assets/images/bell_icon.svg'
import profile_img from '../../assets/images/profile_img.png'
import caret_icon from '../../assets/images/caret_icon.svg'
import { logout } from '../../firebase'


export default function Navbar() {

    const navRef = useRef();

    useEffect(()=>{
        window.addEventListener('scroll',()=>{
            if(window.scrollY >= 80){
                navRef.current.classList.add('nav-dark')
            }else{
                navRef.current.classList.remove('nav-dark')
            }
        })
    },[])

  return (
    <div ref={navRef} className='navbar'>
        <div className="navbar-left">
            <img src={logo} alt="" />
            <ul>
                <li>Home</li>
                <li>TV Shows</li>
                <li>Movies</li>
                <li>New & Popular</li>
                <li>My List</li>
                <li>Browse by Languages</li>
            </ul>
        </div>
        <div className="navbar-right">
            <img src={search} alt="" className='icons'/>
            <p>Children</p>
            <img src={bell} alt="" className='icons'/>
            <div className="navbar-profile">
                <img src={profile_img} alt="" className='profile'/>
                <img src={caret_icon} alt="" />
                <div className="dropdown">
                    <p onClick={()=>{logout()}}>Sign Out of Netflix</p>
                </div>
            </div>
        </div>
    </div>
  )
}
