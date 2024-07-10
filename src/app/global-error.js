'use client'

import Link from "next/link"

export default function GlobalError({ error, reset }) {
    return (
        <html>
            <body className="loading-div d-flex">
                <h2 className='subtitle-header'>Something went wrong!</h2>
                <Link href="/" >
                    <button
                        className='submitinput-btn'
                    >
                        Go Back Home
                    </button>
                </Link>
            </body>
        </html>


    )
}