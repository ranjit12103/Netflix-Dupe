import React from 'react'
import '../Footer/Footer.css'
import youtube_icon from '../../assets/images/youtube_icon.png'
import twitter_icon from '../../assets/images/twitter_icon.png'
import instagram_icon from '../../assets/images/instagram_icon.png'
import facebook_icon from '../../assets/images/facebook_icon.png'

export default function Footer() {
  return (
    <div className='footer'>
      <div className="footer-icons">
        <img src={youtube_icon} alt="" />
        <img src={twitter_icon} alt="" />
        <img src={instagram_icon} alt="" />
        <img src={facebook_icon} alt="" />
      </div>
      <ul>
        <li>Audio Description</li>
        <li>Help centre</li>
        <li>Gift Cards</li>
        <li>Media Centre</li>
        <li>Investor Relation</li>
        <li>Jobs</li>
        <li>Terms of Use</li>
        <li>Privacy</li>
        <li>Legal Notice</li>
        <li>Cookie Performence</li>
        <li>Corporate Information</li>
        <li>Contact Us</li>
      </ul>
      <p className='copyright-text'></p>
    </div>
  )
}
