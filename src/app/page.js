// import styles from './page.module.css'
import { Questrial } from 'next/font/google'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight, faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import Link from 'next/link'
import Image from 'next/image'
import { faFacebook, faInstagram, faXTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';

import Subtitle from './component/subtitle';
import SocialMedia from './component/socialMedia';
import Form from './component/form';
import Slider from './component/slider';
import Event from './component/event';
import Gallery from './component/gallery';
import { motion } from "framer-motion"

const questrial = Questrial({
  subsets: ['latin'],
  weight: "400",
})
import Merch from './component/merch';
import GalleryLarger from './component/galleryLarger';



//home events contacts about spotify playlist

export default function Home() {

  // const Calendar = dynamic(() => import('../components/Calendar'), { ssr: false });

  return (

    <div className="background">

      <main className='main'>
        <div className='hero-group'>
          <div className='hero '>
            <div className='blur-bg'>
              <div className='bg-text'>

                <h1 className='hero-text'>
                  GIFTED AND ANNOINTED
                  GOSPEL MINSTREL
                </h1>
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

          <div className='backgroundImg1-div'>
          </div>
        </div>

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


        <div className='backgroundImg2-div ' id='about'>
        </div>

        <div className='about d-flex' >

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

        <div className='gallery d-flex' id='gallery'>

          <Subtitle title="GALLERY" />

          <GalleryLarger />

        </div>

        <div className='merch-shop d-flex' id='merch'>

          <Subtitle title="MERCHANDISE SHOP" />

          <Merch />

        </div>

        <div className='contact d-flex' id='newsLetter'>

          <Subtitle title="SUBSCRIBE AND GET THE LATEST NEWS" />

          <Form />

        </div>


      </main>

    </div>
  )
}
