/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { Interface } from 'readline'

interface CardProps {
    title: string
    urlPic: string
}

const Card = ({ title, urlPic }: CardProps) => {
    return (
        <>
            <h1>{title}</h1>
            <img src={urlPic} alt="imagen" />
        </>
    )
}

export default Card