import Title from "../../Shared/Title/Title";

const Instructors = () => {
  return (
    <div className=" md:w-[1280px] mx-auto w-full bg-purple-100 rounded-xl ">
      <Title
        topHeader={"All Instructors"}
        bottomTitle={
          "Here are all of our Instructors. They are top rated in their field with many years of expreience"
        }
      ></Title>
      <div className="grid md:grid-cols-4 grid-cols-1 gap-14 md:p-10 p-3">
        {/* card start */}
        <div className="md:w-[250px] w-full shadow-xl bg-blue-500 p-4 rounded-xl h-[300px]">
          <div>
            <img
              className="rounded-full h-24 w-24 object-cover border-white border-[10px]"
              src="https://www.northwordnews.com/uploads/9/0/1/9/9019010/stephen-bauman-drawing_orig.jpg"
              alt=""
              />
          </div>
          <div className="my-6 text-start">
            <h1 className="font-semibold text-white">Stephen Bauman</h1>
            <h3 className="text-xs font-semibold text-slate-200 mt-2">Email: bauman@gmail.com</h3>
            <h5 className="text-xs mt-2 font-semibold text-slate-200">
              {" "}
              Expreience: Teaching for 5 years
            </h5>
            <button className="text-sm px-4 py-1 duration-500 active:duration-100 bg-[#E6E6FA] rounded-full font-bold shadow-md active:bg-blue-400 active:text-white hover:bg-[#ffc8a3] mt-3">
              See Classes
            </button>
          </div>
      
        </div>
      {/* card start */}
      </div>
    </div>
  );
};

export default Instructors;
