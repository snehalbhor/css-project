import React from "react";
import "./Recidencies.css";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { sliderSettings } from "../utils/common";
import data from "../utils/slider.json";

const Recidencies = () => {
  return (
    <section className="r-wrapper">o
        <div className="flexColStart r-head ">
          <span className="orangeText">Best Choices</span>
          <span className="primaryText">Popular Recidencies</span>
        </div>
        <div>
        <Swiper {...sliderSettings}>
          <SliderButtons/>
          { data.map((card,i)=>(
                            <SwiperSlide key={i}>
                                <div className="flexColStart r-card">
                                    <img className="card-img" src={card.image} alt="home" />

                                    <span className="secondaryText r-price">
                                        <span style={{color:"orange"}}>$</span>
                                        <span>{card.fees}</span>
                                    </span>
                {/* <span>{card.price}</span> */}
                <span className='primaryText'>{card.name}</span>
                <span className='secondaryText'>{card.details}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Recidencies;

const SliderButtons = () => {
  const swiper = useSwiper();
  return(
    <div className="flexCenter r-buttons">
      <button onClick={()=> swiper.slidePrev()}>&lt;</button>
      <button onClick={()=> swiper.slideNext()}>&gt;</button>
    </div>
  );
};
