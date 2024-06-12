import React from 'react'

export default function Form() {
    return (
        <form className='contactform d-flex' action="" method="post">
            <input
                type="email"
                name="email"
                id="email"
                placeholder="Email address"
                className='emailinput'
            // onChange={handleChg}
            // onBlur={handleBlur}
            // value={formData.email}
            />

            <input type="submit" value="SUBCRIBE" className='submitinput-btn' />

        </form>
    )
}
