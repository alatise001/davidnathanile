'use client'
import React from 'react'
import Shop from './shop'
import ShopLarger from './shopLarger'
import { useMediaQuery } from 'react-responsive'

export default function Merch() {

    const isTabletOrMobile = useMediaQuery({ query: '(min-width: 768px)' })

    return (
        <>
            {

                isTabletOrMobile ? (<ShopLarger />) : (<Shop />)
            }

        </>
    )
}
