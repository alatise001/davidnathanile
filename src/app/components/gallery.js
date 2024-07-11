'use client'
import React from 'react'
import Image from 'next/image'
import { Questrial, Oswald } from 'next/font/google'
import useProductsDataManager from '@/hooks/useProductsDataManager'
import Card from './card'
import useMeasure from 'react-use-measure'
import { animate, useMotionValue, motion } from 'framer-motion'

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

export default function Gallery() {
    const { isLoading, productLists, iserror } = useProductsDataManager()


    const FAST_DURATION = 25
    const SLOW_DURATION = 75

    const [duration, setDuration] = React.useState(FAST_DURATION)

    let [ref, { width }] = useMeasure();
    const xTranslation = useMotionValue(0)

    const [mustFinish, setMustFinish] = React.useState(false)
    const [rerender, setRerender] = React.useState(false)

    React.useEffect(() => {
        let controls
        let finalPosition = -width / 2 - 2

        if (mustFinish) {
            controls = animate(xTranslation, [xTranslation.get(), finalPosition], {
                ease: "linear",
                duration: duration * (1 - xTranslation.get() / finalPosition),
                onComplete: () => {
                    setMustFinish(false)
                    setRerender(!rerender)
                }
            })
        } else {
            controls = animate(xTranslation, [0, finalPosition], {
                ease: "linear",
                duration: duration,
                repeat: Infinity,
                repeatType: 'loop',
                repeatDelay: 0,
            })

        }


        return controls?.stop
    }, [xTranslation, width, duration, rerender])



    const [showModal, setShowModal] = React.useState(false)


    const [imgScr, setImgScr] = React.useState('')

    function setScr(scr) {
        console.log(scr);
        setImgScr(prev => prev = scr)

    }

    function showModalFunc() {
        setShowModal((prev) => !prev)

    }

    const styles = {
        display: showModal ? "block" : "none",
    };


    if (isLoading) {
        return (


            <div className="loading-div">
                {/* 
                <Image
                    src="/assets/loading.gif"
                    width="200"
                    height="200"
                    alt="loading"

                /> */}
            </div>
        )
    }

    return (
        <>
            <motion.p
                initial="start"
                whileInView="view"

                variants={inview}

                viewport={{ once: true }}

                className={`${questrial.className} gallery-pgh`} >Photos from recent events</motion.p>

            <motion.div className='gallery-container-new' ref={ref} style={{ x: xTranslation }}
                onHoverStart={() => { setMustFinish(true); setDuration(SLOW_DURATION); }}
                onHoverEnd={() => { setMustFinish(true); setDuration(FAST_DURATION) }}
            >
                {

                    [...productLists.gallery, ...productLists.gallery].map(map =>
                    (
                        <>
                            <Card img={map.img} imgScr={setScr} modal={showModalFunc} />
                        </>
                    )

                    )

                }

            </motion.div >


            <div id="myModal" className="modal" style={styles}>


                <span className="close" onClick={() => setShowModal(false)} >&times;</span>


                {/* <img class="modal-content" id="img01"> */}
                < Image
                    src={imgScr}
                    alt={imgScr}
                    fill
                    style={{ objectFit: 'cover' }}
                    // width={371}
                    // height={195}
                    className='modal-content'
                    id='img01'
                // onClick={() => { setShowModal(true) }}
                />

                <div id="caption" ></div>
            </div>
        </>

    )
}
