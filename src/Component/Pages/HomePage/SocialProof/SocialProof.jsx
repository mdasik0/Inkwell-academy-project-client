import "./SocialProof.css";

const SocialProof = () => {
  return (
    <div className="w-[700px] position_fixing flex justify-around items-center text-center h-[200px] rounded-lg bg-white text-gray-800 px-10">
      <div>
        <h1 className="text-5xl mb-3 font-semibold">21+</h1>
        <p className="font-medium">Teachers</p>
      </div>

      <span className="w-[1px] bg-gray-400 h-2/4"></span>

      <div>
        <h1 className="text-5xl mb-3 font-semibold">1000+</h1>
        <p className="font-medium">Students</p>
      </div>

      <span className="w-[1px] bg-gray-400 h-2/4"></span>
      <div>
        <h1 className="text-5xl mb-3 font-semibold">60+</h1>
        <p className="font-medium">Courses</p>
      </div>
    </div>
  );
};

export default SocialProof;
