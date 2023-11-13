import { SwiperSlide } from "swiper/react";
import useEnroll from "../../../../../../Hooks/useEnroll";
import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { PiChairBold, PiChairFill, PiStudentDuotone } from "react-icons/pi";
import { TbCurrencyTaka } from "react-icons/tb";

const SingleSlide = ({ course }) => {
  const { handleSelectedClass } = useEnroll();

  let [isOpen, setIsOpen] = useState(false);

  const handleEnroll = (course) => {
    handleSelectedClass(course);

    setIsOpen(false);
  };

  return (
    <SwiperSlide>
      <div
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.911)), url(${course.classImg})`,
          backgroundPosition: "center",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
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
          <button
            onClick={() => handleSelectedClass(course)}
            className="bg-[#1eb2a6] mt-3 w-full px-6 py-3 font-semibold text-white rounded hover:bg-white hover:text-[#1eb2a6] duration-300"
          >
            Enroll
          </button>
          <button
            onClick={() => setIsOpen(true)}
            className="border border-[#1eb2a6] hover:bg-[#1eb2a6] hover:text-white duration-300 text-[#1eb2a6] mt-3 w-full px-6 py-3 font-semibold  rounded"
          >
            Details
          </button>

          <Transition appear show={isOpen} as={Fragment}>
            <Dialog
              as="div"
              className="relative z-10"
              onClose={() => setIsOpen(false)}
            >
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="fixed inset-0 bg-black/50" />
              </Transition.Child>

              <div className="fixed inset-0 overflow-y-auto">
                <div className="flex min-h-full items-center justify-center p-4 text-center">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                  >
                    <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                      <Dialog.Title
                        as="h3"
                        style={{ fontFamily: "Bebas Neue, sans-serif" }}
                        className="text-xl font-medium leading-6 text-gray-900"
                      >
                        {course.className} Details:
                      </Dialog.Title>
                      <div className="mt-2">
                        <img
                          className="w-full h-[300px] object-contain bg-stone-700 rounded-xl"
                          src={course.classImg}
                          alt="course image"
                        />
                        <h3 className="mt-3 text-sm font-bold text-stone-500">
                          {" "}
                          By {course.name}
                        </h3>
                        <p className="text-stone-700 mt-3 flex items-center gap-2 font-semibold">
                          <TbCurrencyTaka />
                          {course.price}
                        </p>
                        <p className="text-stone-700 mt-3 flex items-center gap-2 font-semibold">
                          {" "}
                          <PiChairBold className="text-xl" />
                          Total Seats: {course.Totalseats}
                        </p>
                        <p className="text-stone-700 mt-3 flex items-center gap-2 font-semibold">
                          <PiChairFill className="text-xl" />
                          Available Seats: {course.seats}
                        </p>
                        <p className="text-stone-700 mt-3 flex items-center gap-2 font-semibold">
                          <PiStudentDuotone />
                          Student Enrolled: {course.enrollmentCount}
                        </p>
                      </div>

                      <div className="mt-4 w-full flex gap-3">
                        <button
                          type="button"
                          className="inline-flex justify-center rounded-md border border-transparent bg-[#1eb2a6] px-4 py-2 text-sm font-medium text-white flex-1 duration-500 hover:bg-[#10fde9] focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                          onClick={() => handleEnroll(course)}
                        >
                          Enroll
                        </button>
                        <button
                          type="button"
                          className="inline-flex justify-center rounded-md border border-transparent bg-[#1eb2a6] px-4 py-2 text-sm font-medium text-white flex-1 duration-500 hover:bg-[#10fde9] focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                          onClick={() => setIsOpen(false)}
                        >
                          Close
                        </button>
                      </div>
                    </Dialog.Panel>
                  </Transition.Child>
                </div>
              </div>
            </Dialog>
          </Transition>
        </div>
      </div>
    </SwiperSlide>
  );
};

export default SingleSlide;
