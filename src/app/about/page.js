"use client"
import React from "react";

import { motion } from "framer-motion";
import Subtitle from "../components/subtitle";
import SocialMedia from "../components/socialMedia";

import { Questrial, Oswald } from 'next/font/google'

const questrial = Questrial({
    subsets: ['latin'],
    weight: "400",
})

const oswald = Oswald({
    subsets: ['latin'],
    weight: "700",
})

const inview = {
    start: {
        opacity: 0,

        y: 2 % 2 === 0 ? 50 : -50
    },

    view: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 1.5
        }
    }
}



export default function Components() {

    return (
        <div className='about-page d-flex' >
            <motion.div
                initial="start"
                whileInView="view"

                variants={inview}

                viewport={{ once: true }}

                className='backgroundImg2-div ' id='about'>
            </motion.div>

            <Subtitle title="ABOUT DAVID NATHAN ILE" />

            <motion.div
                initial="start"
                whileInView="view"

                variants={inview}

                viewport={{ once: true }}

                className='about-inner-div d-flex'>


                <motion.p
                    initial="hidden"
                    animate="reveal"
                    variants={{ reveal: { transition: { staggerChildren: .1 } } }}

                    className={`${questrial.className} about-pgh about-page-pgh`}
                >
                    {`
                        David Nathan Ile is a gifted and anointed minstrel, passionately dedicated to spreading
                    the gospel and God's love through the transformative power of music. Born with a
                    unique ministry, his musical endeavors are characterized by the tangible presence of
                    God, leaving a lasting impact on those who experience his grace-filled ministrations.
                    With a divine calling, David has been graced to release soul and Spirit stirring songs
                    that resonate with believers around the world. His discography includes powerful tracks
                    like "If No Be You," "Your Glory," "He Knows," "Sacrificial Love," "A Word," and the
                    recent rendition of "Mary's Boy Child." These melodies are more than just musical
                    compositions; they are vessels of spiritual connection, leading to numerous testimonies
                    of transformed lives, miraculous healings, and a profound call to go deeper with the
                    Holy Spirit.
                    David Nathan Ile's ministry extends beyond geographical boundaries as he has graced
                    numerous platforms globally with his anointed ministrations. His music acts as a conduit
                    for divine encounters, drawing people into a closer relationship with God. His presence
                    on stage is a reflection of the grace that accompanies his ministry, making each worship
                    experience a powerful and unforgettable encounter with God.
                    Beyond his musical calling, David is happily married to Dr. Adepero Nathan. Together,
                    they form a dynamic duo committed to raising a generation of young men and women
                    who are fervently on fire for God and deeply passionate about the Holy Spirit. Their
                    partnership extends beyond the personal realm into a shared mission of nurturing and
                    guiding the next generation into a profound understanding of God's love and the
                    transformative power of His Spirit.
                    In the hands of David Nathan Ile, music becomes a sacred instrument for spiritual
                    elevation, a medium through which the message of God's love is not only heard but felt.
                    His life and ministry stand as a testament to the incredible impact that can be achieved
                 `}
                </motion.p>
            </motion.div>

            <SocialMedia />
        </div>
    );
}
