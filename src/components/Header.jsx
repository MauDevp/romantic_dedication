// @ts-nocheck
import React from 'react'

const Header = ({ text, margin, color, animate, textSize, font  }) => {
    return (
        <div className="flex items-center justify-center h-full w-full">
            <p className={`${textSize} w-[80%] ${font} text-center ${animate ? 'animate-pulse' : ''}`} style={{ marginBottom: `${margin}%`, color: color }}>
                {text}
            </p>
        </div>
    )
}

export default Header