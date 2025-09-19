import React from 'react'
import '../Home/Home.css'
import Navbar from '../../components/Navbar/Navbar'
import hero_banner from '../../assets/images/hero_banner.jpg'
import hero_title from '../../assets/images/hero_title.png'

export default function Home() {
  return (
    <div className='home'>
      <Navbar />
      <div className="hero">
        <img src={hero_banner} alt="" className='banner-img'/>
        <div className="hero-caption">
          <img src={hero_title} alt="" className='caption-img' />
          <p> Discovering his ties to a secret ancient order, a young man living in modern to come  </p>
        </div>

      </div>
    </div>
  )
}
