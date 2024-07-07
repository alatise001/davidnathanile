'use client'
import React from 'react';
import { Questrial } from 'next/font/google';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import { faAngleRight, faAngleLeft, faQuestion } from "@fortawesome/free-solid-svg-icons";
import useProductsDataManager from '@/hooks/useProductsDataManager';

const questrial = Questrial({
    subsets: ['latin'],
    weight: "400",
})



export default function ComingSoon({ imgScr }) {




    return (
        <div className='coming-soon'>

            <div className=' coming-soon-bg fade d-flex gap'>
                <FontAwesomeIcon className='comingIcon' icon={faQuestion} beatFade />
            </div>

            <h1 className='subtitle-header'>
                Coming soon!!
            </h1>
        </div>

    )
}
