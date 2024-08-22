// @ts-nocheck
'use client'

// components/Gallery.js
import Stories from 'stories-react';
import 'stories-react/dist/index.css';
import { useEffect, useRef, useState } from 'react';

import Card from '../../../components/cards/Card'
import Header from '../../../components/Header'
import WrapperStories from '../../../components/WrapperStories'
import { IoClose } from "react-icons/io5";
import { useModal } from '../../../context/ModalContext';

const Slider2 = () => {
    const { closeModal } = useModal();
    const slide1 = [
        {
            type: "image",
            duration: 5000,
            url: "/slide2/foto12.jpg",
            header: <Header 
                        text="Ese día llego algo a nuestras vidas que no esperábamos pero que nos hizo muy feliz"
                        margin="80"
                        color="#E6E6E6"
                        animate={false}
                        textSize="text-3xl"
                        font="font-bold"
                    />,
        },
        {
            type: "image",
            duration: 5000,
            url: "/slide2/foto13.jpg",
            header: <Header 
                        text="Fue también un día un poco extraño, y aunque me queje me gusto mucho."
                        margin="80"
                        color="#D3D3D3"
                        animate={false}
                        textSize="text-2xl"
                        font="font-bold"
                    />,
        },
        {
            type: "image",
            duration: 5000,
            url: "/slide2/foto14.jpg",
            header: <Header 
                        text="Ese día llego esta chiquita a nuestras manos. ❤️❤️😻"
                        margin="98"
                        color="#FFF"
                        animate={false}
                        textSize="text-2xl"
                        font="font-bold"
                    />,
        },
        {
            type: "image",
            duration: 5000,
            url: "/slide2/foto15.jpg",
            header: <Header 
                        text="Y eran la una para la otra 👯‍♀️"
                        margin="80"
                        color="#000"
                        animate={false}
                        textSize="text-2xl"
                        font="font-bold"
                    />,
        },
        {
            type: "image",
            duration: 20000,
            url: "/slide2/foto16.jpg",
            header: <Header 
                        text="Pero a como hacía vagancias la pequeña 😾"
                        margin="80"
                        color="#FFF"
                        animate={false}
                        textSize="text-xl"
                        font="font-semibold"
                    />,
        },
        {
            type: "video",
            duration: 3300,
            url: "/slide2/video2.mp4",
            header: <Header 
                        text="Pero aun así la amaba mucho y la cuidaba con todo mi corazón. ❤️"
                        margin="80"
                        color="#FFF"
                        animate={false}
                        textSize="text-xl"
                        font="font-semibold"
                    />,
        },
        {
            type: "image",
            duration: 20000,
            url: "/slide2/foto17.jpg",
            header: <Header 
                        text="Era igual de inquieta que nosotros 🫨🥴"
                        margin="80"
                        color="#000"
                        animate={false}
                        textSize="text-2xl"
                        font="font-bold"
                    />,
        },
        {
            type: "image",
            duration: 20000,
            url: "/slide2/foto18.jpg",
            header: <Header 
                        text="Y tan preciosa como tú. 🤩"
                        margin="-60"
                        color="#AC008D"
                        animate={false}
                        textSize="text-2xl"
                        font="font-bold"
                    />,
        },
        {
            type: "image",
            duration: 20000,
            url: "/slide2/foto19.jpg",
            header: <Header 
                        text="Después inesperadamente llego otro chiquito a nuestras vidas. 🫨"
                        margin="80"
                        color="#000E88"
                        animate={false}
                        textSize="text-2xl"
                        font="font-bold"
                    />,
        },
        {
            type: "image",
            duration: 20000,
            url: "/slide2/foto20.jpg",
            header: <Header 
                        text="Era todo tímido y parecía perdido. 🥺"
                        margin="-80"
                        color="#000E88"
                        animate={false}
                        textSize="text-3xl"
                        font="font-extrabold"
                    />,
        },
        {
            type: "image",
            duration: 20000,
            url: "/slide2/foto21.jpg",
            header: <Header 
                        text="taba igual de güero que tu, y igual de café que yo"
                        margin="72"
                        color="#141414"
                        animate={false}
                        textSize="text-2xl"
                        font="font-bold"
                    />,
        },
        {
            type: "image",
            duration: 20000,
            url: "/slide2/foto22.jpg",
            header: <Header 
                        text="recuerdo que siempre mientras te cocinaba, te quedabas tomándote fotos bonitas. 📸❤️"
                        margin="-88"
                        color="#1A1A1A"
                        animate={false}
                        textSize="text-2xl"
                        font="font-bold"
                    />,
        },
        {
            type: "image",
            duration: 5000,
            url: "/slide2/foto23.jpg",
            header: <Header 
                        text="Era un bbcito chiquito. 🥺🍼🐈"
                        margin="-88"
                        color="#EAEAEA"
                        animate={false}
                        textSize="text-3xl"
                        font="font-bold"
                    />,
        },
        {
            type: "image",
            duration: 5000,
            url: "/slide2/foto24.jpg",
            header: <Header 
                        text=""
                        margin="-60"
                        color="#000"
                        animate={false}
                        textSize="text-3xl"
                        font="font-bold"
                    />,
        },
        {
            type: "image",
            duration: 5000,
            url: "/slide2/foto25.jpg",
            header: <Header 
                        text="Foto pompis que me tomaste con Jose Luis. 📷😾"
                        margin="-60"
                        color="#000"
                        animate={false}
                        textSize="text-3xl"
                        font="font-bold"
                    />,
        },
        {
            type: "image",
            duration: 5000,
            url: "/slide2/foto26.jpg",
            header: <Header 
                        text=""
                        margin="-60"
                        color="#000"
                        animate={false}
                        textSize="text-3xl"
                        font="font-bold"
                    />,
        },
        {
            type: "image",
            duration: 5000,
            url: "/slide2/foto27.jpg",
            header: <Header 
                        text=""
                        margin="-60"
                        color="#000"
                        animate={false}
                        textSize="text-3xl"
                        font="font-bold"
                    />,
        },
        {
            type: "video",
            duration: 2000,
            url: "/slide2/video3.mp4",
            header: <Header 
                        text="Una señora apunto de tirar el celular. 📱🫢"
                        margin="80"
                        color="#FFF"
                        animate={false}
                        textSize="text-2xl"
                        font="font-semibold"
                    />,
        },
        {
            type: "image",
            duration: 5000,
            url: "/slide2/foto28.jpg",
            header: <Header 
                        text="Ve nomas esos ojitos azules. 🩵😍"
                        margin="-60"
                        color="#000"
                        animate={false}
                        textSize="text-3xl"
                        font="font-bold"
                    />,
        },
        {
            type: "video",
            duration: 20000,
            url: "/slide2/video4.mp4",
            header: <Header 
                        text="Eran uña y mugre, no se despegaban, igual que nosotros. ❤️❤️"
                        margin="86"
                        color="#FFF"
                        animate={false}
                        textSize="text-2xl"
                        font="font-semibold"
                    />,
        },
        {
            type: "image",
            duration: 5000,
            url: "/slide2/foto29.jpg",
            header: <Header 
                        text="Fueron un gran regalo de la vida, junto contigo, de las cosas mas preciadas que pude haber recibido. ❤️"
                        margin="-30"
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
        <div className="relative w-screen h-screen bg-black flex justify-center items-start">
            <div className="absolute z-50 top-14 md:top-1 right-0 md:right-12 p-4 cursor-pointer text-[#1b1b1b] md:text-[#e3e3e3]  rounded-full" onClick={closeModal}><IoClose size={32}/></div>
            <div className="bg-black mt-12 md:mt-0">
                <WrapperStories
                    ref={storiesRef}
                    width={isMobile ? "410px" : "500px"}
                    height={isMobile ? "660px" : "100vh"}
                    stories={slide1}
                    onAllStoriesEnd={closeModal}
                />                                                             
            </div>
        </div>
    )
}

export default Slider2