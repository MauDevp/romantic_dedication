// @ts-nocheck
'use client'

// components/BackgroundMusic.js
import { useState, useRef } from 'react';

export default function BackgroundMusic() {
    const [isPlaying, setIsPlaying] = useState(true);
    const audioRef = useRef(null);

    const togglePlayPause = () => {
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    return (
        <div className="absolute top-4 left-4">
            <button
                onClick={togglePlayPause}
                className="p-2 bg-red-500 text-white rounded-full shadow-md focus:outline-none"
            >
                {isPlaying ? '⏸️' : '▶️'}
            </button>
            <audio ref={audioRef} autoPlay loop>
                <source src="/muerteenhawuai.mp3" type="audio/mpeg" />
                Your browser does not support the audio element.
            </audio>
        </div>
    );
}
