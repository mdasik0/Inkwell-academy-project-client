import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Pagination } from "swiper";
import { motion } from "framer-motion";
const SliderBanner = () => {
  return (
    <motion.div animate={{ scale:'100%'}} initial={{ scale:0}} transition={{duration:2}}  className="mb-10">
      <Swiper
        pagination={{
          type: "progressbar",
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper rounded-b-xl"
      >
        <SwiperSlide>
          <img
            className="w-full"
            src='https://i.ibb.co/4ZL3P5Y/banner-1.png'
            alt=""
          />
          
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full"
            src="https://i.ibb.co/7gRR45z/banner-2.png"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full"
            src="https://i.ibb.co/P9bKnGp/banner-3.png"
            alt=""
          />
        </SwiperSlide>
      </Swiper>
    </motion.div>
  );
};

export default SliderBanner;
