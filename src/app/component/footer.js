import React from 'react'
import { Questrial } from 'next/font/google'
import SocialMedia from './socialMedia';
import Nav from './nav';
import Image from 'next/image'


const questrial = Questrial({
    subsets: ['latin'],
    weight: "400",
})

export default function Footer() {
    return (

        <footer className='footer d-flex'>
            <div className='footer-blur'>
                <div className='footer-inner-1'>


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
                </div>


                <Nav />
            </div>
        </footer>
    )
}
