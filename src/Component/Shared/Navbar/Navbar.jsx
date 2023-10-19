import "./Navbar.css"
import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";
import Swal from "sweetalert2";
import useUserRole from "../../../Hooks/useUserRole";
import logo from "../../../assets/logo/inkwell-logo-white.svg";
const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [userData] = useUserRole();

  const handleLogout = () => {
    logOut()
      .then(() => {
        Swal.fire(
          "LogOut Successful",
          "You have logged out of your account successfully!",
          "success"
        );
      })
      .catch((error) => console.error(error));
  };

  const Navbar = (
    <>
      <li>
        <NavLink to={"/"}>home</NavLink>
      </li>

      <li>
        <NavLink to={"/classes"}>classes</NavLink>
      </li>

      <li>
        <NavLink to={"/instructors"}>instructors</NavLink>
      </li>

      {user ? (
        <>
          <li>
            <NavLink
              to={
                (userData === "admin" && `/dashboard/manageClasses`) ||
                (userData === "instructor" && `/dashboard/myClass`) ||
                `/dashboard/selectedClasses`
              }
            >
              Dashboard
            </NavLink>
          </li>
          <li onClick={handleLogout}>
            <Link>Log Out</Link>
          </li>
        </>
      ) : (
        <>
          <li>
            <NavLink to={"/signIn"}>sign in</NavLink>
          </li>

          <li>
            <NavLink to={"/signUp"}>sign up</NavLink>
          </li>
        </>
      )}
    </>
  );
  return (
    <div className="flex items-center absolute justify-between right-[50%] left-[50%] top-14 -translate-x-[50%] mx-auto md:w-[1280px] text-white overflow-hidden bg-[#ffffff23]">
      <div className="">
        <div className="dropdown lg:hidden">
          <label tabIndex={0} className="btn btn-ghost ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={1}
            className="menu menu-sm static z-50 dropdown-content uppercase mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {/* navbar here */}
            {Navbar}
          </ul>
        </div>
        {/* Logo Here */}
        <div className="bg-[#1eb2a6] divSlid">
          <img
            className="h-full  w-[160px] py-3 pl-4 md:block hidden"
            src={logo}
            alt=""
          />
          {/* <div className="rightbox">

          </div> */}
        </div>
      </div>
      <div className={`hidden overflow-hidden lg:flex`}>
        <div className="menu uppercase font-semibold menu-horizontal px-1">
          {/* navbar here */}
          {Navbar}
        </div>
      </div>
      {/* {user ? (
        <div className="navbar-end">
          <div className="avatar online">
            <div className="md:w-14 w-12  rounded-full">
              <img src={user?.photoURL} />
            </div>
          </div>
        </div>
      ) : (
        <></>
      )} */}
    </div>
  );
};

export default Navbar;
