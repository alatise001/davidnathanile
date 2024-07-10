'use client'
import React from 'react'
import Image from 'next/image'
import { Oswald } from 'next/font/google'
import { AnimatePresence, motion } from 'framer-motion'

const oswald = Oswald({
    subsets: ['latin'],
    weight: "700",
})

export default function Card({ img, imgScr, modal }) {

    const [showOverlay, setShowOverly] = React.useState(false)
    return (
        <>
            <motion.div
                onHoverStart={() => setShowOverly(true)}
                onHoverEnd={() => setShowOverly(false)}
                // onClick={(e) => { imgScr(img); modal }}
                className='card-div'>
                <AnimatePresence>
                    {showOverlay && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={(e) => { imgScr(img); modal() }}
                            className='card-inner-div'>

                            <div className='card-inner-div-1' />
                            <motion.h1
                                initial={{ y: 10 }}
                                animate={{ y: 0 }}
                                exit={{ y: 10 }}
                                className={`${oswald.className} card-h1`}
                            >
                                <span>View</span>
                            </motion.h1>
                        </motion.div>
                    )
                    }
                </AnimatePresence>

                < Image
                    src={img}
                    alt={img}
                    fill
                    style={{ objectFit: 'cover' }}
                // width={371}
                // height={195}
                // className='galleryimg'
                // onClick={}
                />
            </motion.div>
        </>


    )
}
