import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import banner1 from "@/assets/images/discount1.jpg";
import banner2 from "@/assets/images/saveEarth11.jpg";
import banner3 from "@/assets/images/saveEarth1.jpg";

const Banner = () => {
  return (
    <div className="mt-2 md:mt-0">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={banner1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={banner2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
        <img src={banner3} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
