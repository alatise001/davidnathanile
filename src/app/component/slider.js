import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import { faAngleRight, faAngleLeft } from "@fortawesome/free-solid-svg-icons";


export default function Slider({ imgScr }) {
    return (
        <div className='slider-div'>
            <FontAwesomeIcon className="icon" icon={faAngleLeft} />

            <Image
                src={imgScr}
                alt='Deezer Logo'
                width={205}
                height={206}
            // className='DavidNathanImg2'
            />
            <FontAwesomeIcon className="icon" icon={faAngleRight} />

        </div>
    )
}
