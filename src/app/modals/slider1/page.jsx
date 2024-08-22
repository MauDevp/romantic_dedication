// @ts-nocheck
'use client'

// components/Gallery.js
import Stories from 'stories-react';
import 'stories-react/dist/index.css';
import { useEffect, useRef, useState } from 'react';

import Image from 'next/image'; // Importa el componente de imagen de Next.js

import Card from '../../../components/cards/Card'
import Header from '../../../components/Header'
import WrapperStories from '../../../components/WrapperStories'
import { IoClose } from "react-icons/io5";
import { useModal } from '../../../context/ModalContext';

const Slider1 = () => {
    const { closeModal, modalContent } = useModal();

    const slide = [
        {
            type: "image",
            duration: 5000,
            url: "/slide1/foto0.jpg",
            header: <Header 
                        text="El día que te conocí, ese día marco un antes y un después en mi vida."
                        margin="80"
                        color="#000"
                        animate={true}
                        textSize="text-2xl"
                        font="font-semibold"
                    />,
        },
        {
            type: "image",
            duration: 5000,
            url: "/slide1/foto1.jpg",
            header: <Header 
                        text="Recuerdo que eras un poco enojona, pero me senti muy feliz de conocerte."
                        margin="80"
                        color="#FFF"
                        animate={false}
                        textSize="text-xl"
                        font="font-bold"
                    />,
        },
        {
            type: "video",
            duration: 20000,
            url: "/slide1/video1.mp4",
            header: <Header 
                        text="Aquí fue el día que te dí tu maquina de escribir, un día loco pero feli"
                        margin="80"
                        color="#FFF"
                        animate={false}
                        textSize="text-lg"
                        font="font-medium"
                    />,
        },
        {
            type: "image",
            duration: 5000,
            url: "/slide1/foto2.jpg",
            header: <Header 
                        text="asi me tenías cuando yo te conocí"
                        margin="98"
                        color="#000"
                        animate={false}
                        textSize="text-xl"
                        font="font-semibold"
                    />,
        },
        {
            type: "image",
            duration: 4000,
            url: "/slide1/foto3.jpg",
            header: <Header 
                        text="Yo intentando mostrarle lo que hacía"
                        margin="70"
                        color="#000"
                        animate={false}
                        textSize="text-lg"
                        font="font-bold"
                    />,
        },
        {
            type: "image",
            duration: 4000,
            url: "/slide1/foto4.jpg",
            header: <Header 
                        text="Yo tratando de tomarte una foto"
                        margin="80"
                        color="#FFF"
                        animate={false}
                        textSize="text-lg"
                        font="font-medium"
                    />,
        },
        {
            type: "image",
            duration: 8000,
            url: "/slide1/foto5.jpg",
            header: <Header 
                        text="Yo tratando de nuevo de tomarte una foto. No olvido ese día, fue un día que te quedaste a dormir y te dí una super clase de Artes marciales mixtas, pero andabas de malas"
                        margin="80"
                        color="#000"
                        animate={false}
                        textSize="text-xl"
                        font="font-bold"
                    />,
        },
        {
            type: "image",
            duration: 4000,
            url: "/slide1/foto6.jpg",
            header: <Header 
                        text="Pero yo aun así quería tener esto contigo."
                        margin="-60"
                        color="#5B2B3E"
                        animate={false}
                        textSize="text-2xl"
                        font="font-bold"
                    />,
        },
        {
            type: "image",
            duration: 4000,
            url: "/slide1/foto7.jpg",
            header: <Header 
                        text="Amaba fotografiarte aunque no te dejaras"
                        margin="80"
                        color="#FFF"
                        animate={false}
                        textSize="text-2xl"
                        font="font-bold"
                    />,
        },
        {
            type: "image",
            duration: 8000,
            url: "/slide1/foto8.png",
            header: <Header 
                        text="Aquí me hiciste un super amarre, y termine bien enamorado de ti"
                        margin="86"
                        color="#146935"
                        animate={true}
                        textSize="text-3xl"
                        font="font-extrabold"
                    />,
        },
        {
            type: "image",
            duration: 5000,
            url: "/slide1/foto9.jpg",
            header: <Header 
                        text="Yo en este punto estaba así"
                        margin="-60"
                        color="#000"
                        animate={false}
                        textSize="text-4xl"
                        font="font-bold"
                    />,
        },
        {
            type: "image",
            duration: 6000,
            url: "/slide1/foto10.jpg",
            header: <Header 
                        text="Y quería ya verme así contigo"
                        margin="-60"
                        color="#1A1A1A"
                        animate={false}
                        textSize="text-4xl"
                        font="font-bold"
                    />,
        },
        {
            type: "image",
            duration: 5000,
            url: "/slide1/foto11.jpg",
            header: <Header 
                        text="Un foto bigote para terminar aquí"
                        margin="-60"
                        color="#000"
                        animate={false}
                        textSize="text-3xl"
                        font="font-bold"
                    />,
        },
    ]

    const storiesRef = useRef(null);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        handleResize(); // Check on mount
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        const observer = new MutationObserver(() => {
            if (storiesRef.current) {
                const videos = storiesRef.current.querySelectorAll('video');
                videos.forEach(video => {
                    video.muted = false;
                });
            }
        });

        if (storiesRef.current) {
            observer.observe(storiesRef.current, { childList: true, subtree: true });
        }

        return () => observer.disconnect();
    }, []);

    return (
        <div className="flex w-screen h-screen bg-black justify-center items-start pt-[10%]  md:pt-0 z-50">
            <div 
                className="fixed z-50 top-[6%] md:top-1 right-0 md:right-12 p-4 cursor-pointer text-[#1b1b1b] md:text-[#e3e3e3]  rounded-full" 
                onClick={() => closeModal()}>
                {<IoClose size={34}/>}
            </div>
            <div className="bg-black">
                <WrapperStories
                    ref={storiesRef}
                    width={isMobile ? "410px" : "500px"}
                    height={isMobile ? "660px" : "100vh"}
                    onAllStoriesEnd={closeModal}
                    stories={slide}
                />                                                             
            </div>
        </div>
    )
}

export default Slider1