import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";
import Swal from "sweetalert2";
// TODO: Make Avater conditional on user 
// TODO: Make signin and signout condional on user 
// TODO: make logout conditional 
// TODO: make dashboard conditional 

const Navbar = () => {

  const {user, logOut} = useContext(AuthContext)

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
        <NavLink to={'/'}>
            home
        </NavLink>
      </li>
      
      <li>
        <NavLink to={'/classes'}>
            classes
        </NavLink>
      </li>
      
      <li>
        <NavLink to={'/instructors'}>
            instructors
        </NavLink>
      </li>
      
      {
        user ? 
        <>
        <li>
          <NavLink to={'/dashBoard'}>
            Dashboard
          </NavLink>
        </li>
        <li onClick={handleLogout}>
          <Link>
              Log Out
          </Link>
        </li>
        </>
        
        :
        <>
        <li>
        <NavLink to={'/signIn'}>
            sign in
        </NavLink>
      </li>
      
      <li>
        <NavLink to={'/signUp'}>
            sign up
        </NavLink>
      </li>
        </>
      }
      
    </>
  );
  return (
    <div className="navbar mx-auto md:w-[1280px] md:bg-transparent bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
        {/* TODO: Update the Logo to a link before submit */}
        {/* Logo Here */}
        <div className="flex items-center justify-center gap-2">
          <img className="h-16 md:block hidden" src="/favicon.png" alt="" />
          <h4 className="text-2xl md:flex-none flex items-baseline  logo_font">Inkwell <span className="text-xs">.Academy</span></h4>
        </div>
      </div>
      <div className={`${user? 'navbar-center' : 'navbar-end'} hidden lg:flex`}>
        <ul className="menu uppercase font-semibold menu-horizontal px-1">{/* navbar here */}
        {Navbar}
        </ul>
      </div>
      {
        user 
        ? <div className="navbar-end">
        <div className="avatar online">
          <div className="md:w-14 w-12  rounded-full">
            <img src={user?.photoURL} />
          </div>
        </div>
      </div> 
      :
      <></>
      }
      
    </div>
  );
};

export default Navbar;
