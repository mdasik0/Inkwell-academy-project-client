import { FaChair, FaRegClock, FaRegFileVideo, FaRegUser, FaStar } from "react-icons/fa";

const ClassData = ({ course }) => {
    const percentLeft = ((course.enrollmentCount / (course.enrollmentCount + course.seats)) * 100).toFixed(2);
    console.log()
  return (
    <div>
      <div className="h-[450px] rounded-xl my-6 md:my-10 shadow-xl w-full md:w-[350px] bg-white">
        <div className="h-[250px] relative">
          <img
            className=" w-full h-full object-cover p-3 rounded-[25px] "
            src={course.classImg}
            alt=""
          />
          <h4 className="absolute px-3 py-1 rounded-xl text-xs flex items-center gap-1 font-semibold text-red-500 right-5 top-5 bg-yellow-300">
            <FaStar></FaStar> Top Rated
          </h4>
        </div>
        <div className="h-[180px] flex flex-col justify-between px-4 w-full">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-xl font-semibold">{course.className}</h1>
              <h4 className="text-sm font-semibold text-slate-400">
                {course.name}
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
                <h2 className="text-xs font-semibold">
                  {course?.enrollmentCount}
                </h2>
              </div>
              <div
                data-tip="Seats Available"
                className="flex gap-1 tooltip bg-slate-100 px-3 rounded-full py-1 text-center"
              >
                <FaChair></FaChair>
                <h2 className="text-xs font-semibold">{course?.seats}</h2>
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
                value={percentLeft}
                max="100"
              ></progress>
              <div className="flex justify-between">
                <div className="flex gap-1">
                  <h4 className="text-xs text-slate-400 ">Enrolled:</h4>
                  <h5 className="text-xs font-semibold">{percentLeft}%</h5>
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
  );
};

export default ClassData;
