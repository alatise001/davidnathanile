import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { motion } from 'framer-motion';
import { faFacebook, faInstagram, faXTwitter, faYoutube, faThreads } from '@fortawesome/free-brands-svg-icons';

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

export default function SocialMedia() {
    return (

        <motion.div
            initial="start"
            whileInView="view"

            variants={inview}

            viewport={{ once: true }}

            className='social-div d-flex'>

            <div className='socialmediaicon-div d-flex '>
                <a href="https://x.com/DavidNathan_ile" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon className="socailmediaicon" icon={faXTwitter} />
                </a>
            </div>

            <div className='socialmediaicon-div d-flex'>
                <a href="https://youtube.com/@davidnathanile6992?si=O7psG-8kV2zvTN24" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon className="socailmediaicon" icon={faYoutube} />
                </a>
            </div>

            <div className='socialmediaicon-div d-flex'>
                <FontAwesomeIcon className="socailmediaicon" icon={faFacebook} />
            </div>

            <div className='socialmediaicon-div d-flex'>
                <a href="https://www.instagram.com/davidnathan_ile?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon className="socailmediaicon" icon={faInstagram} />
                </a>
            </div>

            <div className='socialmediaicon-div d-flex'>
                <a href="https://www.threads.net/@davidnathan_ile?xmt=AQGzlablH97KZ1OX47wbT6mloyhFE_m52ynOPl_p83Fub4w" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon className="socailmediaicon" icon={faThreads} />
                </a>
            </div>
        </motion.div>
    )
}
