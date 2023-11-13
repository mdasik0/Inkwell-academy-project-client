import { SwiperSlide } from "swiper/react";
import useEnroll from "../../../../../../Hooks/useEnroll";
import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";

const SingleSlide = ({ course }) => {
  const { handleSelectedClass } = useEnroll();

  let [isOpen, setIsOpen] = useState(false)



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
          <button onClick={() => handleSelectedClass(course)} className="bg-[#1eb2a6] mt-3 w-full px-6 py-3 font-semibold text-white rounded hover:bg-white hover:text-[#1eb2a6] duration-300">
            Enroll
          </button>
          <button onClick={() => setIsOpen(true)} className="border border-[#1eb2a6] hover:bg-[#1eb2a6] hover:text-white duration-300 text-[#1eb2a6] mt-3 w-full px-6 py-3 font-semibold  rounded">
            Details
          </button>


          <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={() => setIsOpen(false)}>
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
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    {course.name}
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      Your payment has been successfully submitted. We&apos;ve sent
                      you an email with all of the details of your order.
                    </p>
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={() => setIsOpen(false)}
                    >
                      Got it, thanks!
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
