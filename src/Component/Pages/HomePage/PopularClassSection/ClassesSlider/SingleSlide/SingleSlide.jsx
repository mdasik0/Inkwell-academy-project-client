import { SwiperSlide } from "swiper/react";

const SingleSlide = ({ course }) => {
  return (
    <SwiperSlide>
      <div
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.911)), url(${course.classImg})`,
          backgroundPosition: "center",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat"
        }}
        className="w-full rounded-lg flex flex-col justify-end h-[600px] bg-stone-900 p-6"
      >
        <div>
          <div>
            <h3
              style={{ fontFamily: "Bebas Neue, sans-serif" }}
              className="mt-3 text-3xl text-white "
            >
              {course.className}
            </h3>
            <p className="text-gray-300">by {course.name}</p>

            <h4 className="mt-3 text-xl font-bold text-[#1eb2a6]">
              ${course.price}
            </h4>
          </div>
        </div>
        <div className="flex w-full gap-6">
          <button className="bg-[#1eb2a6] mt-3 w-full px-6 py-3 font-semibold text-white rounded hover:bg-white hover:text-[#1eb2a6] duration-300">
            Enroll
          </button>
          <button className="border border-[#1eb2a6] hover:bg-[#1eb2a6] hover:text-white duration-300 text-[#1eb2a6] mt-3 w-full px-6 py-3 font-semibold  rounded">
            Details
          </button>
        </div>
      </div>
    </SwiperSlide>
  );
};

export default SingleSlide;
