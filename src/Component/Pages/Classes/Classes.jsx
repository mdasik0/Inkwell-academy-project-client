import { FaDollarSign, FaRegUser } from "react-icons/fa";
import Title from "../../Shared/Title/Title";
import { useQuery } from "@tanstack/react-query";

const Classes = () => {
  const { data: classes = [] } = useQuery(["users"], async () => {
    const res = await fetch("http://localhost:5000/approvedClasses");
    return res.json();
  });

  const handleSelectedClass = (item) => {
    console.log(item);
    const selectedClass = {
      className: item.className,
      classImg: item.classImg,
      email: item.email,
      name: item.name,
      price: item.price,
      seats: item.seats,
      classId: item._id,
      payment: 'pending'
    };
    fetch("http://localhost:5000/selectedClass", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(selectedClass)
    });
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
          <div
            key={data._id}
            className="h-[500px] rounded-xl shadow-xl w-full md:w-[350px] bg-white"
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
                    <FaRegUser></FaRegUser>
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
                  className="flex items-start mt-3 bg-red-400 text-white hover:text-black rounded-full w-1/2 px-[32px] text-sm font-bold py-1 hover:bg-red-300 duration-500 active:bg-blue-200 active:duration-150"
                >
                  {" "}
                  Enroll Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Classes;
