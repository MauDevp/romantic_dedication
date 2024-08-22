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

const Slider3 = () => {
    const { closeModal } = useModal();
    const slide1 = [
        {
            type: "image",
            duration: 5000,
            url: "/slide3/foto30.jpg",
            header: <Header 
                        text="Amo mucho que me envies fotos de atardeceres, y me encanta que te gusten. 🌄"
                        margin="80"
                        color="#292929"
                        animate={true}
                        textSize="text-3xl"
                        font="font-bold"
                    />,
        },
        {
            type: "image",
            duration: 3000,
            url: "/slide3/foto31.jpg",
            header: <Header 
                        text="Vieja preciosota !!! ❤️😘"
                        margin="80"
                        color="#D3D3D3"
                        animate={false}
                        textSize="text-3xl"
                        font="font-bold"
                    />,
        },
        {
            type: "image",
            duration: 5000,
            url: "/slide3/foto32.jpg",
            header: <Header 
                        text="Otro atardecer. 🌄"
                        margin="80"
                        color="#292929"
                        animate={false}
                        textSize="text-2xl"
                        font="font-bold"
                    />,
        },
        {
            type: "image",
            duration: 3000,
            url: "/slide3/foto33.jpg",
            header: <Header 
                        text="Empezaban ya a crecer, crecían rápido los chamacos. 🥴"
                        margin="80"
                        color="#FFF"
                        animate={false}
                        textSize="text-2xl"
                        font="font-bold"
                    />,
        },
        {
            type: "image",
            duration: 3000,
            url: "/slide3/foto34.jpg",
            header: <Header 
                        text=""
                        margin="80"
                        color="#FFF"
                        animate={false}
                        textSize="text-xl"
                        font="font-semibold"
                    />,
        },
        {
            type: "video",
            duration: 5200,
            url: "/slide3/video5.mp4",
            header: <Header 
                        text="Veee nomas, yo no chiquie a Jose Luis, fue Marecita. 😾🥴🥺"
                        margin="80"
                        color="#000"
                        animate={false}
                        textSize="text-2xl"
                        font="font-bold"
                    />,
        },
        {
            type: "image",
            duration: 4000,
            url: "/slide3/foto35.jpg",
            header: <Header 
                        text="A como se querían. ❤️🐈"
                        margin="80"
                        color="#000"
                        animate={false}
                        textSize="text-2xl"
                        font="font-bold"
                    />,
        },
        {
            type: "image",
            duration: 4000,
            url: "/slide3/foto36.jpg",
            header: <Header 
                        text="Y la Mar tan modelo como siempre, le encantaba la cámara. 📷"
                        margin="-30"
                        color="#9B575C"
                        animate={false}
                        textSize="text-2xl"
                        font="font-bold"
                    />,
        },
        {
            type: "image",
            duration: 3000,
            url: "/slide3/37.jpg",
            header: <Header 
                        text="Vieja Chula. 🤩"
                        margin="92"
                        color="#C54F49"
                        animate={false}
                        textSize="text-4xl"
                        font="font-bold"
                    />,
        },
        {
            type: "image",
            duration: 3000,
            url: "/slide3/foto37.jpg",
            header: <Header 
                        text="Vieja preciosa. 😍"
                        margin="-88"
                        color="#C54F49"
                        animate={false}
                        textSize="text-4xl"
                        font="font-extrabold"
                    />,
        },
        {
            type: "image",
            duration: 5000,
            url: "/slide3/foto38.jpg",
            header: <Header 
                        text="Aplicándote un remedio casero, por que a alguien se le ocurrió meter la mano al horno"
                        margin="88"
                        color="#141414"
                        animate={false}
                        textSize="text-3xl"
                        font="font-bold"
                    />,
        },
        {
            type: "image",
            duration: 3000,
            url: "/slide3/foto39.jpg",
            header: <Header 
                        text="Foto mía pa que no digas que no salí. 📸"
                        margin="-88"
                        color="#000000"
                        animate={false}
                        textSize="text-2xl"
                        font="font-bold"
                    />,
        },
        {
            type: "image",
            duration: 3000,
            url: "/slide3/foto40.jpg",
            header: <Header 
                        text="Foto baja calidad por que no encontré la original. 📷"
                        margin="-88"
                        color="#EAEAEA"
                        animate={false}
                        textSize="text-3xl"
                        font="font-bold"
                    />,
        },
        {
            type: "image",
            duration: 8000,
            url: "/slide3/foto41.jpg",
            header: <Header 
                        text="Aaah vieja chula, como me encanta verde dormir y verte despertar, son de las cosas que mas disfruto. 💤💓"
                        margin="-60"
                        color="#000"
                        animate={false}
                        textSize="text-3xl"
                        font="font-bold"
                    />,
        },
        {
            type: "image",
            duration: 8000,
            url: "/slide3/foto42.jpg",
            header: <Header 
                        text="Ahhh que preciosa cara de enojada, me encanta tu carita, me encantas. 😾😍💓"
                        margin="-100"
                        color="#000"
                        animate={false}
                        textSize="text-3xl"
                        font="font-bold"
                    />,
        },
        {
            type: "image",
            duration: 5000,
            url: "/slide3/foto43.jpg",
            header: <Header 
                        text="Cuando me sacaste a una biblioteca. Me encanto también ese día. ❤️📚"
                        margin="-60"
                        color="#FFF"
                        animate={false}
                        textSize="text-3xl"
                        font="font-bold"
                    />,
        },
        {
            type: "image",
            duration: 5000,
            url: "/slide3/foto44.jpg",
            header: <Header 
                        text="Ahí andaba yo todo emocionado. 😮"
                        margin="-100"
                        color="#FFF"
                        animate={false}
                        textSize="text-3xl"
                        font="font-bold"
                    />,
        },
        {
            type: "image",
            duration: 5000,
            url: "/slide3/foto45.jpg",
            header: <Header 
                        text="Y tu tan preciosa. 💓💓💓"
                        margin="100"
                        color="#000"
                        animate={false}
                        textSize="text-3xl"
                        font="font-bold"
                    />,
        },
        {
            type: "image",
            duration: 5000,
            url: "/slide3/foto46.jpg",
            header: <Header 
                        text="Andaba bien loco por tí. ❤️💘"
                        margin="-30"
                        color="#FFF"
                        animate={false}
                        textSize="text-3xl"
                        font="font-bold"
                    />,
        },
        {
            type: "image",
            duration: 5000,
            url: "/slide3/foto47.jpg",
            header: <Header 
                        text="😍😍😍"
                        margin="-30"
                        color="#000"
                        animate={false}
                        textSize="text-3xl"
                        font="font-bold"
                    />,
        },
        {
            type: "image",
            duration: 5000,
            url: "/slide3/foto48.jpg",
            header: <Header 
                        text="Ese recuerdo fue otro bonito día junto a tí. 💕"
                        margin="-30"
                        color="#FFF"
                        animate={false}
                        textSize="text-2xl"
                        font="font-bold"
                    />,
        },
        {
            type: "image",
            duration: 6000,
            url: "/slide3/foto49.jpg",
            header: <Header 
                        text="Mi chiquita la mas belicosa. ❤️🔫   Ó la bebes o la derramas"
                        margin="-40"
                        color="#FFF"
                        animate={false}
                        textSize="text-2xl"
                        font="font-bold"
                    />,
        },
        {
            type: "image",
            duration: 5000,
            url: "/slide3/foto50.jpg",
            header: <Header 
                        text=""
                        margin="-50"
                        color="#FFF"
                        animate={false}
                        textSize="text-3xl"
                        font="font-bold"
                    />,
        },
        {
            type: "image",
            duration: 5000,
            url: "/slide3/foto51.jpg",
            header: <Header 
                        text=""
                        margin="-30"
                        color="#000"
                        animate={false}
                        textSize="text-3xl"
                        font="font-bold"
                    />,
        },
        {
            type: "image",
            duration: 5000,
            url: "/slide3/foto52.jpg",
            header: <Header 
                        text="La mas penuda del condado."
                        margin="-80"
                        color="#FFF"
                        animate={false}
                        textSize="text-2xl"
                        font="font-bold"
                    />,
        },
        {
            type: "image",
            duration: 5000,
            url: "/slide3/foto53.jpg",
            header: <Header 
                        text="Con mucho amor para tí. ❤️❤️❤️ Quiero seguir creando muchos recuerdo contigo..."
                        margin="-30"
                        color="#FFFFFF"
                        animate={false}
                        textSize="text-2xl"
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
        <div className="relative w-screen h-screen bg-black flex justify-center items-start mt-12 md:mt-0">
            <button className="absolute z-50 top-14 md:top-1 right-0 md:right-12 p-4 cursor-pointer text-[#1b1b1b] md:text-[#e3e3e3]  rounded-full" onClick={closeModal}>
                <IoClose size={32}/>
            </button>
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

export default Slider3