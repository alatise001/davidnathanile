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

            <div className='gallery-container'>
                {

                    productLists.gallery.map(map =>
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
