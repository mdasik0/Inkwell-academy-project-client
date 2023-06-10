import { FaDollarSign, FaRegUser } from "react-icons/fa";
import Title from "../../Shared/Title/Title";

const Classes = () => {
  return (
    <div className=" md:w-[1280px] mx-auto w-full bg-blue-100 rounded-xl ">
      <Title
        topHeader={"All Classes"}
        bottomTitle={
          "Here are all the Classes/Courses available on this institute make sure to choose your faviourite one"
        }
      ></Title>
      <div className="md:p-10 p-3 grid md:grid-cols-3 grid-cols-1 gap-10">
        {/* card  */}
        <div className="h-[500px] rounded-xl shadow-xl w-full md:w-[350px] bg-white">
          <div className="h-[250px]">
            <img
              className=" w-full h-full object-cover p-3 rounded-[25px] "
              src="https://www.northwordnews.com/uploads/9/0/1/9/9019010/stephen-bauman-drawing_orig.jpg"
              alt=""
            />
          </div>
          <div className="h-[230px] flex flex-col justify-between px-4 w-full">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-xl font-semibold">
                  Fine art and shading and
                </h1>
                <h4 className="text-sm font-semibold text-slate-400">
                  instructor name
                </h4>
              </div>
              <div className="h-[65px] w-[65px]">
                <img
                  className="h-full w-full object-cover rounded-full"
                  src="https://i.ibb.co/4jz4ZBP/bauman.jpg"
                  alt=""
                />
              </div>
            </div>

            <div>
              <div className="flex flex-col items-start justify-evenly">
                <div className="flex gap-2 items-center  rounded-full py-1 text-center">
                  <FaRegUser></FaRegUser>
                  <h3 className="text-xs text-slate-500 font-semibold">Available Seats:</h3>
                  <h2 className="text-xs font-semibold">232</h2>
                </div>
                <div className="flex gap-2 items-center rounded-full py-1 text-center">
                  <FaDollarSign></FaDollarSign>
                  <h3 className="text-xs text-slate-500 font-semibold">Price:</h3>
                  <h2 className="text-xs font-semibold">$ 232</h2>
                </div>
              </div>
              <div className="mt-2">
                
                  
                  <div className="flex gap-1">
                    <h4 className="text-xs text-slate-400 ">Days Left:</h4>
                    <h5 className="text-xs font-semibold">1 Day</h5>
                  </div>
                </div>
              <button className="flex items-start mt-3 bg-red-400 text-white hover:text-black rounded-full w-1/2 px-[32px] text-sm font-bold py-1 hover:bg-red-300 duration-500 active:bg-blue-200 active:duration-150">
                {" "}
                Enroll Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Classes;
