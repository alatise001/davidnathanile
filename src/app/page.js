// import styles from './page.module.css'
import { Questrial } from 'next/font/google'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight, faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import Link from 'next/link'
import Image from 'next/image'
import { faFacebook, faInstagram, faXTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';

import Subtitle from './component/Subtitle';
import Footer from './component/footer';
import Header from './component/header';
import SocialMedia from './component/socialMedia';
import Form from './component/form';
import Slider from './component/slider';

const questrial = Questrial({
  subsets: ['latin'],
  weight: "400",
})


//home events contacts about spotify playlist

export default function Home() {
  return (

    <div className="background">

      <main className='main'>
        <div className='hero'>
          <div className='blur-bg'>
            <div className='bg-text'>

              <h1 className='hero-text'>
                GIFTED AND ANNOINTED
                GOSPEL MINSTREL
              </h1>

              <Image
                src="/davidnathanlogo.png"
                alt='David Nathan Logo'
                width={256}
                height={128}
                className='headerIcon'
              />

              <h3 className={`${questrial.className} stream-text`} >STREAM ONLINE</h3>

              <div className='icon-container'>

                <div className='icon-bg'>
                  <Image
                    src="/Spotify.svg"
                    alt='Spotify Logo'
                    width={22}
                    height={22}
                    className='headerIcon'
                  />
                </div>

                <div className='icon-bg'>
                  <Image
                    src="/Youtube.svg"
                    alt='Youtube Logo'
                    width={22}
                    height={22}
                    className='headerIcon'
                  />
                </div>

                <div className='icon-bg'>
                  <Image
                    src="/SoundCloud.svg"
                    alt='SoundCloud Logo'
                    width={22}
                    height={22}
                    className='headerIcon'
                  />
                </div>

                <div className='icon-bg'>
                  <Image
                    src="/Prime.svg"
                    alt='Amazon Music Logo'
                    width={22}
                    height={22}
                    className='headerIcon'
                  />
                </div>

                <div className='icon-bg'>
                  <Image
                    src="/Apple.svg"
                    alt='Apple Music Logo'
                    width={22}
                    height={22}
                    className='headerIcon'
                  />
                </div>

                <div className='icon-bg'>
                  <Image
                    src="/Deezer.svg"
                    alt='Deezer Logo'
                    width={22}
                    height={22}
                    className='headerIcon'
                  />
                </div>
              </div>


            </div>
          </div>

        </div>

        <div className='backgroundImg1-div'>
        </div>

        <div className='music-player'>

          <Subtitle title="Listen to my songs" />

          <Slider imgScr="/musicplayer.png" />

          <h3 className={`${questrial.className} music-title`}>Holy Spirit</h3>

          <button className={`${questrial.className} listen-now-btn`}>Listen now</button>
        </div>
        <div className='upcoming-events'>

          <h4></h4>
          <div className='blur-bg-calender d-flex' >

            <Subtitle title="Upcoming events" />

            <div className='event d-flex'>

              <div className='date-div'>
                <div className='date'>22</div>
                <div className='date-in-words'>
                  <h4 className='day'>Saturday</h4>
                  <h4 className='month'>June 2024</h4>
                </div>
              </div>

              <div className='location-div d-flex'>
                <h2 className='location-header'>
                  CLOUD OF GLORY [ABEOKUTA]
                </h2>
                <p className={`${questrial.className} location-address-pgh`}><b>EB Music Studio</b>, No 3, Idowu Street Abeokuta</p>

                <h4 className='event-time'>
                  3PM
                </h4>
              </div>

              <button className='reserve-spot-btn'>RESERVE SPOT</button>
            </div>

            <button className={`${questrial.className} previous-event-btn`}>See Previous Events</button>

          </div>

        </div>


        <div className='backgroundImg2-div'>
        </div>

        <div className='about d-flex'>
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

        <div className='vidoes d-flex'>

          <Subtitle title="LATEST VIDEO" />

          <Slider imgScr="/videothumbnail.png" />

          <button className={`${questrial.className} previous-event-btn`}>See more from Youtube</button>
        </div>

        <div className='gallery d-flex'>

          <Subtitle title="GALLERY" />

          <p className={`${questrial.className} gallery-pgh`} >Photos from recent events</p>

          <div className='gallery-container'>
            <Image
              src="/galleryimg.jpg"
              alt='Deezer Logo'
              width={371}
              height={195}
              className='galleryimg'
            />

            <Image
              src="/galleryimg.jpg"
              alt='Deezer Logo'
              width={371}
              height={195}
              className='galleryimg'
            />

            <Image
              src="/galleryimg.jpg"
              alt='Deezer Logo'
              width={371}
              height={195}
              className='galleryimg'
            />

            <Image
              src="/galleryimg.jpg"
              alt='Deezer Logo'
              width={371}
              height={195}
              className='galleryimg'
            />

          </div>

        </div>

        <div className='contact d-flex'>

          <Subtitle title="SUBSCRIBE AND GET THE LATEST NEWS" />

          <Form />

        </div>

        <div className='merch-shop d-flex'>

          <Subtitle title="MERCHANDISE SHOP" />

          <Slider imgScr="/videothumbnail.png" />

          <h3 className='merch-title'>
            COG BRANDED HOODIE
          </h3>

          <h4 className={`${questrial.className} gallery-pgh read-more-btn merch-price`}>N20,200</h4>

          <button className='merch-btn'> BUY ITEM</button>
        </div>

      </main>

    </div>
  )
}