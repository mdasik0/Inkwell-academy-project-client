import { BsArrowRightShort } from "react-icons/bs";
import ClassesSlider from "./ClassesSlider/ClassesSlider";
import { Link } from "react-router-dom";
const PopularClassesSection = () => {
  return (
    <div className=" p-6 flex md:flex-row flex-col justify-between items-center">
      {/* info */}
      <div className="md:w-1/2 w-full md:p-4 mb-4">
        {/* title  */}
        <div className="text-5xl font-bold">
          <h1 className="text-[#1eb2a6]">Explore</h1>
          <h1 className="my-3">Our Popular</h1>
          <h1>Classes</h1>
        </div>
        {/* description */}
        <p className="font-semibold mt-8">
          Discover our top classes, designed to enhance your skills and fuel
          your passion. Join our friendly community and start your learning
          journey today!
        </p>
        <Link to={"/classes"} className="bg-[#1eb2a6] w-fit hover:bg-gray-200 duration-300 hover:text-[#1eb2a6]  text-white pl-5 pr-3 py-2 rounded mt-8 flex items-center gap-1 font-semibold">
          See More <BsArrowRightShort className="text-2xl" />
        </Link>
      </div>
      {/* classes */}
      <div className="md:w-1/3 w-full">
        <ClassesSlider />
      </div>
    </div>
  );
};

export default PopularClassesSection;
