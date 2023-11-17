import { RxCross2 } from "react-icons/rx";
import { LuSearch } from "react-icons/lu";
import useUserRole from "../../../Hooks/useUserRole";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { Helmet } from "react-helmet-async";
import useEnroll from "../../../Hooks/useEnroll";
import "./Classes.css";
import CourseCard from "./CourseCard/CourseCard";

const Classes = () => {
  const [classes, setclasses] = useState([]);
  const [courseData, setCourseData] = useState([]);
  const [InputText, setInputText] = useState(false);
  const [clear, setClear] = useState(false);
  const { handleSelectedClass } = useEnroll();
  const inputValue = useRef();
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
        setCourseData(data?.data);
      });
  }, []);
  const [userData] = useUserRole();

  const handleInput = (e) => {
    e.preventDefault();
    const searchInput = e.target.value;

    if (searchInput) {
      setInputText(true);
    } else {
      setInputText(false);
    }

    const NewData = classes.filter((c) =>
      c.className.toLowerCase().includes(searchInput.toLowerCase())
    );
    if (courseData || searchInput) {
      setCourseData(NewData);
    } else {
      setCourseData(classes);
    }
  };
  if (clear) {
    inputValue.current.value = "";
    setClear(false);
    setInputText(false);
    setCourseData(classes);
  }

  return (
    <div className=" md:w-[1280px] mt-[170px] mx-auto w-full  rounded-xl ">
      <Helmet>
        <title>Inkwell | Courses</title>
      </Helmet>
      <div style={{
        backgroundImage: ` url(https://images.unsplash.com/photo-1513738260158-30e559c10093?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=1738)`,
        backgroundRepeat: "no-repeat",
      }} className="bg-[#1eb2a6] h-[150px] flex justify-center items-center">
        <>
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
        </>
      </div>

      <div className="md:p-10 p-3 grid md:grid-cols-3 grid-cols-1 gap-10">
        {/* card  */}
        {courseData.map((data) => (
          <CourseCard
            key={data._id}
            data={data}
            handleSelectedClass={handleSelectedClass}
            userData={userData}
          />
        ))}
      </div>
    </div>
  );
};

export default Classes;
