import React, { useState } from "react";
import SwiperCore, { Autoplay, EffectFade } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "swiper/css";
import "swiper/css/effect-fade";
import "./Featured.scss";
import CustomButton from "../customButton/CustomButton";
SwiperCore.use([Autoplay]);

const Featured = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState();
  const [days, setDays] = useState(0);

  const onChange = (dates) => {
    setDays(0);
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
    if (end) {
      var Difference_In_Time = end?.getTime() - start?.getTime();
      var Difference_In_Days = Number(Difference_In_Time) / (1000 * 3600 * 24);
      setDays(Difference_In_Days);
    }
  };

  const handleClick = () => {
    console.log("hello");
  };
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
        <div className="featured__booking">
          <h3>Make a reservation</h3>
          <i className="far fa-calendar-alt icon"></i>
          <DatePicker
            selected={startDate}
            onChange={onChange}
            startDate={startDate}
            endDate={endDate}
            selectsRange
            selectsDisabledDaysInRange
            className="featured__booking-date"
            id="date"
          />
          <h4>
            {days > 1
              ? `${Math.ceil(days)} Nights`
              : `${Math.ceil(days)} Night`}
          </h4>
          <label htmlFor="guests">
            Guests:{" "}
            <select
              name="guests"
              id="guests"
              className="featured__booking-guests"
            >
              <option value="1">1</option>
              <option value="2">2</option>
            </select>
          </label>
          <CustomButton onClick={handleClick} days={days}>
            Check Availability
          </CustomButton>
        </div>
      </Swiper>
    </div>
  );
};

export default Featured;
