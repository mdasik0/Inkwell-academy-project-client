import { FaChair, FaDollarSign,  } from "react-icons/fa";
import Title from "../../Shared/Title/Title";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import useUserRole from "../../../Hooks/useUserRole";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import axios from "axios";
import { motion } from "framer-motion";

const Classes = () => {
  const navigate = useNavigate()
  const [classes,setclasses] = useState([])
  const {user} = useContext(AuthContext)
  
  useEffect(()=> {
    axios.get(`http://localhost:5000/approvedClasses`,{
      headers:{
        Authorization : `Bearer ${localStorage.getItem("access-token")}`
      }
    })
    .then(data => {
      setclasses(data?.data)
    })
  },[])
  const [userData] = useUserRole();

  const handleSelectedClass = (item) => {
    if(user){
      const selectedClass = {
        className: item.className,
        classImg: item.classImg,
        instructorEmail: item.email,
        email: user?.email,
        name: item.name,
        price: item.price,
        seats: item.seats,
        classId: item._id,
        payment: 'pending'
      };
      axios.post(`http://localhost:5000/selectedClass`,selectedClass,{
        headers: {
          "content-type": "application/json",
          Authorization : `Bearer ${localStorage.getItem("access-token")}`,
        },
      })
      
      .then(data => {
        if(data?.data?.insertedId){
          Swal.fire({
            title: "nice!!!",
            text: "You have success fully selected this class",
            icon: "success",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Go to selceted Classes",
          }).then((result) => {
            if (result.isConfirmed) {
              navigate('/dashboard/selectedClasses')
            }
          });
        }
      })
    }
    else{
        Swal.fire({
          title: "Please Sign In First!!!",
          text: "You are not signed in",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Go to Sign in Page",
        }).then((result) => {
          if (result.isConfirmed) {
            navigate('/signIn')
          }
        });
      
    }
  };


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
        {classes.map((data) => (
          <motion.div animate={{ scale:'100%'}} initial={{ scale:0}} transition={{delay:0.3,duration:0.5}} 
            key={data._id}
            className={data.seats <= 0  ? `pointer-events-none h-[500px] rounded-xl shadow-xl w-full md:w-[350px]  bg-red-600` : `h-[500px] rounded-xl shadow-xl w-full md:w-[350px] bg-white`}
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
                  <h1 className="text-xl font-semibold">{data.className}</h1>
                  <h4 className="text-sm font-semibold text-slate-400">
                    {data.name}
                  </h4>
                </div>
              </div>

              <div>
                <div className="flex flex-col items-start justify-evenly">
                  <div className="flex gap-2 items-center  rounded-full py-1 text-center">
                    <FaChair></FaChair>
                    <h3 className="text-xs text-slate-500 font-semibold">
                      Total Seats:
                    </h3>
                    <h2 className="text-xs font-semibold">{data.Totalseats}</h2>
                  </div>
                  <div className="flex gap-2 items-center  rounded-full py-1 text-center">
                    <FaChair></FaChair>
                    <h3 className="text-xs text-slate-500 font-semibold">
                      Available Seats:
                    </h3>
                    <h2 className="text-xs font-semibold">{data.seats}</h2>
                  </div>
                  <div className="flex gap-2 items-center rounded-full py-1 text-center">
                    <FaDollarSign></FaDollarSign>
                    <h3 className="text-xs text-slate-500 font-semibold">
                      Price:
                    </h3>
                    <h2 className="text-xs font-semibold">$ {data.price}</h2>
                  </div>
                </div>
                <div className="mt-2">
                  <div className="flex gap-1">
                    <h4 className="text-xs text-slate-400 ">Days Left:</h4>
                    <h5 className="text-xs font-semibold">1 Day</h5>
                  </div>
                </div>
                <button
                  
                  onClick={() => handleSelectedClass(data)}
                  className={userData === 'admin' && `btn-disabled bg-gray-500 flex items-start mt-3  text-white hover:text-black rounded-full px-[32px] text-sm font-bold py-1 hover:bg-red-300 duration-500 active:bg-blue-200 active:duration-150` || userData === 'instructor' && `btn-disabled flex bg-gray-500 items-start mt-3  text-white hover:text-black rounded-full px-[32px] text-sm font-bold py-1 hover:bg-red-300 duration-500 active:bg-blue-200 active:duration-150` || `flex items-start mt-3 bg-red-400 text-white hover:text-black rounded-full px-[32px] text-sm font-bold py-1 hover:bg-red-300 duration-500 active:bg-blue-200 active:duration-150`}
                >
                  {" "}
                  select
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Classes;
