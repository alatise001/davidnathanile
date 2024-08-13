'use client'
import React from 'react';
// import styles from './page.module.css'
import { Questrial, Oswald, } from 'next/font/google'
import Image from 'next/image'


import { motion } from "framer-motion"
import splitString from '@/hooks/splitString';

const questrial = Questrial({
    subsets: ['latin'],
    weight: "400",
})

const oswald = Oswald({
    subsets: ['latin'],
    weight: "700",
})




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

const parentinview = {
    start: {
        opacity: 0,

        y: 2 % 2 === 0 ? 50 : -50
    },

    view: {
        opacity: 1,
        y: 0,
        transition: {
            delayChildren: 1.2,
            staggerChildren: 0.5,
        }
    }
}

const charaVariants = {
    hidden: { opacity: 0 },
    reveal: { opacity: 1, },
}


const Hero = () => {

    const text = "GIFTED AND ANNOINTED GOSPEL MINSTREL"

    const heroText = splitString(text)

    return (
        <div className='hero-group'>
            <div className='hero '>
                <div className='blur-bg'>
                    <div className='bg-text'>

                        <motion.h1
                            initial="hidden"
                            animate="reveal"

                            variants={{ reveal: { transition: { staggerChildren: .1 } } }}
                            className={`${oswald.className} hero-text`}
                        >
                            {heroText.map((char, i) => (
                                <motion.span key={i} initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{
                                        duration: 0.25,
                                        delay: i / 10,

                                    }} >
                                    {char}
                                </motion.span>
                            ))}
                        </motion.h1>


                        <motion.a
                            initial="start"
                            whileInView="view"

                            variants={inview}

                            viewport={{ once: true }}
                            href={`#`}>
                            <Image
                                src="/davidnathanlogo.webp"
                                alt='David Nathan Logo'
                                width={256}
                                height={128}
                                className='heroheaderIcon'
                            />
                        </motion.a>

                        <motion.h3
                            initial="start"
                            whileInView="view"

                            variants={inview}

                            viewport={{ once: true }}
                            className={`${questrial.className} stream-text`} >STREAM ONLINE

                        </motion.h3>

                        <motion.div
                            initial="start"
                            whileInView="view"

                            variants={inview}

                            viewport={{ once: true }}

                            className='icon-container'>

                            <motion.a

                                href="https://open.spotify.com/artist/1Vi7dzmkDVJyzxzmrADdhk?si=yLICBfX0Qfmd6LCxrPDjGw" target="_blank" rel="noopener noreferrer">
                                <div className='icon-bg'>
                                    <Image
                                        src="/Spotify.svg"
                                        alt='Spotify Logo'
                                        width={22}
                                        height={22}
                                        className='headerIcon'
                                    />
                                </div>
                            </motion.a>

                            <motion.a

                                href="https://music.youtube.com/channel/UCZPVBg5nQQ_eN18f-I1pyIA?si=dtAF7Io2eslc7GYW" target="_blank" rel="noopener noreferrer">
                                <div className='icon-bg'>
                                    <Image
                                        src="/YouTube.svg"
                                        alt='Youtube Logo'
                                        width={22}
                                        height={22}
                                        className='headerIcon'
                                    />
                                </div>
                            </motion.a>

                            <motion.a

                                href="https://on.soundcloud.com/BChSUQJKVcr5oczQ7" target="_blank" rel="noopener noreferrer">
                                <div className='icon-bg'>
                                    <Image
                                        src="/SoundCloud.svg"
                                        alt='SoundCloud Logo'
                                        width={22}
                                        height={22}
                                        className='headerIcon'
                                    />
                                </div>
                            </motion.a>
                            <motion.a

                                href="https://music.amazon.in/artists/B0BZQMXJ7S/david-nathan-ile?marketplaceId=A21TJRUUN4KGV&musicTerritory=IN&ref=dm_sh_zFUODaSFU57RRFy28BODHGOsn" target="_blank" rel="noopener noreferrer">
                                <div className='icon-bg'>
                                    <Image
                                        src="/Prime.svg"
                                        alt='Amazon Music Logo'
                                        width={22}
                                        height={22}
                                        className='headerIcon'
                                    />
                                </div>
                            </motion.a>

                            <motion.a

                                href="https://music.apple.com/us/artist/david-nathan-ile/1687804187" target="_blank" rel="noopener noreferrer">
                                <div className='icon-bg'>
                                    <Image
                                        src="/Apple.svg"
                                        alt='Apple Music Logo'
                                        width={22}
                                        height={22}
                                        className='headerIcon'
                                    />
                                </div>
                            </motion.a>

                            <motion.a

                                href="https://deezer.page.link/J316BWQM7roBabmm9" target="_blank" rel="noopener noreferrer">
                                <div className='icon-bg'>
                                    <Image
                                        src="/Deezer.svg"
                                        alt='Deezer Logo'
                                        width={22}
                                        height={22}
                                        className='headerIcon'
                                    />
                                </div>
                            </motion.a>
                        </motion.div>


                    </div>
                </div>

            </div>

            {/* <div className='backgroundImg1-div'>
          </div> */}
            {/* <div className='vid'> */}
            <video className='backgroundImg1-div' id="background-video" autoPlay loop muted>
                <source src="/vid1.webm" type="video/webm" />
            </video>
            {/* </div> */}
        </div>

    )
};
export default Hero;