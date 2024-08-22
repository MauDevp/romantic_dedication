// pages/index.js
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
    <div className='bg-pink-200 min-w-min min-h-min'>
      <div className="min-h-screen min-w-screen bg-pink-200 text-gray-800 flex flex-col items-center">
        <ModalProvider>
          {/* <BackgroundMusic /> */}
          <h1 className="text-4xl font-bold text-center pt-8 text-red-600 animate-pulse">
            Nuestra Historia de amor
          </h1>
          <section className='flex justify-center items-center pt-28'>
            <SwiperSlider/>
          </section>
        </ModalProvider>
      </div>
    </div>
  );
}
