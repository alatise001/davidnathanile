// import styles from './page.module.css'
import { Questrial } from 'next/font/google'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronCircleLeft } from "@fortawesome/free-solid-svg-icons";
import { faChevronCircleRight } from "@fortawesome/free-solid-svg-icons";
import Link from 'next/link'
import Image from 'next/image'
// import { faChevronCircleRight } from '@fortawesome/free-solid-svg-icons';

const questrial = Questrial({
  subsets: ['latin'],
  weight: "400",
})


//home events contacts about spotify playlist

export default function Home() {
  return (

    <div className="background">

      <header className='header alignMargin'>
        <Image
          src="/davidnathanlogo.png"
          alt='David Nathan Logo'
          width={128}
          height={64}
          className='headerIcon'
        />

        <Image
          src="/Hambuger.png"
          alt='Hambuger'
          width={32}
          height={32}
          className='hambuger'
        />
      </header>

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
        <Image
          src="/DavidNathanImg2.jpg"
          alt='Deezer Logo'
          width={497}
          height={461}
          className='DavidNathanImg2'
        />

        <div className='music-player'>
          <h2>Listen to my songs</h2>

          <div>
            <FontAwesomeIcon className="icon" icon={faChevronCircleRight} />
            <FontAwesomeIcon className="icon" icon={faChevronCircleLeft} />

            <Image
              src="/DavidNathanImg2.jpg"
              alt='Deezer Logo'
              width={497}
              height={461}
              className='DavidNathanImg2'
            />

          </div>

        </div>


      </main>

    </div>
  )
}
