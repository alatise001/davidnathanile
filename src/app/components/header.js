import React from 'react'
import Image from 'next/image'
import Nav from './nav'
import Link from 'next/link'


export default function Header() {
    return (
        <header className='header alignMargin' id='home'>
            <Link href={'/'}>
                {/* <a href="#home"> */}

                <Image
                    src="/davidnathanlogo.webp"
                    alt='David Nathan Logo'
                    width={140}
                    height={64}
                    className='headerIcon'
                />
                {/* </a> */}
            </Link>

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
