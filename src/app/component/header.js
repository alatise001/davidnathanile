import React from 'react'
import Image from 'next/image'
import Nav from './nav'


export default function Header() {
    return (
        <header className='header alignMargin' id='home'>
            <a href="#home">

                <Image
                    src="/davidnathanlogo.png"
                    alt='David Nathan Logo'
                    width={128}
                    height={64}
                    className='headerIcon'
                />
            </a>

            <div className='nav-header-div'>
                <Nav />
            </div>

            <Image
                src="/Hambuger.png"
                alt='Hambuger'
                width={32}
                height={32}
                className='hambuger'
            />
        </header>
    )
}
