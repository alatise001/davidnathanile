import React from 'react'
import { AnimatePresence, motion } from 'framer-motion';

export default function Loading() {



    return (
        <html lang="en">
            <AnimatePresence>
                <motion.body key={3}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delayChildren: 5 }}
                    exit={{ opacity: 0, scale: 0.5 }}
                >

                    <div className="loading-div d-flex">
                        <div className="loading-img">
                        </div>
                    </div>
                </motion.body>
            </AnimatePresence>
        </html>
    );
}

// <html>
//     <div className="loading-div d-flex">

//         <div className="loading-img">
//         </div>
//     </div>
// </html>