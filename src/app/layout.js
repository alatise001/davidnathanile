'use client'
import { Oswald } from 'next/font/google'
import './globals.css'
import Header from './component/header'
import Footer from './component/footer'
import { motion } from 'framer-motion'
import Loading from './component/loading'

import React from 'react'


const oswald = Oswald({ subsets: ['latin'], display: "swap" })

// export const metadata = {
//   title: 'Create Next App',
//   description: 'Generated by create next app',
// }

export default function RootLayout({ children }) {
  const [isloading, setIsLoading] = React.useState(true)



  React.useEffect(() => {
    // Use setTimeout to update the message after 2000 milliseconds (2 seconds)
    const timeoutId = setTimeout(() => {
      setIsLoading(false)
    }, 7000);

    // Cleanup function to clear the timeout if the component unmounts
    return () => clearTimeout(timeoutId);
  }, [])


  return (
    <html lang="en">

      <head>
        <script async defer src="https://apis.google.com/js/api.js"></script>
        <script async defer src="https://accounts.google.com/gsi/client"></script>
      </head>

      <motion.body
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delayChildren: 5 }}
        className={oswald.className}>

        {isloading ? (<Loading />) : (<>
          <Header />
          {children}
          <Footer />
        </>)}


        {/* <Header />
        {children}
        <Footer /> */}


      </motion.body>
    </html>
  )
}
