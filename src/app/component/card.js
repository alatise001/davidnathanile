import React from 'react'
import Image from 'next/image'
import { AnimatePresence, motion } from 'framer-motion'
import { faL } from '@fortawesome/free-solid-svg-icons'
import { script } from 'googleapis/build/src/apis/script'

export default function Card({ img }) {

    const [showOverlay, setShowOverly] = React.useState(false)
    return (
        <>
            <motion.div
                onHoverStart={() => setShowOverly(true)}
                onHoverEnd={() => setShowOverly(false)}
                className='card-div'>
                <AnimatePresence>
                    {showOverlay && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className='card-inner-div'>
                            <div className='card-inner-div-1' />
                            <motion.h1
                                initial={{ y: 10 }}
                                animate={{ y: 0 }}
                                exit={{ y: 10 }}
                                className='card-h1'>
                                <span>Open</span>
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
                />
            </motion.div>


            <div id="myModal" class="modal">


                <span class="close">&times;</span>

                <img class="modal-content" id="img01" />

                <div id="caption"></div>
            </div>

            <script>

            </script>
        </>

    )
}
