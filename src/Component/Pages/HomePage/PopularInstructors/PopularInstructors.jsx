import { Link } from "react-router-dom";
import Title from "../../../Shared/Title/Title";
import { useState } from "react";
import axios from "axios";

const PopularInstructors = () => {
  const [instructors, setInstructors] = useState([]);

  axios
    .get(
      `https://b7a12-summer-camp-server-side-mdasik0.vercel.app/instructorsSix`
    )
    .then((data) => {
      setInstructors(data.data);
    });
  return (
    <div className="bg-[#E6E6FA] rounded-xl my-10">
      <Title
        topHeader={"Popular Instructors"}
        bottomTitle={
          "Here are the most popular instructors of our institute By student count."
        }
      ></Title>
      <div className="grid md:grid-cols-4 grid-cols-1 gap-10 p-10">
        {/* card */}
        {instructors.map((instructor) => (
          <div
            data-aos="fade-right"
            data-aos-duration="700"
            data-aos-offset="200"
            key={instructor._id}
            className="md:w-[250px] overflow-hidden w-full shadow-xl bg-blue-500 p-4 rounded-xl h-[300px]"
          >
            <div>
              <img
                data-aos="zoom-in"
                data-aos-duration="600"
                className="rounded-full h-24 w-24 object-cover border-white border-[10px]"
                src={instructor.photo}
                alt=""
              />
            </div>
            <div
              data-aos="fade-right"
              data-aos-duration="500"
              className="my-6 text-start"
            >
              <h1 className="font-semibold text-white">{instructor.name}</h1>
              <h3 className="text-xs font-semibold text-slate-200 mt-2">
                Email: {instructor.email}
              </h3>
              <h5 className="text-xs mt-2 font-semibold text-slate-200">
                {" "}
                Expreience: Teaching for 5 years
              </h5>
              <button className="text-sm px-4 py-1 duration-500 active:duration-100 bg-[#E6E6FA] rounded-full font-bold shadow-md active:bg-blue-400 active:text-white hover:bg-[#ffc8a3] mt-3">
                See Classes
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-center md:pb-10 pb-3 w-full">
        <Link to={"/instructors"}>
          <button
            data-aos="zoom-in"
            data-aos-duration="1000"
            className="px-5 py-1 text-white font-bold rounded text-xl duration-500 active:text-black active:duration-150 hover:bg-purple-500 bg-purple-600"
          >
            See All
          </button>
        </Link>
      </div>
    </div>
  );
};

export default PopularInstructors;
