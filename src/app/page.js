// import styles from './page.module.css'

import Link from 'next/link'

//home events contacts about spotify playlist

export default function Home() {
  return (

    <div className="background">
      <header>
        <h1 className="header-title" >DAVID</h1>
        <h2 className="sub-title">NATHAN ILE</h2>
      </header>


      <main id="main">

        <div className="info-box" id="home">
          <Link href={"/home"}>
            <h3> HOME </h3>
          </Link>
          <p>
            the amazing story of redeemption of one of africa top gospel, musicians
          </p>
        </div>

        <div className="info-box text-right" id="events">
          <Link href={"/events"}>
            <h3> EVENTS </h3>
          </Link>
          <p>
            the amazing story of redeemption of one of africa top gospel, musicians
          </p>
        </div>

        <div className="info-box" id="about">
          <Link href={"/about"}>
            <h3> ABOUT</h3>
          </Link>
          <p>
            the amazing story of redeemption of one of africa top gospel, musicians
          </p>
        </div>

        <div className="info-box text-right" id="contacts">
          <Link href={"/contacts"}>
            <h3> CONTACTS</h3>
          </Link>
          <p>
            the amazing story of redeemption of one of africa top gospel, musicians
          </p>
        </div>

        <div className="info-box text-right" id="playlist">
          <Link href={"/playlist"}>
            <h3> PLAYLIST </h3>
          </Link>
          <p>
            the amazing story of redeemption of one of africa top gospel, musicians
          </p>
        </div>

      </main>

    </div>
  )
}
