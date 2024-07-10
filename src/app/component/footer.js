import React from 'react'
import { Questrial } from 'next/font/google'
import SocialMedia from './socialMedia';
import Nav from './nav';
import Image from 'next/image'

import { motion } from 'framer-motion';


const inview = {
    start: {
        opacity: 0,

        y: 2 % 2 === 0 ? 50 : -50
    },

    view: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 1.5
        }
    }
}

const questrial = Questrial({
    subsets: ['latin'],
    weight: "400",
})

export default function Footer() {
    return (

        <footer className='footer d-flex'>
            <div className='footer-blur'>
                <div className='footer-inner-1'>


                    <motion.div
                        initial="start"
                        whileInView="view"

                        variants={inview}

                        viewport={{ once: true }}

                        className='subtitle-div'>
                        <motion.h2
                            initial="start"
                            whileInView="view"

                            variants={inview}

                            viewport={{ once: true }}

                            className='subtitle-header'>CONTATCTS</motion.h2>
                        <motion.div
                            initial="start"
                            whileInView="view"

                            variants={inview}

                            viewport={{ once: true }}

                            className='underline underline-footer'></motion.div>
                    </motion.div>


                    <motion.div
                        initial="start"
                        whileInView="view"

                        variants={inview}

                        viewport={{ once: true }}

                        className={`${questrial.className} footer-contact-info d-flex`}>
                        <motion.p
                            initial="start"
                            whileInView="view"

                            variants={inview}

                            viewport={{ once: true }}

                        >+234 817 037 3208</motion.p>

                        <motion.p
                            initial="start"
                            whileInView="view"

                            variants={inview}

                            viewport={{ once: true }}

                        >davidnathanilemusic@gmail.com</motion.p>

                        <motion.p
                            initial="start"
                            whileInView="view"

                            variants={inview}

                            viewport={{ once: true }}

                        >If you are planning to meet, it’s great to call ahead for an appointment. </motion.p>
                    </motion.div>

                    <SocialMedia />

                    <motion.a
                        initial="start"
                        whileInView="view"

                        variants={inview}

                        viewport={{ once: true }}

                        href="#home">
                        <Image
                            src="/davidnathanlogo.png"
                            alt='David Nathan Logo'
                            width={128}
                            height={64}
                            className='footerIcon'
                        />
                    </motion.a>
                </div>


                <Nav />
            </div>
        </footer>
    )
}
