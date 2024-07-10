'use client'
import React from 'react';
// import styles from './page.module.css'
import { Questrial, Oswald } from 'next/font/google'

import Subtitle from './component/subtitle';
import SocialMedia from './component/socialMedia';
import Form from './component/form';
import Event from './component/event';
import { motion, useScroll, useTransform } from "framer-motion"
import splitString from '@/hooks/splitString';

const questrial = Questrial({
  subsets: ['latin'],
  weight: "400",
})

import Gallery from './component/gallery';
import ComingSoon from './component/comingSoon';
import Hero from './component/hero';


const oswald = Oswald({
  subsets: ['latin'],
  weight: "700",
})

const charaVariants = {
  hidden: { opacity: 0 },
  reveal: { opacity: 1 },
}

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

export default function Home() {
  const text = "David Nathan Ile is a gifted and anointed minstrel, passionately dedicated to spreading the gospel and Gods love through the transformative power of music. Born with a unique ministry, his musical endeavors are characterized by the tangible presence of God, leaving a lasting impact on those who experience his grace - filled ministrations."

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

        <Hero />

        <section ref={targetRef} className='horizontalScroll-section'>
          <div className='horizontalScroll'>
            <motion.div style={{ x }} className='horizontalScroll-inner' >



              <div className='music-player' id='music'>

                <Subtitle title="Listen to my songs" />

                <motion.iframe
                  initial="start"
                  whileInView="view"

                  variants={inview}

                  viewport={{ once: true }}

                  className='music-iframe' style={{ borderRadius: "2rem", backgroundColor: "transparent" }}
                  src="https://open.spotify.com/embed/artist/1Vi7dzmkDVJyzxzmrADdhk?utm_source=generator&theme=0"
                  width="70%" height="552" frameBorder="0"
                  allowfFullscreen=""
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy">
                </motion.iframe>


                <motion.a
                  initial="start"
                  whileInView="view"

                  variants={inview}

                  viewport={{ once: true }}

                  href="https://open.spotify.com/artist/1Vi7dzmkDVJyzxzmrADdhk?si=yLICBfX0Qfmd6LCxrPDjGw" target="_blank" rel="noopener noreferrer">
                  <button className={`${questrial.className} listen-now-btn`}>Listen now</button>
                </motion.a>
              </div>

              <div className='upcoming-events' id='event'>

                <div className='blur-bg-calender d-flex' >

                  <Subtitle title="Upcoming events" />

                  <Event />
                  {/* <Calendar /> */}

                  {/* <button className={`${questrial.className} previous-event-btn`}>See Previous Events</button> */}

                </div>

              </div>


              <div className='about d-flex' >
                <motion.div
                  initial="start"
                  whileInView="view"

                  variants={inview}

                  viewport={{ once: true }}

                  className='backgroundImg2-div ' id='about'>
                </motion.div>

                <Subtitle title="ABOUT DAVID NATHAN ILE" />

                <motion.div
                  initial="start"
                  whileInView="view"

                  variants={inview}

                  viewport={{ once: true }}

                  className='about-inner-div d-flex'>


                  <motion.p
                    initial="hidden"
                    animate="reveal"
                    variants={{ reveal: { transition: { staggerChildren: .1 } } }}

                    className={`${questrial.className} about-pgh`}
                  >
                    {heroText.map(char => (
                      <motion.span key={char} transition={{ duration: .7 }} variants={charaVariants}>
                        {char}
                      </motion.span>
                    ))}
                  </motion.p>
                </motion.div>

                <motion.button
                  initial="start"
                  whileInView="view"

                  variants={inview}

                  viewport={{ once: true }}
                  className={`${oswald.className} read-more-btn`}

                >Read More</motion.button>

                <SocialMedia />
              </div>

              <div className='vidoes d-flex' id='videos'>

                <Subtitle title="LATEST VIDEOs" />

                <motion.iframe
                  initial="start"
                  whileInView="view"

                  variants={inview}

                  viewport={{ once: true }}

                  className='youtubeplayer'
                  // width="560"
                  // height="315"
                  src="https://www.youtube.com/embed/videoseries?si=lbF_F07JVvO-a0Rt&amp;list=PLw4I5sD161bB7D7Lu0OHzm508jDQxHAIL"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen>
                </motion.iframe>

                <motion.button
                  initial="start"
                  whileInView="view"

                  variants={inview}

                  viewport={{ once: true }}

                  className={`${questrial.className} previous-event-btn`}>
                  <a href="https://youtube.com/@davidnathanile6992?si=O7psG-8kV2zvTN24" target="_blank" rel="noopener noreferrer">
                    See more from Youtube
                  </a>
                </motion.button>
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
