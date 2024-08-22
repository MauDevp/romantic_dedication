// @ts-nocheck
import React from 'react'

const StoryGroup = ({onClick, route}) => {
    return (
        <div
            onClick={onClick}
            className='flex items-center justify-center rounded-full w-[72%] aspect-square cursor-pointer' 
            style={{
                backgroundImage: 'linear-gradient(45deg,#b99b29, #f58529, #dd2a7b, #8134af, #515bd4)'
            }}
        >
            <div className='flex items-center justify-center bg-gray-900 rounded-full w-[93%] aspect-square bg-cover bg-center bg-no-repeat'>
                <div className='flex items-center justify-center rounded-full w-[94%] aspect-square bg-cover bg-center bg-no-repeat' style={{backgroundImage: `url(${route})` }}/>
            </div>
        </div>
    )
}

export default StoryGroup