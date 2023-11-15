import { FaChair, FaDollarSign } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { LuSearch } from "react-icons/lu";
import useUserRole from "../../../Hooks/useUserRole";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { Helmet } from "react-helmet-async";
import useEnroll from "../../../Hooks/useEnroll";
import "./Classes.css";

const Classes = () => {
  const [classes, setclasses] = useState([]);
  const [InputText, setInputText] = useState(false);
  const [clear, setClear] = useState(false);
  const { handleSelectedClass } = useEnroll();

  const inputValue = useRef();

  const handleInput = (e) => {
    e.preventDefault();
    const todoInput = e.target.value;
    if (todoInput) {
      setInputText(true);
    } else {
      setInputText(false);
    }
  };
  if (clear) {
    inputValue.current.value = "";
    setClear(false);
    setInputText(false);
  }

  useEffect(() => {
    axios
      .get(
        `https://b7a12-summer-camp-server-side-mdasik0.vercel.app/approvedClasses`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access-token")}`,
          },
        }
      )
      .then((data) => {
        setclasses(data?.data);
      });
  }, []);
  const [userData] = useUserRole();

  return (
    <div className=" md:w-[1280px] mt-[170px] mx-auto w-full  rounded-xl ">
      <Helmet>
        <title>Inkwell | Classes</title>
      </Helmet>
      <div className="bg-yellow-400 h-[150px] flex justify-center items-center">
        <form>
          <div className="bg-white px-3 py-2 border-2 flex items-center gap-2 rounded w-[500px] border-[#1eb2a6]">
            <LuSearch className="text-xl text-[#1eb2a6]" />
            <input
              type="text"
              onChange={handleInput}
              ref={inputValue}
              placeholder={`Enter Course Name to search`}
              className="outline-none w-full bg-transparent"
            />
            {InputText ? (
              <RxCross2
                onClick={() => setClear(true)}
                title="Clear"
                className={`text-xl text-red-600 cursor-pointer duration-200 hover:text-red-700`}
              />
            ) : (
              ""
            )}
          </div>
        </form>
      </div>

      <div className="md:p-10 p-3 grid md:grid-cols-3 grid-cols-1 gap-10">
        {/* card  */}
        {classes.map((data) => (
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
        ))}
      </div>
    </div>
  );
};

export default Classes;
