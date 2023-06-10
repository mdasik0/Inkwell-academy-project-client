import { Link } from "react-router-dom";
import Title from "../../../Shared/Title/Title";

const PopularInstructors = () => {
    return (
        <div className="bg-[#E6E6FA] rounded-xl my-10">
            <Title topHeader={'Popular Instructors'} bottomTitle={'Here are the most popular instructors of our institute By student count.'}></Title>
            <div className="grid md:grid-cols-4 grid-cols-1 gap-10 p-10">
                {/* card */}
                <div className="md:w-[250px] w-full shadow-xl bg-blue-200 p-4 rounded-xl h-[300px]">
                    <div>
                        <img className="rounded-full h-24 w-24 object-cover border-white border-[10px]" src="https://www.northwordnews.com/uploads/9/0/1/9/9019010/stephen-bauman-drawing_orig.jpg" alt="" />
                    </div>
                    <div className="my-6 text-start">
                        <h1 className="font-bold">Name: Stephen Bauman</h1>
                        <h5 className="text-xs mt-3 font-semibold text-slate-500"> Expreience: Teaching for 5 years</h5>
                        <button className="text-sm px-4 py-1 duration-500 active:duration-100 bg-[#E6E6FA] rounded-full font-bold shadow-md active:bg-blue-400 active:text-white hover:bg-[#ffc8a3] mt-3">see more</button>
                    </div>

                </div>


            </div>
            <div className="flex items-center justify-center md:pb-10 pb-3 w-full">

      <Link to={'/instructors'}><button className="px-5 py-1 text-white font-bold rounded text-xl duration-500 active:text-black active:duration-150 hover:bg-purple-500 bg-purple-600">See All</button></Link>
      </div>
        </div>
    );
};

export default PopularInstructors;