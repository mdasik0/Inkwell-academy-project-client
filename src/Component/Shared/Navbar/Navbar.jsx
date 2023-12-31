import "./Navbar.css";
import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";
import Swal from "sweetalert2";
import useUserRole from "../../../Hooks/useUserRole";
import logo from "../../../assets/logo/inkwell-logo-white.svg";
import logoColor from "../../../assets/logo/inkwell-logo-color.svg";
import { FiLogOut } from "react-icons/fi";
import { BiMenu } from "react-icons/bi";
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

      {/* this is the daymode lightmode button */}
      <li>
        <label className="swap swap-rotate">
          {/* this hidden checkbox controls the state */}
          <input type="checkbox" />

          {/* sun icon */}
          <svg
            className="swap-on fill-current w-5 h-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
          </svg>

          {/* moon icon */}
          <svg
            className="swap-off fill-current w-5 h-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
          </svg>
        </label>
      </li>
      {user && (
        <li onClick={handleLogout}>
          <Link className="text-lg ">
            <FiLogOut />
          </Link>
        </li>
      )}
    </>
  );
  return (
    <>
      {/* desktop Navbar Starts Here */}
      <div className="flex md:z-50 items-center md:absolute justify-between md:right-[50%] md:left-[50%] md:top-14 md:-translate-x-[50%] mx-auto md:w-[1280px] text-white overflow-hidden bg-[#00000063]">
        <div>
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
        <div className={`hidden lg:flex`}>
          <ul className="list-none text-sm gap-6 uppercase items-center mr-6  font-semibold flex px-1">
            {/* navbar here */}
            {Navbar}
          </ul>
        </div>
      </div>
      {/* desktop Navbar Ends Here */}
{/* 5=%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% */}
      {/* Mobile slidebar Starts Here */}
      <div className="md:hidden block">
        <div className="flex flex-row-reverse items-center bgPrimary text-white justify-between px-4 py-3">
          <label htmlFor="my-drawer" className="text-2xl drawer-button">
            <BiMenu />
          </label>
          <div className="text-xl uppercase">
            <img className="h-full  w-[120px] py-3 pl-4" src={logo} alt="" />
          </div>
        </div>
        <div className="drawer z-50">
          <input id="my-drawer" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content">{/* Page content here */}</div>
          <div className="drawer-side">
            <label
              htmlFor="my-drawer"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            <ul className="menu p-4 w-80 min-h-full z-50 bg-base-200 text-base-content">
              {/* Sidebar content here */}
              <div className="flex justify-between  mb-6">
                <img
                  className="h-full  w-[120px] py-3 pl-4"
                  src={logoColor}
                  alt=""
                />
                {/* night mode */}
                <div className="flex items-center gap-2">
                  {/* daymode nightmode button starts and ends with label */}
                  <label className="swap swap-rotate">
                    {/* this hidden checkbox controls the state */}
                    <input type="checkbox" />

                    {/* sun icon */}
                    <svg
                      className="swap-on fill-current w-5 h-5"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                    </svg>

                    {/* moon icon */}
                    <svg
                      className="swap-off fill-current w-5 h-5"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                    </svg>
                  </label>
                  {user && (
                    <li onClick={handleLogout}>
                      <Link className="text-lg ">
                        <FiLogOut />
                      </Link>
                    </li>
                  )}
                </div>
              </div>
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
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
