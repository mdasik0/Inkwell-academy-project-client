import { Link, useRouteError } from "react-router-dom";
import { FaHome } from "react-icons/fa";

const Error = () => {
    const error = useRouteError();
  return (
    <div className="flex flex-col relative items-center justify-center">
      <Link
        className="absolute top-20 text-transparent right-[37%] cursor-pointer py-7 px-6 "
        to={"/"}
      >
        home
      </Link>
      <img className="rounded-full"
        src="https://cdn.dribbble.com/users/469578/screenshots/2597126/404-drib23.gif"
        alt=""
      />
      <div className="text-gray-500 absolute bottom-24 text-sm font-semibold">{error.data}</div>
      <Link to={'/'} className="my-3">
        <button className="btn btn-circle bg-gray-600 text-white hover:text-black">
          <FaHome></FaHome>
        </button>
      </Link>
    </div>
  );
};

export default Error;
