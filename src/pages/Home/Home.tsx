import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import "./style.css";
import { Pagination, Autoplay, Navigation } from "swiper";
import "swiper/css/bundle";
import slide1 from "../../assets/images/slide1.jpg";
import slide2 from "../../assets/images/slide2.jpg";
import slide3 from "../../assets/images/slide3.jpg";
import AOS from "aos";
import { useEffect, useRef } from "react";
import Cards from "../../common/Cards/Cards";
import case1 from "../../assets/images/cases/case1.jpg";
import case2 from "../../assets/images/cases/case2.jpg";
import case3 from "../../assets/images/cases/case3.jpg";
import case4 from "../../assets/images/cases/case4.jpg";
import case5 from "../../assets/images/cases/case5.jpg";
import case6 from "../../assets/images/cases/case6.jpg";
import case7 from "../../assets/images/cases/case7.jpg";
import case8 from "../../assets/images/cases/case8.jpg";
import case9 from "../../assets/images/cases/case9.jpg";

const Home = () => {
  const caseSliderRef = useRef();
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  return (
    <main style={{ overflow: "hidden" }}>
      <Swiper
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        preloadImages={false}
        pagination={{
          dynamicBullets: true,
          clickable: true,
        }}
        loop
        modules={[Pagination, Autoplay]}
        className="mb-5"
      >
        <SwiperSlide>
          <img src={slide1} alt="slide1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide2} alt="slide2" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide3} alt="slide3" />
        </SwiperSlide>
      </Swiper>
      <div className="me-3">
        <Swiper
        dir="rtl"
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
                  slidesPerView={1}
                  spaceBetween={10}
                  pagination={{
                    clickable: true,
                  }}
                  breakpoints={{
                    320:{
                      slidesPerView: 1,
                      spaceBetween: 0,
                    },
                    450:{
                      slidesPerView: 2,
                      spaceBetween: 0,
                    },
                    620: {
                      slidesPerView: 3,
                      spaceBetween: 0,
                    },
                    870: {
                      slidesPerView: 4,
                      spaceBetween: 0,
                    },
                    1024: {
                      slidesPerView: 5,
                      spaceBetween: 0,
                    },
                  }}
                  modules={[Pagination,Autoplay]}
        >
          <SwiperSlide>
            <Cards price={141884800} img={case1} text="سیستم کوئین" />
          </SwiperSlide>
          <SwiperSlide>
            <Cards img={case2} price={113949600} text="سیستم آلتیمیت" />
          </SwiperSlide>
          <SwiperSlide>
            <Cards price={32034800} img={case3} text="سیستم ونتوس" />
          </SwiperSlide>
          <SwiperSlide>
            <Cards img={case4} price={14955000} text="سیستم پرایم" />
          </SwiperSlide>
          <SwiperSlide>
            <Cards img={case5} price={24294800} text="سیستم نووا" />
          </SwiperSlide>
          <SwiperSlide>
            <Cards img={case6} price={16350000} text="سیستم لایت" />
          </SwiperSlide>
          <SwiperSlide>
            <Cards img={case7} price={67357300} text="سیستم پرو مکس" />
          </SwiperSlide>
          <SwiperSlide>
            <Cards img={case8} price={54179800} text="سیستم تایتان" />
          </SwiperSlide>
          <SwiperSlide>
            <Cards img={case9} price={45944800} text="سیستم جگوار" />
          </SwiperSlide>
        </Swiper>
      </div>
    </main>
  );
};

export default Home;
