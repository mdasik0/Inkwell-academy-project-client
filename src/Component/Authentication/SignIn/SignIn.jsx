import {
  FaExclamationCircle,
  FaEye,
  FaEyeSlash,
  FaRegEnvelope,
  FaUnlock,
} from "react-icons/fa";
import SocialLogin from "../SocialLogin/SocialLogin";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext, useRef, useState } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";

const SignIn = () => {
  const {
    register,
    reset,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const password = useRef({});
  password.current = watch("password", "");

  const { signInUser } = useContext(AuthContext);

  const [show, setShow] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";

  const onSubmit = (data) => {
    const email = data.email;
    const password = data.password;

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
          reset();
          navigate(from, { replace: true });
        }
      })
      .catch((error) => console.error(error));
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
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col w-full md:w-1/2 relative md:p-10 px-2 py-6 border-4 border-blue-600 rounded-xl items-center "
      >
        <h3 className="text-3xl font-bold text-blue-500 absolute left-10 -top-8 bg-white px-2 py-2 border-[3px] rounded-full border-blue-500">
          Sign in
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
              {...register("email", { required: true })}
              type="email"
              placeholder="Your email here"
              className="input border-2  border-blue-500"
            />
          </label>
        </div>
        {errors.email && (
          <span className="text-red-500 text-xs font-semibold flex items-center gap-1 mt-2">
            {" "}
            <FaExclamationCircle></FaExclamationCircle> Email is required
          </span>
        )}
        <div className="form-control relative">
          <label className="label">
            <span className="label-text">Your Password</span>
          </label>
          <label className="input-group">
            <span className="bg-blue-500 text-white">
              <FaUnlock></FaUnlock>
            </span>
            <input
              {...register("password", { required: true })}
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
        {errors.password && (
          <span className="text-red-500 text-xs font-semibold flex items-center gap-1 mt-2">
            {" "}
            <FaExclamationCircle></FaExclamationCircle> Password is required
          </span>
        )}
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
