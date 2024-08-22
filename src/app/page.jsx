// pages/index.js
import Gallery from '../components/Gallery';
import BackgroundMusic from '../components/BackgroundMusic';
import RomanticQuotes from '../components/RomanticQuotes';
import SwiperSlider from '../components/swiper/Swiper';
import { ModalProvider } from '../context/ModalContext';

export default function Home() {

  const quotes = [
    'Te amo más de lo que las palabras pueden expresar.',
    'Eres la razón de mi felicidad.',
    // más citas...
  ];

  return (
    <ModalProvider>  
      <div className="min-h-screen bg-pink-200 p-8 text-gray-800 flex flex-col">
        {/* <BackgroundMusic /> */}
        <h1 className="text-4xl font-bold text-center text-red-600 animate-pulse">
          Nuestra Historia de amor
        </h1>
        {/* <RomanticQuotes quotes={quotes} /> */}
        {/* <Gallery/> */}
        <section className='flex-grow flex justify-center items-center pb-28'>
          <SwiperSlider/>
        </section>
      </div>
    </ModalProvider>
  );
}
