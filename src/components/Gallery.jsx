// @ts-nocheck
'use client'

// components/Gallery.js
import Stories from 'stories-react';
import 'stories-react/dist/index.css';

import { useState, useRef, createContext } from 'react';

import Card1 from './cards/Card1';
import Card2 from './cards/Card2';


export default function Gallery() {

    const storySource = [
        {
            type: "component",
            duration: 10000,
            component: Card1,
        },
        {
            type: "component",
            duration: 10000,
            component: Card2,
        },
        {
            type: "component",
            duration: 10000,
            component: Card1,
        },
        {
            type: "component",
            duration: 10000,
            component: Card2,
        },
        {
            type: "component",
            duration: 5000,
            component: Card1,
        },
    ]

    return (
        <div className="flex justify-center items-center w-[100vw] h-[100vh] bg-black">
            <Stories width="400px" height="640px" stories={storySource} />
        </div>
    );
}
