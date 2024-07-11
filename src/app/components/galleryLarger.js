'use client'
import React from 'react'
import Image from 'next/image'
import { Questrial } from 'next/font/google'
import useProductsDataManager from '@/hooks/useProductsDataManager'

const questrial = Questrial({
    subsets: ['latin'],
    weight: "400",
})

export default function GalleryLarger() {
    const { isLoading, productLists, iserror } = useProductsDataManager()
    const [isImgScr, setImgScr] = React.useState()

    function imgScr(params) {

        setImgScr(params)
    }

    React.useEffect(() => {
        if (isLoading) {
            return
        } else {

            setImgScr(productLists.gallery[0].img)
        }

    }, [isLoading, productLists.gallery])



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

            <div className='largerImgDiv' style={{ backgroundImage: `url(${isImgScr})` }}>

                {/* < Image
                src={isImgScr}
                alt='Deezer Logo'
                width={1161}
                // fill
                height={609}
                className='galleryimgLarge'
            /> */}
            </div>

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
                                onClick={() => { setImgScr(map.img) }}

                            />
                        </>
                    )

                    )

                }

            </div>
        </>

    )
}
