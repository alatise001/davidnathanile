import React from 'react'
import Image from 'next/image'


export default function Header() {
    return (
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
    )
}
