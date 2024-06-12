import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faXTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';


export default function SocialMedia() {
    return (

        <div className='social-div d-flex'>
            <div className='socialmediaicon-div d-flex '>
                <FontAwesomeIcon className="socailmediaicon" icon={faXTwitter} />
            </div>

            <div className='socialmediaicon-div d-flex'>
                <FontAwesomeIcon className="socailmediaicon" icon={faYoutube} />
            </div>

            <div className='socialmediaicon-div d-flex'>
                <FontAwesomeIcon className="socailmediaicon" icon={faFacebook} />
            </div>

            <div className='socialmediaicon-div d-flex'>
                <FontAwesomeIcon className="socailmediaicon" icon={faInstagram} />
            </div>
        </div>
    )
}
