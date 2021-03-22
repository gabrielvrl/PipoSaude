import React from 'react'
import './Footer.css'

import { AiFillLinkedin, AiFillInstagram, AiFillFacebook, AiOutlineMedium } from 'react-icons/ai'

import logo from '../assets/logoPipo.svg'

function Footer(){
    return(
        <div className="footer-container">
            <div className="socials">
                <img src={logo} alt="Pipo Saúde" id="logo" />
                <div className="socials-icons">
                    <AiFillLinkedin style={{color: '#1743c9'}} />
                    <AiFillInstagram style={{color: '#1743c9'}} />
                    <AiFillFacebook style={{color: '#1743c9'}} />
                    <AiOutlineMedium style={{color: '#1743c9'}} />
                </div>
            </div>
        </div>
    )
}

export default Footer