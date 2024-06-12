import React from 'react'

function Subtitle({ title }) {
    return (
        <div className='subtitle-div'>
            <h2 className='subtitle-header'>{title}</h2>
            <div className='underline'></div>
        </div>
    )
}

export default Subtitle