import React from 'react'
import { Questrial } from 'next/font/google'


const questrial = Questrial({
    subsets: ['latin'],
    weight: "400",
})

export default function Nav() {


    return (
        <>
            <nav>
                <ul className={`${questrial.className}  ul d-flex`} >
                    <li><a href="#music">Music</a></li>
                    <li><a href="#event">Events</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#videos">Videos</a></li>
                    <li><a href="#gallery">Gallery</a></li>
                    <li><a href="#merch">Merch</a></li>
                    <li><a href="#newsLetter">News Letter</a></li>
                </ul>
            </nav>
        </>
    )
}
