'use client'
import React from 'react';
import { Questrial } from 'next/font/google';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import { faAngleRight, faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import useProductsDataManager from '@/hooks/useProductsDataManager';

const questrial = Questrial({
    subsets: ['latin'],
    weight: "400",
})



export default function Shop({ imgScr }) {
    const { isLoading, productLists, iserror } = useProductsDataManager()

    const [count, setCount] = React.useState(2)

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

    const length = productLists.products.length

    function next(params) {
        setCount(prevState => prevState === length - 1 ? 0 : count + 1)

    }
    // console.log(count);

    function back(params) {

        setCount(prevState => prevState === 0 ? length - 1 : count - 1)
    }




    return (
        <>

            <div key={productLists.products[count].id} className='fade d-flex gap'>
                <div className='carousel '>

                    <FontAwesomeIcon className="icon" onClick={back} icon={faAngleLeft} />

                    <Image
                        src={productLists.products[count].image}
                        alt='Deezer Logo'
                        width={205}
                        height={206}
                    // className='DavidNathanImg2'
                    />

                    <FontAwesomeIcon className="icon" onClick={next} icon={faAngleRight} />

                </div>

                <h3 className='merch-title'>
                    {productLists.products[count].name}
                </h3>

                <h4 className={`${questrial.className} gallery-pgh read-more-btn merch-price`}>N{productLists.products[count].price}</h4>
            </div>

            <button className='merch-btn'>
                <span></span>
                BUY ITEM
                <span></span>
            </button>
        </>

    )
}
