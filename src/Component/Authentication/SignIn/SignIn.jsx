import { FaEye, FaEyeSlash, FaRegEnvelope, FaUnlock } from "react-icons/fa";
import SocialLogin from "../SocialLogin/SocialLogin";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import Swal from "sweetalert2";

// TODO: use react hook form on this page

const SignIn = () => {

  const {signInUser} = useContext(AuthContext)

  const [show, setShow] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";


  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    // navigate
    


    // login
    signInUser(email, password)
      .then((result) => {
        if (result.user) {
          Swal.fire(
            "Login Successful",
            "You have logged in to your account successfully!",
            "success"
          );

          navigate(from, { replace: true });
        }
      })
      .catch((error) => console.error(error));

    form.reset();
  };
  return (
    <div className="border-2 mt-2 mb-10 p-2 md:p-10 mx-auto rounded-xl flex md:flex-row flex-col items-center justify-around md:w-[1280px]">
      <div>
        <img
          className="w-full"
          src="https://img.freepik.com/free-vector/login-concept-illustration_114360-757.jpg?w=740&t=st=1686214938~exp=1686215538~hmac=8f847e7428adfd8b2e527d680923c9a321f78e98f179c416b48e8c173487ee33"
          alt=""
        />
      </div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col w-full md:w-1/2 relative md:p-10 px-2 py-6 border-4 border-blue-600 rounded-xl items-center "
      >
        <h3 className="text-3xl font-bold text-blue-500 absolute left-10 -top-5 bg-white px-2 border-x-[3px] rounded border-blue-500">
          Sign In
        </h3>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Your Email</span>
          </label>
          <label className="input-group">
            <span className="bg-blue-500 text-white">
              <FaRegEnvelope></FaRegEnvelope>
            </span>
            <input
              name="email"
              required
              type="email"
              placeholder="Your email here"
              className="input border-2  border-blue-500"
            />
          </label>
        </div>
        <div className="form-control relative">
          <label className="label">
            <span className="label-text">Your Password</span>
          </label>
          <label className="input-group">
            <span className="bg-blue-500 text-white">
              <FaUnlock></FaUnlock>
            </span>
            <input
              name="password"
              required
              type={show ? `text` : `password`}
              placeholder="Your Password here"
              className="input border-2 border-blue-500"
              />
          </label>
              {show ? (
                <span
                  onClick={() => setShow(!show)}
                  className="absolute bottom-2 duration-500 text-blue-700 rounded-full p-2 right-1"
                >
                  <FaEye></FaEye>
                </span>
              ) : (
                <span
                  onClick={() => setShow(!show)}
                  className="absolute bottom-2 duration-500 text-blue-700 rounded-full p-2 right-1"
                >
                  <FaEyeSlash></FaEyeSlash>
                </span>
              )}
        </div>
          <label className="label ml-6 md:ml-0  w-full md:w-2/3 flex items-start">
            <span className="label-text hover:text-blue-700 hover:underline font-semibold">
              Forgotten Password?
            </span>
          </label>
        <div className="md:w-2/3  ml-6 md:ml-0 w-full">
          <input
            className="uppercase input text-sm btn bg-blue-600 text-white hover:bg-blue-400"
            type="submit"
            value="Sign In"
          />
        </div>
        <Link to={"/signUp"}>
          <label className="label">
            <span className="label-text hover:text-blue-700 hover:underline font-semibold">
              New Here? Create an account
            </span>
          </label>
        </Link>
        <div className="divider text-sm font-semibold">or</div>
        <SocialLogin></SocialLogin>
      </form>
    </div>
  );
};

export default SignIn;
