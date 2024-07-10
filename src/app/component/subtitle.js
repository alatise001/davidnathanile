import React from 'react'
import { motion } from "framer-motion"
import { Questrial, Oswald } from 'next/font/google'


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

function Subtitle({ title }) {
    return (
        <motion.div
            initial="start"
            whileInView="view"
            variants={{ veiw: { transition: { delayChildren: 1, staggerChildren: 1.2 } } }}
            viewport={{ once: true }}
            className={`${oswald.className} subtitle-div`}>
            <motion.h2
                initial="start"
                whileInView="view"

                variants={inview}

                viewport={{ once: true }}

                className='subtitle-header'>{title}
            </motion.h2>

            <motion.div
                initial="start"
                whileInView="view"

                variants={inview}

                viewport={{ once: true }}

                className='underline'>

            </motion.div>
        </motion.div>
    )
}

export default Subtitle