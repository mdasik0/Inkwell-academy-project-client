import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useSwiper } from "swiper/react";

const SwiperNav = () => {

    const swiper = useSwiper()

    return (
        <div className="flex gap-6 mt-3">
        <button onClick={() => swiper.slidePrev()} className="p-2 hover:bg-gray-400 duration-300 text-2xl cursor-pointer rounded-full bg-gray-300">
          <IoIosArrowBack />
        </button>
        <button onClick={() => swiper.slideNext()} className="p-2 hover:bg-gray-400 duration-300 text-2xl cursor-pointer rounded-full bg-gray-300">
          <IoIosArrowForward />
        </button>
      </div>
    );
};

export default SwiperNav;