import axios from "axios";
import Title from "../../Shared/Title/Title";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";

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

  return (
    <div className=" md:w-[1280px] mx-auto w-full bg-purple-100 rounded-xl ">
      <Helmet>
        <title>Inkwell | Instructors</title>
      </Helmet>
      <Title
        topHeader={"All Instructors"}
        bottomTitle={
          "Here are all of our Instructors. They are top rated in their field with many years of expreience"
        }
      ></Title>
      <div className="grid md:grid-cols-4 grid-cols-1 gap-14 md:p-10 p-3">
        {/* card start */}
        {instructors.map((instructor) => (
          <motion.div
            animate={{ y: 0 }}
            initial={{ y: "30%" }}
            transition={{ delay: 0.1, duration: 0.5 }}
            key={instructor._id}
            className="md:w-[250px] w-full shadow-xl bg-blue-500 p-4 overflow-hidden rounded-xl h-[300px]"
          >
            <div>
              <motion.img
                animate={{ scale: [0, 1.1, 1] }}
                transition={{ delay: 0.5, duration: 0.9 }}
                className="rounded-full h-24 w-24 object-cover border-white border-[10px]"
                src={instructor.photo}
                alt=""
              />
            </div>
            <div className="my-6 text-start">
              <motion.h1
                animate={{ x: [-100, 0] }}
                transition={{ delay: 0.1, duration: 0.8 }}
                className="font-semibold text-white"
              >
                {instructor.name}
              </motion.h1>
              <h3 className="text-xs font-semibold text-slate-200 mt-2">
                Email: {instructor.email}
              </h3>
              <h5 className="text-xs mt-2 font-semibold text-slate-200">
                {" "}
                Expreience: Teaching for 5 years
              </h5>
              <motion.button
                whileHover={{ scale: 1.1 }}
                className="text-sm px-4 py-1 duration-500 active:duration-100 bg-[#E6E6FA] rounded-full font-bold shadow-md active:bg-blue-400 active:text-white hover:bg-[#ffc8a3] mt-3"
              >
                See Classes
              </motion.button>
            </div>
          </motion.div>
        ))}
        {/* card start */}
      </div>
    </div>
  );
};

export default Instructors;
