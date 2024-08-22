'use client'
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';
import './styles.css';

// import required modules
import { EffectCards } from 'swiper/modules';

import StoryGroup from '../StoryGroup';
import Slider1 from '../../app/modals/slider1/page';
import Slider2 from '../../app/modals/slider2/page';
import Slider3 from '../../app/modals/slider3/page';
import { useModal } from '../../context/ModalContext';

const SwiperSlider = () => {
    const { openModal } = useModal();

    return (
        <div>
            <Swiper
                effect={'cards'}
                grabCursor={true}
                modules={[EffectCards]}
                loop={false}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className='flex-grow flex flex-col justify-center items-center'>
                        <h1 className='text-center text-3xl my-4 w-[86%]'>El inicio de una historia</h1>
                        <StoryGroup onClick={() => openModal(<Slider1 />)} route={'/slide1/foto6.jpg'} />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='flex-grow flex flex-col justify-center items-center'>
                        <h1 className='text-center text-3xl my-4 w-[86%]'>Algo que lo cambio todo</h1>
                        <StoryGroup onClick={() => openModal(<Slider2 />)} route={'/slide2/portada.jpg'} />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='flex-grow flex flex-col justify-center items-center'>
                        <h1 className='text-center text-3xl my-4 w-[86%]'>La historia continua</h1>
                        <StoryGroup onClick={() => openModal(<Slider3 />)} route={'/foto2.jpg'} />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='flex-grow flex flex-col justify-center items-center'>
                        <h1 className='text-center text-3xl my-4 w-[86%]'>Coming soon...</h1>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default SwiperSlider;