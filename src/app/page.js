'use client'
import React from 'react';
// import styles from './page.module.css'
import { Coming_Soon, Questrial } from 'next/font/google'
import Link from 'next/link'
import Image from 'next/image'

import Subtitle from './component/subtitle';
import SocialMedia from './component/socialMedia';
import Form from './component/form';
import Slider from './component/slider';
import Event from './component/event';
import { motion, useScroll, useTransform } from "framer-motion"
import splitString from '@/hooks/splitString';

const questrial = Questrial({
  subsets: ['latin'],
  weight: "400",
})
import Merch from './component/merch';
import GalleryLarger from './component/galleryLarger';
import Loading from './component/loading';
import Gallery from './component/gallery';
import ComingSoon from './component/comingSoon';



//home events contacts about spotify playlist

const charaVariants = {
  hidden: { opacity: 0 },
  reveal: { opacity: 1 },
}

export default function Home() {
  const text = "GIFTED AND ANNOINTED GOSPEL MINSTREL"

  const targetRef = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [-0.01, 1.32], ["1%", "-100%"]);
  // const x = useTransform(scrollYProgress, [-0.02, 1.35], ["1%", "-100%"]);
  const heroText = splitString(text)

  return (

    <div className="background">

      {/* <Loading /> */}

      <main className='main'>
        <div className='hero-group'>
          <div className='hero '>
            <div className='blur-bg'>
              <div className='bg-text'>

                <motion.h1
                  initial="hidden"
                  animate="reveal"
                  variants={{ reveal: { transition: { staggerChildren: .1 } } }}

                  className='hero-text'
                >
                  {heroText.map(char => (
                    <motion.span key={char} transition={{ duration: .7 }} variants={charaVariants}>
                      {char}
                    </motion.span>
                  ))}
                </motion.h1>


                <Link href={`#`}>
                  <Image
                    src="/davidnathanlogo.png"
                    alt='David Nathan Logo'
                    width={256}
                    height={128}
                    className='headerIcon'
                  />
                </Link>

                <h3 className={`${questrial.className} stream-text`} >STREAM ONLINE</h3>

                <div className='icon-container'>
                  <a href="https://open.spotify.com/artist/1Vi7dzmkDVJyzxzmrADdhk?si=yLICBfX0Qfmd6LCxrPDjGw" target="_blank" rel="noopener noreferrer">
                    <div className='icon-bg'>
                      <Image
                        src="/Spotify.svg"
                        alt='Spotify Logo'
                        width={22}
                        height={22}
                        className='headerIcon'
                      />
                    </div>
                  </a>

                  <a href="https://music.youtube.com/channel/UCZPVBg5nQQ_eN18f-I1pyIA?si=dtAF7Io2eslc7GYW" target="_blank" rel="noopener noreferrer">
                    <div className='icon-bg'>
                      <Image
                        src="/Youtube.svg"
                        alt='Youtube Logo'
                        width={22}
                        height={22}
                        className='headerIcon'
                      />
                    </div>
                  </a>

                  <a href="https://on.soundcloud.com/BChSUQJKVcr5oczQ7" target="_blank" rel="noopener noreferrer">
                    <div className='icon-bg'>
                      <Image
                        src="/SoundCloud.svg"
                        alt='SoundCloud Logo'
                        width={22}
                        height={22}
                        className='headerIcon'
                      />
                    </div>
                  </a>
                  <a href="https://music.amazon.in/artists/B0BZQMXJ7S/david-nathan-ile?marketplaceId=A21TJRUUN4KGV&musicTerritory=IN&ref=dm_sh_zFUODaSFU57RRFy28BODHGOsn" target="_blank" rel="noopener noreferrer">
                    <div className='icon-bg'>
                      <Image
                        src="/Prime.svg"
                        alt='Amazon Music Logo'
                        width={22}
                        height={22}
                        className='headerIcon'
                      />
                    </div>
                  </a>

                  <a href="https://music.apple.com/us/artist/david-nathan-ile/1687804187" target="_blank" rel="noopener noreferrer">
                    <div className='icon-bg'>
                      <Image
                        src="/Apple.svg"
                        alt='Apple Music Logo'
                        width={22}
                        height={22}
                        className='headerIcon'
                      />
                    </div>
                  </a>

                  <a href="https://deezer.page.link/J316BWQM7roBabmm9" target="_blank" rel="noopener noreferrer">
                    <div className='icon-bg'>
                      <Image
                        src="/Deezer.svg"
                        alt='Deezer Logo'
                        width={22}
                        height={22}
                        className='headerIcon'
                      />
                    </div>
                  </a>
                </div>


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



        <section ref={targetRef} className='horizontalScroll-section'>
          <div className='horizontalScroll'>
            <motion.div style={{ x }} className='horizontalScroll-inner' >



              <div className='music-player' id='music'>

                <Subtitle title="Listen to my songs" />

                <Slider imgScr="/musicplayer.png" />

                <h3 className={`${questrial.className} music-title`}>Holy Spirit</h3>

                <button className={`${questrial.className} listen-now-btn`}>Listen now</button>
              </div>

              <div className='upcoming-events' id='event'>

                <h4></h4>
                <div className='blur-bg-calender d-flex' >

                  <Subtitle title="Upcoming events" />

                  <Event />
                  {/* <Calendar /> */}

                  <button className={`${questrial.className} previous-event-btn`}>See Previous Events</button>

                </div>

              </div>


              <div className='about d-flex' >
                <div className='backgroundImg2-div ' id='about'>
                </div>

                <Subtitle title="ABOUT DAVID NATHAN ILE" />

                <div className='about-inner-div d-flex'>


                  <p className={`${questrial.className} about-pgh`}>
                    David Nathan Ile is a gifted and anointed minstrel, passionately dedicated to
                    spreading the gospel and Gods love through the transformative power of music.
                    Born with a unique ministry, his musical endeavors are characterized
                    by the tangible presence of God, leaving a lasting impact on those who
                    experience his grace-filled ministrations.
                  </p>
                </div>

                <button className='read-more-btn'>Read More</button>

                <SocialMedia />
              </div>

              <div className='vidoes d-flex' id='videos'>

                <Subtitle title="LATEST VIDEOs" />

                <iframe
                  className='youtubeplayer'
                  // width="560"
                  // height="315"
                  src="https://www.youtube.com/embed/videoseries?si=lbF_F07JVvO-a0Rt&amp;list=PLw4I5sD161bB7D7Lu0OHzm508jDQxHAIL"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen>
                </iframe>

                <button className={`${questrial.className} previous-event-btn`}>
                  <a href="https://youtube.com/@davidnathanile6992?si=O7psG-8kV2zvTN24" target="_blank" rel="noopener noreferrer">
                    See more from Youtube
                  </a>
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        <div className='gallery d-flex' id='gallery'>

          <Subtitle title="GALLERY" />

          <Gallery />
          {/* <GalleryLarger /> */}

        </div>

        <div className='merch-shop d-flex' id='merch'>

          <Subtitle title="MERCHANDISE SHOP" />

          {/* <Merch /> */}
          <ComingSoon />

        </div>

        <div className='contact d-flex' id='newsLetter'>

          <Subtitle title="SUBSCRIBE AND GET THE LATEST NEWS" />

          <Form />

        </div>


      </main>

    </div>
  )
}
