import { Link } from "react-router-dom";
import Title from "../../../Shared/Title/Title";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import ClassData from "./ClassData/ClassData";
const PopularClasses = () => {
  //

  const [classes, setClasses] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/popularClass`)
      .then((res) => res.json())
      .then((data) => {
        setClasses(data);
      });
  }, []);

  return (
    <motion.div animate={{ x: [0,100,0] }} transition={{ ease: "easeOut", duration: 2, type: "spring" }} className="bg-blue-100 rounded-xl my-10 md:px-10 px-5">
      
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
          <button className="px-5 py-1 text-white font-bold rounded text-xl duration-500 active:text-black active:duration-150 hover:bg-blue-500 bg-blue-600">
            See All
          </button>{" "}
        </Link>
      </div>
    </motion.div>
  );
};

export default PopularClasses;
