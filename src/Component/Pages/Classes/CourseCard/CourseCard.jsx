import { FaChair, FaDollarSign } from "react-icons/fa";

const CourseCard = ({handleSelectedClass, userData, data}) => {
    return (
        <div
            key={data._id}
            className={
              data.seats <= 0
                ? `pointer-events-none h-[500px] rounded-xl shadowCustomClass w-full md:w-[350px]  bg-red-600`
                : `h-[500px] rounded-2xl cursor-pointer hover:scale-105 hover:bg-[#54dfd3]  duration-500 shadowCustomClass w-full md:w-[350px] bg-white`
            }
          >
            <div className="h-[250px]">
              <img
                className=" w-full h-full object-cover p-3 rounded-[25px] "
                src={data.classImg}
                alt=""
              />
            </div>
            <div className="h-[230px] flex flex-col justify-between px-4 w-full">
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-2xl Bebas_font">{data.className}</h1>
                  <h4 className="text-sm text-stone-600">By {data.name}</h4>
                </div>
              </div>

              <>
                <div className="flex flex-col font-medium items-start justify-evenly">
                  <div className="flex gap-2 items-center  rounded-full py-1 text-center">
                    <FaChair></FaChair>
                    <h3 className="text-sm text-stone-600">Total Seats:</h3>
                    <h2 className="text-sm">{data.Totalseats}</h2>
                  </div>
                  <div className="flex gap-2 items-center  rounded-full py-1 text-center">
                    <FaChair></FaChair>
                    <h3 className="text-sm text-stone-600">Available Seats:</h3>
                    <h2 className="text-sm">{data.seats}</h2>
                  </div>
                  <div className="flex gap-2 items-center rounded-full py-1 text-center">
                    <FaDollarSign></FaDollarSign>
                    <h3 className="text-sm text-stone-600">Price:</h3>
                    <h2 className="text-sm">$ {data.price}</h2>
                  </div>
                </div>
                <div className="mt-2">
                  <div className="flex gap-1">
                    <h4 className="text-sm text-stone-600">Days Left:</h4>
                    <h5 className="text-sm">1 Day</h5>
                  </div>
                </div>
                <button
                  onClick={() => handleSelectedClass(data)}
                  className={
                    (userData === "admin" &&
                      `btn-disabled bg-gray-500 flex items-start mt-3  text-white  rounded-full px-[32px] text-sm font-bold py-1 hover:bg-[#69fff2] duration-500 active:bg-blue-200 active:duration-150`) ||
                    (userData === "instructor" &&
                      `btn-disabled flex bg-gray-500 items-start mt-3  text-white  rounded-full px-[32px] text-sm font-bold py-1 hover:bg-[#69fff2] duration-500 active:bg-blue-200 active:duration-150`) ||
                    `flex items-start mt-3 bg-[#1eb2a6] text-white  rounded-full px-[32px] text-sm font-bold py-1 hover:bg-[#69fff2] duration-500 active:bg-blue-200 active:duration-150`
                  }
                >
                  Enroll
                </button>
              </>
            </div>
          </div>
    );
};

export default CourseCard;