import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./slicer.scss";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
const Slider = () => {
  return (
    <>
      <Swiper
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="background">
            <div className="slideChild">
              <h1>Welcome to Location based service recommendation</h1>
              <p>
                "Welcome to our webpage, where we bring you the power of
                location-based services and cost recommendations! Discover the
                best deals, discounts, and affordable options in your area with
                just a few clicks.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="background">
            <div className="slideChild">
              <h1>Subscription methods available</h1>
              <p>
                which includes more features,addfree content,premium access
                based on choosed subscription type
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="background">
            <div className="slideChild">
              <h1>Use of location based recommendation based system </h1>
              <p>
                The LBRS system provides the service cost as per user interest
                or preferences.The service can be accessed from anywhere in any
                type of device.The use should have proper network connectivity.
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};
export default Slider;
