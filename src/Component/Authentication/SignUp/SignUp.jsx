import {
  FaAddressCard,
  FaCameraRetro,
  FaExclamationCircle,
  FaEye,
  FaEyeSlash,
  FaLock,
  FaRegEnvelope,
  FaUnlock,
} from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import SocialLogin from "../SocialLogin/SocialLogin";
import { useContext, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../../Provider/AuthProvider";
import Swal from "sweetalert2";

const SignUp = () => {
  // ================= States ================
  const { createUser, updateUser } = useContext(AuthContext);
  const [show, setShow] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const {
    register,
    reset,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const password = useRef({});
  password.current = watch("password", "");

  // ================ On Submit ===============
  const onSubmit = (data) => {
    const email = data.email;
    const password = data.password;
    const name = data.name;
    const photoUrl = data.photoUrl;

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);

        updateUser(name, photoUrl)
          .then(() => {
            const SavedUser = {
              name: name,
              email: email,
              photo: photoUrl,
              role: "student",
            };
            fetch(
              `https://b7a12-summer-camp-server-side-mdasik0.vercel.app/users`,
              {
                method: "POST",
                headers: {
                  "content-type": "application/json",
                  Authorization: `Bearer ${localStorage.getItem(
                    "access-token"
                  )}`,
                },
                body: JSON.stringify(SavedUser),
              }
            )
              .then((res) => res.json())
              .then((data) => {
                if (data.insertedId) {
                  Swal.fire(
                    "Welcome!",
                    "Your Account Has been Created!",
                    "success"
                  );
                  reset();
                  navigate("/");
                }
              });
          })
          .catch((error) => setError(error));
      })
      .catch((error) => setError(error));
  };

  return (
    <div className="border-2 mt-2 mb-10 md:p-10 p-2 mx-auto rounded-xl flex md:flex-row flex-col items-center justify-around md:w-[1280px]">
      <div>
        <img
          className="w-full"
          src="https://img.freepik.com/free-vector/mobile-login-concept-illustration_114360-83.jpg?w=740&t=st=1686217312~exp=1686217912~hmac=1472edd69e4777028b321fd0f0f8abe5382b5382446b5a010b939b84c6df0fef"
          alt=""
        />
      </div>

      {/* form start here */}

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex md:w-1/2 w-full  flex-col relative md:p-10 p-4 border-4 border-blue-600 rounded-xl items-center "
      >
        <h3 className="text-3xl font-bold text-blue-500 absolute left-10 -top-8 bg-white px-2 py-2 border-[3px] rounded-full border-blue-500">
          Sign Up
        </h3>

        {/* name */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <label className="input-group">
            <span className="bg-blue-500 text-white">
              <FaAddressCard></FaAddressCard>
            </span>
            <input
              name="name"
              {...register("name")}
              type="text"
              placeholder="Your FullName here"
              className="input border-2  border-blue-500"
            />
          </label>
        </div>

        {/* Photo Url */}

        <div className="form-control">
          <label className="label">
            <span className="label-text">PhotoUrl</span>
          </label>
          <label className="input-group">
            <span className="bg-blue-500 text-white">
              <FaCameraRetro></FaCameraRetro>
            </span>
            <input
              name="photoUrl"
              {...register("photoUrl")}
              type="text"
              placeholder="Your PhotoUrl here"
              className="input border-2  border-blue-500"
            />
          </label>
        </div>

        {/* email */}

        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <label className="input-group">
            <span className="bg-blue-500 text-white">
              <FaRegEnvelope></FaRegEnvelope>
            </span>
            <input
              {...register("email", { required: true })}
              type="email"
              placeholder="Your Email here"
              className="input border-2  border-blue-500"
            />
          </label>
        </div>
        {/* email validation */}
        {errors.email && (
          <span className="text-red-500 text-xs font-semibold flex items-center gap-1 mt-2">
            {" "}
            <FaExclamationCircle></FaExclamationCircle> Email is required
          </span>
        )}

        {/* Password */}

        <div className="form-control relative">
          <label className="label">
            <span className="label-text">Password</span>
          </label>

          <label className="input-group">
            <span className="bg-blue-500 text-white">
              <FaUnlock></FaUnlock>
            </span>

            {/* input box */}
            <input
              {...register("password", {
                required: true,
                minLength: 6,
                maxLength: 20,
                pattern: /(?=.*?[A-Z])(?=.*?[#?!@$%^&*-])/,
              })}
              type={show ? `text` : `password`}
              placeholder="New Password"
              className="input border-2 border-blue-500"
            />
            {/* input ends */}
            {/* eye btn */}
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
          </label>
        </div>
        {/* error */}
        {errors.password && (
          <span className="text-red-500 text-xs font-semibold flex items-center gap-1 mt-2">
            {" "}
            <FaExclamationCircle></FaExclamationCircle> Password is required
          </span>
        )}
        {errors.password?.type === "minLength" && (
          <span className="text-red-500 text-xs font-semibold flex items-center gap-1 mt-2">
            {" "}
            <FaExclamationCircle></FaExclamationCircle> Password is too short,{" "}
            <br />
            Atleast give 6 characters
          </span>
        )}
        {errors.password?.type === "maxLength" && (
          <span className="text-red-500 text-xs font-semibold flex items-center gap-1 mt-2">
            {" "}
            <FaExclamationCircle></FaExclamationCircle> Password is too Long,{" "}
            <br />
            give less then 20 characters
          </span>
        )}
        {errors.password?.type === "pattern" && (
          <span className="text-red-500 text-xs font-semibold flex items-center gap-1 mt-2">
            {" "}
            <FaExclamationCircle></FaExclamationCircle> Make sure your Password
            includes: <br /> 1 Capital letter, 1 Special character
          </span>
        )}
        {/* error ends here */}

        {/* Confirm Password */}

        <div className="form-control relative">
          <label className="label">
            <span className="label-text">Confirm Password</span>
          </label>
          <label className="input-group">
            <span className="bg-blue-500 text-white">
              <FaLock></FaLock>
            </span>
            <input
              {...register("confirmPassword", {
                validate: (value) =>
                  value === password.current || "Passwords do not match",
              })}
              type={show ? `text` : `password`}
              placeholder="Confirm Password"
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
        {errors.confirmPassword && (
          <span className="text-red-500 text-sm mt-2 flex items-center font-semibold">
            {" "}
            <FaExclamationCircle></FaExclamationCircle>{" "}
            {errors.confirmPassword.message}
          </span>
        )}
        <div>
          <h4 className="text-xs font-semibold text-red-500">
            {error.message}
          </h4>
        </div>

        {/* Sign Up btn */}

        <div className="md:w-2/3  ml-3 mt-4 md:ml-0 w-full">
          <input
            className="uppercase text-sm btn bg-blue-600 text-white hover:bg-blue-400"
            type="submit"
            value="Sign Up"
          />
        </div>

        {/* link to signIN */}

        <Link to={"/signIn"}>
          <label className="label">
            <span className="label-text hover:text-blue-700 hover:underline font-semibold">
              Already have an account?
            </span>
          </label>
        </Link>

        <div className="divider text-sm font-semibold">or</div>
        <SocialLogin></SocialLogin>
      </form>
    </div>
  );
};

export default SignUp;
