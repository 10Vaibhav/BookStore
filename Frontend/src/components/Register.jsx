import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";

const Register = () => {
  const [message, setMessage] = useState("");
  const { registerUser, signInWithGoogle }= useAuth();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    // watch,
    // formState: { errors },
  } = useForm();

  // register user
  const onSubmit = async (data) => {
    try{
      await registerUser(data.email, data.password);
      alert("user Registration success")
    }catch (error){
        setMessage("please provide a valid email and password");
        console.log(error);
    }
  };

  const handleGoogleSignIn = async () => {
    try{
      await signInWithGoogle()
      alert("Login successful!");
      navigate("/")
    }catch(error){
      alert("Google Sign in failed!")
      console.log(error);
    }
  };

  return (
    <div className="h-[calc(100vh-120px)] flex justify-center items-center">
      <div className="w-full max-w-sm mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h2 className="text-xl font-semibold mb-4">Please Register</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Email */}
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Email
            </label>
            <input
              {...register("email", { required: true })}
              type="email"
              name="email"
              id="email"
              placeholder="Email Address"
              className="shadow appearance-none border border-gray-300 rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow"
            />
          </div>
          {/* Password */}
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Password
            </label>
            <input
              {...register("password", { required: true })}
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              className="shadow appearance-none border border-gray-300 rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow"
            />
          </div>
          {message && <p className="text-red-500 text-xs italic">{message}</p>}
          <div>
            <button className="bg-blue-500 cursor-pointer hover:bg-blue-700 text-white font-bold py-2 px-8 rounded focus:outline-none">
              Register
            </button>
          </div>
        </form>
        <p className="align-baseline font-medium mt-4 text-sm">
          Have an account? Please{" "}
          <Link
            to="/login"
            className="cursor-pointer text-blue-500 text-blue-700"
          >
            Login
          </Link>
        </p>

        {/* google sign in */}
        <div className="mt-3">
          <button
            onClick={handleGoogleSignIn}
            className="w-full cursor-pointer flex flex-wrap gap-1 items-center justify-center bg-secondary hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none"
          >
            <FaGoogle className="mr-2" />
            Sign in with google
          </button>
        </div>

        <p className="mt-5 text-center text-gray-500 text-xs">
          @2025 Book Store. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Register;
