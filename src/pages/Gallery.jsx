import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper/modules";
import { slides } from "../data/slides";

import 'swiper/css';
import "swiper/css/navigation";
import './Gallery.css';

function Gallery() {
  return (
    <section className='gallery'>
        <div className="container">
            <div className="gallery__inner">
                <h1>Galerija</h1>
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
                            
                            <div className="gallery-slide">

                                <img
                                src={slide.image}
                                alt={slide.title}
                                loading="lazy"
                                />

                                <div className="gallery-caption">
                                    <h3>{slide.title}</h3>
                                    <div className='gallery-caption-wrap'>
                                        <p>{slide.text}</p>
                                    </div>
                                </div>

                            </div>
                            
                        </SwiperSlide>
                    ))}
                </Swiper>
                <div className="gallery__controls">
                    <button className="gallery-prev">←</button>
                    <button className="gallery-next">→</button>
                </div>
            </div>
        </div>
    </section>
  );
};

export default Gallery;