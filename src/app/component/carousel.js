'use client'
import React from 'react';
import { Questrial } from 'next/font/google';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import { faAngleRight, faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import useProductsDataManager from '@/hooks/useProductsDataManager';
import Subtitle from './subtitle';

const questrial = Questrial({
    subsets: ['latin'],
    weight: "400",
})



export default function Carousel({ imgScr }) {
    const { isLoading, productLists, iserror } = useProductsDataManager()
    console.log(productLists);

    // if (isLoading) {
    //     return (


    //         <div className="loading-div">
    //             {/* 
    //             <Image
    //                 src="/assets/loading.gif"
    //                 width="200"
    //                 height="200"
    //                 alt="loading"

    //             /> */}
    //         </div>
    //     )
    // }

    return (
        <>
            <div className='carousel'>

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
        </>
    )
}
