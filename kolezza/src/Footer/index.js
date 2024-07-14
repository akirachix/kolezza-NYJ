import './index.css';
import React from 'react';
import kolezalogo from '../Images/kolezza.svg';
import { FaCopyright, FaFacebook, FaInstagram, FaLinkedin, FaPhoneAlt, FaYoutube} from 'react-icons/fa';
import { MdOutlineMail } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";


export function Footer(){
    return(
        <footer className='container'>

        
       <div className='footer-logo'>
        {/* <div> */}
        <img src={kolezalogo} alt='koleza logo' className='logo'/>
        {/* </div> */}

        <div className='logo-text'>
            {/* <h2 className='text'>Kolezza</h2> */}
            <p className='text'>Kolezza is a group of six people who came up</p>
            <p className='text'>with this platform to catch up and create content</p>
            <p className='text'>for their different lifestyles. Kolezza means light</p>
            <p className='text'>as they believe that at the end of the tunnel</p>
            <p className='text'>there is always light</p>
        </div>
         </div>

         <div className='footer-list'>
            <ul className='getintouch'>
                <h3 className='footer-headings'>Get In Touch</h3>
            <li><a href='Email'><MdOutlineMail className='icons' />kolezza@gmail.com</a></li>
            <li><a href='PhoneNumber'> <FaPhoneAlt className='phoneicons'/>  +25412345678</a></li>
            <li><a href='Location'> <IoLocationSharp className='locationicons' />  Karen, Hardy</a></li>
            <li><a href='Whatsapp'> <FaPhoneAlt className='phoneicons'/>      +25412345678</a></li>
            </ul>

            <ul className='features'>
                <h3 className='footer-headings'>Features</h3>
                <li><a href='Videos'>Videos</a></li>
                <li><a href='Blog'>Blog</a></li>
                <li><a href='Podcast'>Podcast</a></li>
                <li><a href='Resume'>Resume Portfolios</a></li>
            </ul>

            <ul className='socialmedia'>
                <h3 className='footer-headings'>Social Media</h3>
                <li><a href='Instagram'><FaInstagram className='mediaicons'/>   Instagram</a></li>
                <li><a href='Facebook'> <FaFacebook className='mediaicons'/>    Facebook</a></li>
                <li><a href='Youtube'> <FaYoutube className='mediaicons'/>      Youtube</a></li>
                <li><a href='LinkedIn'> <FaLinkedin  className='mediaicons'/>    LinkedIn</a></li>
            </ul>
            </div>

            <div>
               <p className='copyrightext'> <FaCopyright id='copyrighticon'/> Copyright 2020 Brand- All Rights Reserved</p>
            </div>

         </footer>
    )
}

export default Footer;