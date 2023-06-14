import { useContext } from "react";
import {
  FaBusinessTime,
  FaFileAlt,
  FaFolderPlus,
  FaHome,
  FaReceipt,
  FaRegCopy,
  FaShoppingCart,
  FaSignOutAlt,
  FaUserEdit,
  FaUserTie,
  FaWallet,
} from "react-icons/fa";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import useUserRole from "../Hooks/useUserRole";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";

const DashBoard = () => {
  const { user, logOut } = useContext(AuthContext);
  const [userData] = useUserRole();
  const navigate = useNavigate();

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
      navigate("/");
  };

  return (
    <div>
      <Helmet>
        <title>Inkwell | DashBoard</title>
      </Helmet>
      <div className="drawer lg:drawer-open drawer-overlay bg-slate-100">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center">
          <label
            htmlFor="my-drawer-2"
            className="btn ml-auto btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
          <Outlet></Outlet>
        </div>
        <div className="drawer-side text-slate-400 md:w-0 w-2/3 bg-slate-900">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>

          <ul className="menu h-full text-sm font-semibold p-4 pr-0 md:w-80 w-full">
            <div className="w-full my mx-auto">
              <div className="flex items-end my-4 justify-center gap-2">
                <img data-aos="fade-right" data-aos-easing="linear" 
                  className="h-10 md:block hidden"
                  src="https://i.ibb.co/98tg6ry/favicon.png"
                  alt=""
                />
                <h4 data-aos="fade-right" data-aos-easing="linear"  className="text-2xl md:flex-none flex items-baseline  logo_font">
                  Inkwell <span className="text-xs">.Academy</span>
                </h4>
              </div>
              {user ? (
                <div  className="text-center my-6">
                  <div className="avatar online">
                    <div data-aos="zoom-in" data-aos-easing="ease-in-sine" className="md:w-14 w-12  rounded-full">
                      <img src={user?.photoURL} />
                    </div>
                  </div>
                  <h3 data-aos="fade-right" data-aos-easing="linear"  className="text-white">{user?.displayName}</h3>
                  <h3 data-aos="fade-right" data-aos-easing="linear"  className="text-slate-600 text-xs ">{userData}</h3>
                </div>
              ) : (
                <></>
              )}
            </div>

            <div className="border border-slate-600 w-full my-5"></div>
            {(userData === "admin" && (
              //  Admin DashBoard
              <>
                <li >
                  <NavLink to="manageClasses">
                    <FaBusinessTime></FaBusinessTime> Manage Classes
                  </NavLink>
                </li>
                <li>
                  <NavLink to="manageUsers">
                    <FaUserEdit></FaUserEdit> Manage Users
                  </NavLink>
                </li>
              </>
            )) ||
              (userData === "instructor" && (
                //  instructor DashBoard
                <>
                  <li>
                    <NavLink to="myClass">
                      <FaRegCopy></FaRegCopy> My Classes
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="addAClass">
                      <FaFolderPlus></FaFolderPlus> Add a Class
                    </NavLink>
                  </li>
                </>
              )) || (
                //   user DashBoard
                <>
                  <li data-aos-delay="300" data-aos="fade-right" data-aos-easing="linear">
                    <NavLink to="selectedClasses">
                      <FaShoppingCart></FaShoppingCart> My Selected Classes
                    </NavLink>
                  </li>
                  <li  data-aos-delay="600" data-aos="fade-right" data-aos-easing="linear">
                    <NavLink to="enrolledClasses">
                      <FaReceipt></FaReceipt> My Enrolled Classes
                    </NavLink>
                  </li>
                  <li  data-aos-delay="900" data-aos="fade-right" data-aos-easing="linear">
                    <NavLink to="paymentHistory">
                      <FaWallet></FaWallet> Payment History
                    </NavLink>
                  </li>
                </>
              )}

            <div className="border border-slate-600 w-full my-5"></div>
            <li data-aos-duration="500" data-aos="fade-right" data-aos-easing="linear" >
              <NavLink to="/">
                <FaHome></FaHome> Home
              </NavLink>{" "}
            </li>
            <li data-aos="fade-right" data-aos-duration="900" data-aos-easing="linear" >
              <NavLink to={"/classes"}>
                <FaFileAlt></FaFileAlt>classes
              </NavLink>
            </li>

            <li data-aos-duration="1400" data-aos="fade-right" data-aos-easing="linear" >
              <NavLink to={"/instructors"}>
                <FaUserTie></FaUserTie>instructors
              </NavLink>
            </li>

            <li 
              onClick={handleLogout}
              className=" text-white mt-auto mb-3 ml-3"
            >
              Log Out
              <FaSignOutAlt></FaSignOutAlt>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
