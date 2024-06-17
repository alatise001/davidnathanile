'use client'
import React from 'react'
import Image from 'next/image'
import { Questrial } from 'next/font/google'
import useProductsDataManager from '@/hooks/useProductsDataManager'

const questrial = Questrial({
    subsets: ['latin'],
    weight: "400",
})

export default function Gallery() {
    const { isLoading, productLists, iserror } = useProductsDataManager()

    return (
        <>
            <p className={`${questrial.className} gallery-pgh`} >Photos from recent events</p>

            <div className='gallery-container'>
                {

                    productLists.map(map =>
                    (
                        <>

                            < Image
                                src={map.img}
                                alt='Deezer Logo'
                                width={371}
                                height={195}
                                className='galleryimg'
                            />
                        </>
                    )

                    )

                }

            </div>
        </>

    )
}
