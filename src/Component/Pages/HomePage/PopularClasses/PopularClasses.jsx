import { Link } from "react-router-dom";
import Title from "../../../Shared/Title/Title";
import { useEffect, useState } from "react";
import ClassData from "./ClassData/ClassData";
const PopularClasses = () => {
  //

  const [classes, setClasses] = useState([]);

  useEffect(() => {
    fetch(
      `https://b7a12-summer-camp-server-side-mdasik0.vercel.app/popularClass`
    )
      .then((res) => res.json())
      .then((data) => {
        setClasses(data);
      });
  }, []);

  return (
    <div
      data-aos="fade-right"
      className="bg-blue-100 rounded-xl my-10 md:px-10 px-5"
    >
      <Title
        topHeader={"Popular classes"}
        bottomTitle={
          "In here we will be showing our institutes top 6 classes by student choice."
        }
      ></Title>
      <div className="gap-10 grid md:grid-cols-3 grid-cols-1">
        {/* card  */}
        {classes.map((course) => (
          <ClassData key={course._id} course={course}></ClassData>
        ))}
      </div>
      <div className="flex items-center justify-center md:pb-10 pb-3 w-full">
        <Link to={"/classes"}>
          <button
            data-aos="zoom-in"
            data-aos-duration="1000"
            className="px-5 py-1 text-white font-bold rounded text-xl duration-500 active:text-black active:duration-150 hover:bg-blue-500 bg-blue-600"
          >
            See All
          </button>{" "}
        </Link>
      </div>
    </div>
  );
};

export default PopularClasses;
