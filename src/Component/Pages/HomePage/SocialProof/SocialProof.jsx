import CountUp from 'react-countup';
import "./SocialProof.css";

const SocialProof = () => {
  return (
    <div className="lg:w-[700px] w-4/5 position_fixing flex justify-around items-center text-center lg:h-[200px] h-[100px] rounded-lg bg-white text-gray-800 lg:px-10 px-3">
      <div>
        <h1 className="lg:text-5xl text-3xl mb-3  font-semibold"><CountUp end={50} />+</h1>
        <p className="font-medium">Teachers</p>
      </div>

      <span className="w-[1px] bg-gray-400 h-2/4"></span>

      <div>
        <h1 className="lg:text-5xl text-3xl mb-3  font-semibold"><CountUp end={1200} />+</h1>
        <p className="font-medium">Students</p>
      </div>

      <span className="w-[1px] bg-gray-400 h-2/4"></span>
      <div>
        <h1 className="lg:text-5xl text-3xl mb-3  font-semibold"><CountUp end={100} />+</h1>
        <p className="font-medium">Courses</p>
      </div>
    </div>
  );
};

export default SocialProof;
