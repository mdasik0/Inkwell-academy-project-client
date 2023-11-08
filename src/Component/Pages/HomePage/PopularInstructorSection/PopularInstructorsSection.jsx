import { useEffect, useState } from "react";

import InstructorCard from "./InstructorCard/InstructorCard";

const PopularInstructorsSection = () => {
  const [instructors, setInstructors] = useState([]);

  useEffect(() => {
    fetch(
      `https://b7a12-summer-camp-server-side-mdasik0.vercel.app/instructorsSix`
    )
      .then((res) => res.json())
      .then((data) => {
        setInstructors(data);
      });
  }, []);
  return (
    <div className="h-[80vh] mt-20">
      <h1 className="text-4xl font-bold text-center mb-10">
        Our renowned <span className="text-[#1eb2a6]">Instructors</span>
      </h1>
      <div className="p-10 grid grid-cols-3 gap-10">
        {instructors.map((teacher) => (
          <InstructorCard key={teacher._id} teacher={teacher} />
        ))}
      </div>
    </div>
  );
};

export default PopularInstructorsSection;
