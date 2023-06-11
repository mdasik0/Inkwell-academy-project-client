import { Link } from "react-router-dom";
import Title from "../../../Shared/Title/Title";

import { FaStar, FaRegUser, FaRegFileVideo, FaRegClock } from "react-icons/fa";
const PopularClasses = () => {
  return (
    <div className="bg-blue-100 rounded-xl my-10 md:px-10 px-5">
      <Title
        topHeader={"Popular classes"}
        bottomTitle={
          "In here we will be showing our institutes top 6 classes by student choice."
        }
      ></Title>
      <div className="gap-10 grid md:grid-cols-3 grid-cols-1">
        {/* card  */}
        <div className="h-[450px] rounded-xl my-6 md:my-10 shadow-xl w-full md:w-[350px] bg-white">
          <div className="h-[250px] relative">
            <img
              className=" w-full h-full object-cover p-3 rounded-[25px] "
              src="https://www.northwordnews.com/uploads/9/0/1/9/9019010/stephen-bauman-drawing_orig.jpg"
              alt=""
            />
            <h4 className="absolute px-3 py-1 rounded-xl text-xs flex items-center gap-1 font-semibold text-red-500 right-5 top-5 bg-yellow-300">
              <FaStar></FaStar> Top Rated
            </h4>
          </div>
          <div className="h-[180px] flex flex-col justify-between px-4 w-full">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-xl font-semibold">
                  Fine art and shading and
                </h1>
                <h4 className="text-sm font-semibold text-slate-400">
                  instructor name
                </h4>
              </div>
              
            </div>

            <div>
              <div className="flex items-center justify-evenly">
                <div
                  data-tip="enrolled"
                  className="flex tooltip gap-1 bg-slate-100 px-3 rounded-full py-1 text-center"
                >
                  <FaRegUser></FaRegUser>
                  <h2 className="text-xs font-semibold">232</h2>
                </div>
                <div
                  data-tip="videos"
                  className="flex gap-1 tooltip bg-slate-100 px-3 rounded-full py-1 text-center"
                >
                  <FaRegFileVideo></FaRegFileVideo>
                  <h2 className="text-xs font-semibold">25</h2>
                </div>
                <div
                  data-tip="course duration"
                  className="flex gap-1 tooltip bg-slate-100 px-3 rounded-full py-1 text-center"
                >
                  <FaRegClock></FaRegClock>
                  <h2 className="text-xs font-semibold">3month</h2>
                </div>
              </div>
              <div className="mt-2">
                <progress
                  className="progress progress-error mb-1 w-full"
                  value="80"
                  max="100"
                ></progress>
                <div className="flex justify-between">
                  <div className="flex gap-1">
                    <h4 className="text-xs text-slate-400 ">Enrolled:</h4>
                    <h5 className="text-xs font-semibold">80%</h5>
                  </div>
                  <div className="flex gap-1">
                    <h4 className="text-xs text-slate-400 ">Days Left:</h4>
                    <h5 className="text-xs font-semibold">1 Day</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center md:pb-10 pb-3 w-full">
        <Link to={'/classes'}><button className="px-5 py-1 text-white font-bold rounded text-xl duration-500 active:text-black active:duration-150 hover:bg-blue-500 bg-blue-600">
          See All
        </button> </Link>
      </div>
    </div>
  );
};

export default PopularClasses;
