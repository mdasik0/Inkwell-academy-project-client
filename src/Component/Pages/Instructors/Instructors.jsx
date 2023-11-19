import axios from "axios";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import InstructorCard from "./InstructorCard/InstructorCard";


const Instructors = () => {
  const [instructors, setInstructors] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://b7a12-summer-camp-server-side-mdasik0.vercel.app/instructors`
      )
      .then((data) => {
        setInstructors(data.data);
      });
  }, []);

  console.log(instructors);
  return (
    <div className=" md:w-[1280px] lg:mt-[130px] mx-auto w-full ">
      <Helmet>
        <title>Inkwell | Instructors</title>
      </Helmet>
      
        <h1 className="text-5xl font-bold mx-6 mt-10">Instructors</h1>
      <div className="grid md:grid-cols-4 my-10 grid-cols-1 gap-14 mb-10">
        {/* card  */}
        {
          instructors.map(instructor => <InstructorCard key={instructor._id} instructor={instructor} />)
        }
      </div>
    </div>
  );
};

export default Instructors;
