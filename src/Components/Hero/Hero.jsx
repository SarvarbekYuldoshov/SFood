
import React, { useRef, useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

import './Hero.css';

import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import Layout from '../Layaut/Layout';
import { Outlet } from 'react-router';

export default function Hero() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <>
    <div className=''>
      <Swiper
        style={{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
        }}
        loop={true}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}

        modules={[FreeMode, Navigation, Thumbs]}
        className="hero"
      >
        <SwiperSlide>
          <img className='hero-img' src="https://cdn.delever.uz/delever/1b71b079-f375-43ca-b24b-04d0e0b9b0dd" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='hero-img' src="https://cdn.delever.uz/delever/f5094e04-ad42-41d3-9989-6ebfe167a8bc" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='hero-img' src="https://cdn.delever.uz/delever/5f985809-5a75-44bd-9209-dd4fa911169b" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='hero-img' src="https://cdn.delever.uz/delever/1b71b079-f375-43ca-b24b-04d0e0b9b0dd" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='hero-img' src="https://cdn.delever.uz/delever/1b71b079-f375-43ca-b24b-04d0e0b9b0dd" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='hero-img' src="https://cdn.delever.uz/delever/1b71b079-f375-43ca-b24b-04d0e0b9b0dd" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='hero-img' src="https://cdn.delever.uz/delever/f5094e04-ad42-41d3-9989-6ebfe167a8bc" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='hero-img' src="https://cdn.delever.uz/delever/5f985809-5a75-44bd-9209-dd4fa911169b" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='hero-img' src="https://cdn.delever.uz/delever/5f985809-5a75-44bd-9209-dd4fa911169b" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='hero-img' src="https://cdn.delever.uz/delever/f5094e04-ad42-41d3-9989-6ebfe167a8bc" />
        </SwiperSlide>
      </Swiper>
      <Swiper
      
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        
        <SwiperSlide>
          <img className='hero-img-a' src="https://cdn.delever.uz/delever/1b71b079-f375-43ca-b24b-04d0e0b9b0dd" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='hero-img-a' src="https://cdn.delever.uz/delever/f5094e04-ad42-41d3-9989-6ebfe167a8bc" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='hero-img-a' src="https://cdn.delever.uz/delever/5f985809-5a75-44bd-9209-dd4fa911169b" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='hero-img-a' src="https://cdn.delever.uz/delever/1b71b079-f375-43ca-b24b-04d0e0b9b0dd" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='hero-img-a' src="https://cdn.delever.uz/delever/1b71b079-f375-43ca-b24b-04d0e0b9b0dd" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='hero-img-a' src="https://cdn.delever.uz/delever/1b71b079-f375-43ca-b24b-04d0e0b9b0dd" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='hero-img-a' src="https://cdn.delever.uz/delever/f5094e04-ad42-41d3-9989-6ebfe167a8bc" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='hero-img-a' src="https://cdn.delever.uz/delever/5f985809-5a75-44bd-9209-dd4fa911169b" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='hero-img-a' src="https://cdn.delever.uz/delever/5f985809-5a75-44bd-9209-dd4fa911169b" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='hero-img-a' src="https://cdn.delever.uz/delever/f5094e04-ad42-41d3-9989-6ebfe167a8bc" />
        </SwiperSlide>
      </Swiper>
      </div>
      <Layout/>
      <Outlet/>
    </>
  );
  
}
