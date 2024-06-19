import React from 'react'
import { Questrial } from 'next/font/google'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faXTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import SocialMedia from './socialMedia';

import Image from 'next/image'

const questrial = Questrial({
    subsets: ['latin'],
    weight: "400",
})

export default function Footer() {
    return (

        <footer className='footer'>
            <div className='footer-blur'>

                <div className='subtitle-div'>
                    <h2 className='subtitle-header'>CONTATCTS</h2>
                    <div className='underline underline-footer'></div>
                </div>


                <div className={`${questrial.className} footer-contact-info d-flex`}>
                    <p>+234 817 037 3208</p>

                    <p>davidnathanilemusic@gmail.com</p>

                    <p>If you are planning to meet, it’s great to call ahead for an appointment. </p>
                </div>
                <SocialMedia />

                <a href="#home">
                    <Image
                        src="/davidnathanlogo.png"
                        alt='David Nathan Logo'
                        width={128}
                        height={64}
                        className='footerIcon'
                    />
                </a>

                <nav>
                    <ul className={`${questrial.className} d-flex`} >
                        <li><a href="#music">Music</a></li>
                        <li><a href="#event">Events</a></li>
                        <li><a href="#gallery">Gallery</a></li>
                        <li><a href="#merch">Merch</a></li>
                        <li><a href="#newsLetter">News Letter</a></li>
                    </ul>
                </nav>

            </div>
        </footer>
    )
}
