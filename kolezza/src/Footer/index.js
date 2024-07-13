import './index.css';
import React from 'react';
import {CiMail} from 'react-icons/ci';
import {FaPhoneAlt, FaCopyright} from 'react-icons/fa';
import { MdLocationOn} from 'react-icons/md';
import kolezza from '../Images/kolezalogo.svg';

function Footer(){
    return (
        // <div>
        <footer>
               <div className="footer-container"> 

               <img src={kolezza} alt="kolezalogo" className='logo'/>                       
           

            <div className="footer-content">
            <div className='getintouch'>
                <h3 className='headings'>Get In Touch</h3>
                <li><CiMail/> Kolezza@gmail.com</li>
                <li><FaPhoneAlt/> +254 12345677</li>              
            </div>

            <div className='features'>
                <h3 className='headings'>Features</h3>
                <li>Videos</li>
                <li>Blog</li>
                <li>Podcast</li>
                <li>Resume Portfolios</li>
            </div>

            <div className='location'>
                <h3 className='headings'>Location</h3>
                <li><MdLocationOn />Karen Hardy</li>
             </div>
        </div>
        

        <div className='copyrightcontainer'>
            <hr></hr>           
            <p className='copyrighttext'><FaCopyright/> Copyright 2020 Brand- All Rights Reserved</p>
        </div>
        </div>       

        </footer>
        // </div>       
    
    )
}

export default Footer;
        