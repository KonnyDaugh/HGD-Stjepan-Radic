import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper/modules";
import { slides } from "../data/slides";

import 'swiper/css';
import "swiper/css/navigation";
import './Gallery.css';

function Gallery() {
  return (
    <div className="gallery__wrapper">
        
        <Swiper
            modules={[Navigation]}
            navigation={{
            prevEl: ".gallery-prev",
            nextEl: ".gallery-next"
            }}
            spaceBetween={30}
            slidesPerView={1}
            className="gallery-swiper"
        >
            {slides.map((slide) => (
                <SwiperSlide key={slide.id}>
                    <div className="container">
                        <div className="gallery-slide">

                            <img
                            src={slide.image}
                            alt={slide.title}
                            loading="lazy"
                            />

                            <div className="gallery-caption">
                            <h3>{slide.title}</h3>
                            <div className='gallery-caption-wrap'>
                                <button className="gallery-prev">←</button>
                                <p>{slide.text}</p>
                                <button className="gallery-next">→</button>
                            </div>
                            </div>

                        </div>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
        
    </div>
  );
};

export default Gallery;