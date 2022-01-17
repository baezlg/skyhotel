import React from "react";
import SwiperCore, { Autoplay, EffectFade } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "./Featured.scss";
SwiperCore.use([Autoplay]);

const Featured = () => {
  return (
    <div className="featured">
      <Swiper
        modules={[Autoplay, EffectFade]}
        slidesPerView={1}
        scrollbar={{ draggable: true }}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        speed={1500}
        effect="fade"
        className="featured__slider"
      >
        <SwiperSlide className="featured__slide">
          <img
            src="https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt="room"
          />
        </SwiperSlide>
        <SwiperSlide className="featured__slide">
          <img
            src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt="room"
          />
        </SwiperSlide>
        <SwiperSlide className="featured__slide">
          <img
            src="https://images.unsplash.com/photo-1552566626-2d907dab0dff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt="room"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Featured;
