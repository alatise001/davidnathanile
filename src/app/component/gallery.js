'use client'
import React from 'react'
import Image from 'next/image'
import { Questrial } from 'next/font/google'
import useProductsDataManager from '@/hooks/useProductsDataManager'
import Card from './card'
import useMeasure from 'react-use-measure'
import { animate, useMotionValue, motion } from 'framer-motion'

const questrial = Questrial({
    subsets: ['latin'],
    weight: "400",
})

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
            <p className={`${questrial.className} gallery-pgh`} >Photos from recent events</p>

            <motion.div className='gallery-container-new' ref={ref} style={{ x: xTranslation }}
                onHoverStart={() => { setMustFinish(true); setDuration(SLOW_DURATION); }}
                onHoverEnd={() => { setMustFinish(true); setDuration(FAST_DURATION) }}
            >
                {

                    [...productLists.gallery, ...productLists.gallery].map(map =>
                    (
                        <>
                            <Card img={map.img} />
                        </>
                    )

                    )

                }

            </motion.div >
        </>

    )
}
