'use client'
import React from 'react';
import { Questrial, Oswald } from 'next/font/google';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { faAngleRight, faAngleLeft, faQuestion } from "@fortawesome/free-solid-svg-icons";
import useProductsDataManager from '@/hooks/useProductsDataManager';

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



export default function ComingSoon({ imgScr }) {




    return (
        <motion.div
            initial="start"
            whileInView="view"

            variants={inview}

            viewport={{ once: true }}

            className='coming-soon'>

            <motion.div
                initial="start"
                whileInView="view"

                variants={inview}

                viewport={{ once: true }}

                className=' coming-soon-bg d-flex gap'>
                <FontAwesomeIcon className='comingIcon' icon={faQuestion} beatFade />
            </motion.div>

            <motion.h1
                initial="start"
                whileInView="view"

                variants={inview}

                viewport={{ once: true }}
                className={`${oswald.className} subtitle-header`}
            >
                Coming soon!!
            </motion.h1>
        </motion.div>

    )
}
