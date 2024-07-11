import React from 'react'
import { Questrial } from 'next/font/google'
import { motion, AnimatePresence } from 'framer-motion'


const questrial = Questrial({
    subsets: ['latin'],
    weight: "400",
})

const inview = {
    start: {
        opacity: 0,

        y: 2 % 2 === 0 ? 50 : -50
    },

    exit: {
        opacity: 0,
        y: 1 % 2 === 0 ? 50 : -50,
        transition: {
            duration: 1.5
        }

    },

    view: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 1.5
        }
    }
}

export default function Nav() {


    return (
        <>
            <AnimatePresence>

                <motion.nav
                    initial="start"
                    whileInView="view"
                    exit="exit"

                    variants={inview}

                    viewport={{ once: true }}

                >
                    <motion.ul
                        initial="start"
                        whileInView="view"
                        exit="exit"

                        variants={inview}

                        viewport={{ once: true }}

                        className={`${questrial.className}  ul d-flex`} >
                        <li><a href="#music">Music</a></li>
                        <li><a href="#event">Events</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#videos">Videos</a></li>
                        <li><a href="#gallery">Gallery</a></li>
                        <li><a href="#merch">Merch</a></li>
                        <li><a href="#newsLetter">News Letter</a></li>
                    </motion.ul>
                </motion.nav>
            </AnimatePresence>

        </>
    )
}
