import { Swiper, SwiperSlide } from "swiper/react";
import "./ClassesSlider.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import SwiperCore, { Pagination, Keyboard, Autoplay } from "swiper";
import SwiperNav from "./SwiperNav/SwiperNav";
import { useEffect, useState } from "react";
import SingleSlide from "./SingleSlide/SingleSlide";

SwiperCore.use([Pagination, Keyboard, Autoplay]);

const ClassesSlider = () => {
  const [Courses, setCourses] = useState([]);

  useEffect(() => {
    fetch(
      `https://b7a12-summer-camp-server-side-mdasik0.vercel.app/popularClass`
    )
      .then((res) => res.json())
      .then((data) => {
        setCourses(data);
      });
  }, []);

  return (
    <Swiper
      cssMode={true}
      pagination={true}
      loop={true}
      autoplay={{
        delay: 4000,
        disableOnInteraction: false,
      }}
      keyboard={true}
      modules={[Autoplay, Pagination, Keyboard]}
      className="mySwiper"
    >
      {Courses.map((course) => (
        <SwiperSlide key={course._id}>
          <SingleSlide course={course} />
        </SwiperSlide>
      ))}
      <SwiperNav />
    </Swiper>
  );
};

export default ClassesSlider;
