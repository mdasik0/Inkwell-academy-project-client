import { FaAddressCard, FaCameraRetro, FaEye, FaEyeSlash, FaLock, FaRegEnvelope, FaUnlock } from "react-icons/fa";
import { Link } from "react-router-dom";
import SocialLogin from "../SocialLogin/SocialLogin";
import { useState } from "react";

const SignUp = () => {
    const [show,setShow] = useState(false)

    return (
        <div className="border-2 mt-2 mb-10 p-10 mx-auto rounded-xl flex md:flex-row flex-col items-center justify-around md:w-[1280px]">
        <div>
            <img className="h-96" src="https://img.freepik.com/free-vector/login-concept-illustration_114360-757.jpg?w=740&t=st=1686214938~exp=1686215538~hmac=8f847e7428adfd8b2e527d680923c9a321f78e98f179c416b48e8c173487ee33" alt="" />
        </div>
      <form className="flex flex-col relative p-10 border-4 border-blue-600 rounded-xl items-center ">
        <h3 className="text-3xl font-bold text-blue-500 absolute left-10 -top-5 bg-white px-2 border-x-[3px] rounded border-blue-500">Sign Up</h3>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <label className="input-group">
            <span className="bg-blue-500 text-white"><FaAddressCard></FaAddressCard></span>
            <input
                name='name'
              type="text"
              placeholder="Your FullName here"
              className="input border-2  border-blue-500"
            />
          </label>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">PhotoUrl</span>
          </label>
          <label className="input-group">
            <span className="bg-blue-500 text-white"><FaCameraRetro></FaCameraRetro></span>
            <input
                name='photoUrl'
              type="text"
              placeholder="Your PhotoUrl here"
              className="input border-2  border-blue-500"
            />
          </label>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <label className="input-group">
            <span className="bg-blue-500 text-white"><FaRegEnvelope></FaRegEnvelope></span>
            <input
                name='email'
              type="email"
              placeholder="Your Email here"
              className="input border-2  border-blue-500"
            />
          </label>
        </div>
        <div className="form-control relative">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <label className="input-group">
            <span className="bg-blue-500 text-white"><FaUnlock></FaUnlock></span>
            <input
                name='password'
              type={show ? `text` : `password`} 
              placeholder="New Password"
              className="input border-2 border-blue-500"
            />
          </label>
          {
            show 
            ? <span onClick={() => setShow(!show)} className="absolute bottom-2 duration-500 text-blue-700 rounded-full p-2 right-1"><FaEye></FaEye></span> 
            : <span onClick={() => setShow(!show)} className="absolute bottom-2 duration-500 text-blue-700 rounded-full p-2 right-1"><FaEyeSlash></FaEyeSlash></span>
          }
        </div>
        <div className="form-control relative">
          <label className="label">
            <span className="label-text">Confirm Password</span>
          </label>
          <label className="input-group">
            <span className="bg-blue-500 text-white"><FaLock></FaLock></span>
            <input
                name='confirmPassword'
              type={show ? `text` : `password`} 
              placeholder="Confirm Password"
              className="input border-2 border-blue-500"
            />
          </label>
          {
            show 
            ? <span onClick={() => setShow(!show)} className="absolute bottom-2 duration-500 text-blue-700 rounded-full p-2 right-1"><FaEye></FaEye></span> 
            : <span onClick={() => setShow(!show)} className="absolute bottom-2 duration-500 text-blue-700 rounded-full p-2 right-1"><FaEyeSlash></FaEyeSlash></span>
          }
        </div>
        <div className="w-full my-6">
            <input className="uppercase text-sm btn bg-blue-600 text-white hover:bg-blue-400" type="submit" value="Sign Up" />
        </div>
        <Link to={'/signIn'}>
        <label className="label">
            <span className="label-text hover:text-blue-700 hover:underline font-semibold">Already have an account?</span>
        </label>
        </Link>
        <div className="divider text-sm font-semibold">or</div>
        <SocialLogin></SocialLogin>
      </form>
    </div>
    );
};

export default SignUp;