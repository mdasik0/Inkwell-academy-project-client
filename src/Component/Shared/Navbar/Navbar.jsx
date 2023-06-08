import { Link } from "react-router-dom";
// TODO: Make Avater conditional on user 
// TODO: Make signin and signout condional on user 
// TODO: make logout conditional 
// TODO: make dashboard conditional 

const Navbar = () => {
  const Navbar = (
    <>
      <li>
        <Link>
            home
        </Link>
      </li>
      
      <li>
        <Link>
            classes
        </Link>
      </li>
      
      <li>
        <Link>
            instructors
        </Link>
      </li>
      
      <li>
        <Link to={'/signIn'}>
            sign in
        </Link>
      </li>
      
      <li>
        <Link to={'/signUp'}>
            sign up
        </Link>
      </li>
      
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
            tabIndex={0}
            className="menu menu-sm dropdown-content uppercase mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {/* navbar here */}
            {Navbar}
          </ul>
        </div>
        {/* TODO: Update the Logo to a link before submit */}
        {/* Logo Here */}
        <div className="flex items-center justify-center gap-2">
          <img className="h-16 md:block hidden" src="/favicon.png" alt="" />
          <h4 className="text-2xl logo_font">ArtBuddy</h4>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu uppercase font-semibold menu-horizontal px-1">{/* navbar here */}
        {Navbar}
        </ul>
      </div>
      <div className="navbar-end">
        <div className="avatar online">
          <div className="md:w-14 w-12  rounded-full">
            <img src="https://www.shareicon.net/data/512x512/2016/09/01/822711_user_512x512.png" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
